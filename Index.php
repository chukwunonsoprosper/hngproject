<?php

function getCityFromIpInfo() {
    $ipInfoJson = file_get_contents('http://ipinfo.io/json');
    $ipInfo = json_decode($ipInfoJson, true);
    return ['ip' => $ipInfo['ip'], 'city' => $ipInfo['city']];
}


function getCurrentTemperature($city, $apiKey) {
    $url = "https://api.openweathermap.org/data/2.5/weather?q={$city}&appid={$apiKey}&units=metric";
    $weatherJson = file_get_contents($url);
    $weatherData = json_decode($weatherJson, true);
    return $weatherData['main']['temp'];
}


$apiKey = '4db2a2adbdd4dc4ceff76ab4135f9bd2';
$visitorName = isset($_GET['visitor_name']) ? $_GET['visitor_name'] : 'visitor';

$ipInfo = getCityFromIpInfo();
$city = $ipInfo['city'];
$ip = $ipInfo['ip'];
$temperature = getCurrentTemperature($city, $apiKey);

$response = [
    'client_ip' => $ip,
    'location' => $city,
    'greeting' => "Hello, {$visitorName}!",
    'temperature' => "The temperature is {$temperature} degrees Celsius in {$city}"
];

header('Content-Type: application/json');

echo json_encode($response);
?>
