<?php
include("../cn.php");
include("../cors.php");

if(!isset($_POST['id_user'])) die(json_encode(["success" => false,"error" => "Error a recibir el id del usuario"]));
if(!isset($_POST['id_product'])) die(json_encode(["success" => false,"error" => "Error a recibir el id del producto"]));

$id_user = $_POST['id_user'];
$id_product = $_POST['id_product'];

$deleteCart = "DELETE FROM cart WHERE id_user='$id_user' AND id_product='$id_product'";
$resdeleteCart=mysqli_query($con,$deleteCart);
if(!$resdeleteCart) die(json_encode(["success" => false,"data" => "Hubo un error al eliminar en el carrito"]));
die(json_encode(["success" => true,"data" => "Producto eliminado"]));






