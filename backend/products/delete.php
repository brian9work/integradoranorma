<?php
include("../cn.php");
include("../cors.php");

if(!isset($_GET['id_product'])) die(json_encode(["success" => false,"error" => "Error a recibir el id del producto"]));
$id = $_GET['id_product'];

$delProduct = "DELETE FROM product WHERE id = $id";
$resProduct=mysqli_query($con,$delProduct);
if(!$resProduct) die(json_encode(["success" => false,"data" => "Error al eliminar"]));
die(json_encode(["success" => true,"data" => "producto eliminado"]));