<?php

declare(strict_types=1);

/*
 * Временная серверная защита jaeu.kz на период разработки.
 * Одна учётная запись, фиксированная сессия 5 минут.
 * В репозитории хранится только bcrypt-хеш пароля.
 */
const JAEU_AUTH_USER = 'jaeu';
const JAEU_AUTH_PASSWORD_HASH = '$2y$12$RMy2CiDtBDVFhxUkXKokVebQACIPIGDIVWOdwxaIcqr1oMI7RPhpu';
const JAEU_AUTH_TTL = 300;
const JAEU_SESSION_NAME = 'JAEU_AUTH';

$https = (!empty($_SERVER['HTTPS']) && strtolower((string) $_SERVER['HTTPS']) !== 'off')
    || strtolower((string) ($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '')) === 'https';

ini_set('session.gc_maxlifetime', (string) JAEU_AUTH_TTL);
ini_set('session.use_strict_mode', '1');
session_name(JAEU_SESSION_NAME);
session_set_cookie_params([
    'lifetime' => JAEU_AUTH_TTL,
    'path' => '/',
    'secure' => $https,
    'httponly' => true,
    'samesite' => 'Strict',
]);
session_start();

function no_cache_headers(): void
{
    header('Cache-Control: private, no-store, no-cache, must-revalidate, max-age=0');
    header('Pragma: no-cache');
    header('Expires: 0');
}

function request_uri(): string
{
    $uri = (string) ($_SERVER['REQUEST_URI'] ?? '/');
    return $uri !== '' ? $uri : '/';
}

function safe_return_to(string $value): string
{
    if ($value === '' || $value[0] !== '/' || strncmp($value, '//', 2) === 0) {
        return '/';
    }

    if (preg_match('/[\r\n]/', $value) === 1) {
        return '/';
    }

    return $value;
}

function clear_auth_session(): void
{
    $_SESSION = [];

    if (ini_get('session.use_cookies')) {
        $params = session_get_cookie_params();
        setcookie(
            session_name(),
            '',
            time() - 42000,
            $params['path'],
            $params['domain'],
            (bool) $params['secure'],
            (bool) $params['httponly']
        );
    }

    session_destroy();
}

