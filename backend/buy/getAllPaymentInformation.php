<?php
include("../cn.php");
include("../cors.php");
include("../utils.php");
include("../search.php");
include("../getByUserId.php");
include("../getAll.php");

if(!isset($_POST['id_user'])) die(json_encode(["success" => false,"error" => "Error a recibir el id del usuario"]));

$id_user = $_POST['id_user'];

if(!Search::search_user($id_user)) die(json_encode(["success" => false,"data" => "El usuario no existe"]));

$json = array();
$json[] = [
    "cart" => GetByUserId::getCartByUserId($id_user), 
    "address" => GetByUserId::getAddressByUserId($id_user),
    "paymentMethods" =>  GetAll::getCatPaymentMethod()
];

response(1,$json[0]);


