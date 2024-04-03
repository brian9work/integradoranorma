<?php
include("../cn.php");
include("../cors.php");
include("../utils.php");

if(!isset($_POST['add'])) die(json_encode(["success" => false,"error" => "Error a recibir el tipo"]));
if(!isset($_POST['id_user'])) die(json_encode(["success" => false,"error" => "Error a recibir el id del usuario"]));
if(!isset($_POST['id_product'])) die(json_encode(["success" => false,"error" => "Error a recibir el id del producto"]));

$add =$_POST['add'];
$id_user = $_POST['id_user'];
$id_product = $_POST['id_product'];

$searchUser = "SELECT * FROM cart WHERE id_user='$id_user'";
$resSearchUser=mysqli_query($con,$searchUser);
if($resSearchUser)
    if(mysqli_num_rows($resSearchUser)<1)
        response(0,"El usuario no existe");

$searchProduct = "SELECT * FROM cart WHERE id_product='$id_product'";
$resSearchProduct=mysqli_query($con,$searchProduct);
if($resSearchProduct)
    if(mysqli_num_rows($resSearchProduct)<1)
        response(0,"El producto no existe");


$searchInCart = "SELECT quantity FROM cart WHERE id_user='$id_user' AND id_product='$id_product' LIMIT 1";
$quantityPro=mysqli_query($con,$searchInCart);
$quantityPro=mysqli_fetch_assoc($quantityPro)['quantity'];
if($quantityPro<=1 and $add==0) response(0,"El producto no puede tener menos de uno");

if($add==0){
    $updateCart = "UPDATE cart SET quantity=($quantityPro-1) WHERE id_user='$id_user' AND id_product='$id_product';";
} else {
    $updateCart = "UPDATE cart SET quantity=($quantityPro+1) WHERE id_user='$id_user' AND id_product='$id_product';";
}

$resAddToCart=mysqli_query($con,$updateCart);
if(!$resAddToCart) response(0,"Hubo un error al insertar en el carrito");
response(1, "Carrito actualizado");