function render_gate(string $returnTo, string $error = ''): void
{
    http_response_code(200);
    no_cache_headers();
    header('Content-Type: text/html; charset=UTF-8');
    header('X-Robots-Tag: noindex, nofollow, noarchive');
    header("Content-Security-Policy: default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; base-uri 'none'; frame-ancestors 'none'");

    $returnEscaped = htmlspecialchars($returnTo, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $errorEscaped = htmlspecialchars($error, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');

    echo '<!doctype html><html lang="ru"><head><meta charset="utf-8">';
    echo '<meta name="viewport" content="width=device-width,initial-scale=1">';
    echo '<title>Сайт находится в разработке</title>';
    echo '<style>';
    echo '*{box-sizing:border-box}html,body{margin:0;min-height:100%;background:#fff;color:#000}';
    echo 'body{min-height:100vh;display:grid;place-items:center;padding:24px;font-family:Arial,Helvetica,sans-serif}';
    echo '.gate{width:min(100%,420px);text-align:center}';
    echo 'h1{margin:0;font-size:clamp(24px,4vw,36px);line-height:1.15;font-weight:700;letter-spacing:.035em}';
    echo 'form{margin-top:38px;display:grid;gap:14px;text-align:left}';
    echo 'label{font-size:14px;font-weight:600}';
    echo 'input{width:100%;margin-top:7px;border:1px solid #111;background:#fff;color:#000;padding:13px 14px;font:16px/1.2 Arial,Helvetica,sans-serif;outline:none}';
    echo 'input:focus{border-width:2px;padding:12px 13px}';
    echo 'button{min-height:48px;border:1px solid #000;background:#000;color:#fff;padding:12px 18px;font:600 15px/1 Arial,Helvetica,sans-serif;cursor:pointer}';
    echo '.error{margin:14px 0 0;font-size:14px;line-height:1.4;color:#000}';
    echo '</style></head><body><main class="gate">';
    echo '<h1>САЙТ НАХОДИТСЯ В РАЗРАБОТКЕ</h1>';

    if ($errorEscaped !== '') {
        echo '<p class="error" role="alert">' . $errorEscaped . '</p>';
    }

    echo '<form method="post" autocomplete="on">';
    echo '<input type="hidden" name="return_to" value="' . $returnEscaped . '">';
    echo '<label>Логин<input type="text" name="username" autocomplete="username" required autofocus></label>';
    echo '<label>Пароль<input type="password" name="password" autocomplete="current-password" required></label>';
    echo '<button type="submit">ВОЙТИ</button>';
    echo '</form></main></body></html>';
    exit;
}

function serve_protected_page(string $uri, int $expiresAt): void
{
    $path = (string) (parse_url($uri, PHP_URL_PATH) ?? '/');
    $path = rawurldecode($path);

    if ($path === '/auth.php' || $path === '/__auth' || $path === '/__auth/') {
        header('Location: /', true, 302);
        exit;
    }

    if (strpos($path, "\0") !== false || preg_match('#(^|/)\.\.(/|$)#', $path) === 1) {
        http_response_code(400);
        exit('Bad request');
    }

    $root = realpath(__DIR__);
    if ($root === false) {
        http_response_code(500);
        exit('Server configuration error');
    }

    $relative = ltrim($path, '/');
    if ($relative === '') {
        $relative = 'index.html';
    } elseif (substr($relative, -1) === '/') {
        $relative .= 'index.html';
    } elseif (pathinfo($relative, PATHINFO_EXTENSION) === '') {
        $directoryIndex = __DIR__ . '/' . $relative . '/index.html';
        if (is_file($directoryIndex)) {
            $relative .= '/index.html';
        }
    }

    $candidate = realpath(__DIR__ . '/' . $relative);
    $isInsideRoot = $candidate !== false
        && ($candidate === $root || strpos($candidate, $root . DIRECTORY_SEPARATOR) === 0);

    if (!$isInsideRoot || !is_file((string) $candidate) || strtolower(pathinfo((string) $candidate, PATHINFO_EXTENSION)) !== 'html') {
        $candidate = realpath(__DIR__ . '/404.html');
        http_response_code(404);
    }

    if ($candidate === false || !is_file($candidate)) {
        http_response_code(404);
        exit('Not found');
    }

    $html = file_get_contents($candidate);
    if ($html === false) {
        http_response_code(500);
        exit('Unable to read page');
    }

    no_cache_headers();
    header('Content-Type: text/html; charset=UTF-8');

    /*
     * Сервер всё равно проверяет сессию на каждом запросе. Дополнительный
     * таймер перезагружает уже открытую страницу ровно после истечения 5 минут,
     * чтобы содержимое не оставалось на экране после завершения сессии.
     */
    $remainingMs = max(0, ($expiresAt - time()) * 1000);
    $expiryScript = '<script>(function(){var end=Date.now()+' . $remainingMs . ';function check(){if(Date.now()>=end){location.replace(location.href);}}setTimeout(check,' . ($remainingMs + 50) . ');document.addEventListener("visibilitychange",function(){if(!document.hidden)check();});window.addEventListener("pageshow",check);})();</script>';

    if (stripos($html, '</body>') !== false) {
        $html = preg_replace('/<\/body>/i', $expiryScript . '</body>', $html, 1) ?? $html;
    } else {
        $html .= $expiryScript;
    }

    echo $html;
    exit;
}

$uri = request_uri();
$pathOnly = (string) (parse_url($uri, PHP_URL_PATH) ?? '/');
$returnTo = ($pathOnly === '/auth.php' || $pathOnly === '/__auth' || $pathOnly === '/__auth/') ? '/' : safe_return_to($uri);
$now = time();
$expiresAt = isset($_SESSION['jaeu_auth_expires_at']) ? (int) $_SESSION['jaeu_auth_expires_at'] : 0;
$isAuthenticated = !empty($_SESSION['jaeu_authenticated']) && $expiresAt > $now;

if (!$isAuthenticated && (!empty($_SESSION['jaeu_authenticated']) || $expiresAt > 0)) {
    clear_auth_session();
    session_id('');
    session_start();
    $expiresAt = 0;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim((string) ($_POST['username'] ?? ''));
    $password = (string) ($_POST['password'] ?? '');
    $postedReturnTo = safe_return_to((string) ($_POST['return_to'] ?? $returnTo));

    if (hash_equals(JAEU_AUTH_USER, $username) && password_verify($password, JAEU_AUTH_PASSWORD_HASH)) {
        session_regenerate_id(true);
        $_SESSION['jaeu_authenticated'] = true;
        $_SESSION['jaeu_auth_expires_at'] = time() + JAEU_AUTH_TTL;
        header('Location: ' . $postedReturnTo, true, 303);
        exit;
    }

    usleep(350000);
    render_gate($postedReturnTo, 'Неверный логин или пароль.');
}

if (!$isAuthenticated) {
    render_gate($returnTo);
}

serve_protected_page($uri, $expiresAt);
