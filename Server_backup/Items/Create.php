<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../Config/ConnectDatabase.php';
include_once '../Class/Items.php';

$database = new Connect_Database();
$db = $database->getConnection();

$items = new Items($db);

$data = json_decode(file_get_contents("php://input"));

if (
    !empty($data->names) && !empty($data->descriptions) &&
    !empty($data->amount) && !empty($data->imageURL)
) {

    $items->NAMES = $data->names;
    $items->DESCRIPTIONS = $data->descriptions;
    $items->AMOUNT = $data->amount;
    $items->IMAGEURL = $data->imageURL;
    $items->POSTDATE = date('Y-m-d H:i:s');

    if ($items->create()) {
        http_response_code(201);
        echo json_encode(array("message" => "Item was created."));
    } else {
        http_response_code(503);
        echo json_encode(array("message" => "Unable to create item."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to create item. Data is incomplete."));
}
