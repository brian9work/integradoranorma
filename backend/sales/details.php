<?php
include("../cn.php");
include("../cors.php");
include("../utils.php");
include("../search.php");
include("../searchForId.php");
include("../getByUserId.php");
include("../getAll.php");

if(!isset($_GET['id_pedido'])) die(json_encode(["success" => false,"error" => "Error a recibir el id del pedido"]));

$id_pedido = $_GET['id_pedido'];

if(!SearchForID::search_sale($id_pedido)) die(json_encode(["success" => false,"data" => "El pedido no existe"]));

$selectSale = "SELECT 
        p.name,p.imagen,p.description,p.id AS id_product,
        pm.payment_method,
        hp.id_process,
        ps.payment_status,
        s.created_at,s.quantity,s.total,
        s.id AS id_sale 
    FROM sale s
    INNER JOIN product p ON p.id=s.id_product
    INNER JOIN payment pa ON pa.id=s.id_payment
    INNER JOIN history_process hp ON hp.id=s.id_process
    INNER JOIN cat_payment_method pm ON pm.id=pa.id_method
    INNER JOIN cat_payment_status ps ON ps.id=pa.id_status
    WHERE s.id=$id_pedido";

$response = mysqli_query($con, $selectSale);
if(!$response) response(0,"Hubo un error al buscar el pedido");

$jsonSale = array();
while ($row = mysqli_fetch_assoc($response)) { $jsonSale[] = $row; }

$json = array();
$json[] = [
    "sale" => $jsonSale[0], 
    "process" => getAll::getCatHistoryProcess(),
];
response(1,$json);
// return $json;


response(1,$json[0]);


