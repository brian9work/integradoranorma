<?php
include("../cn.php");
include("../cors.php");
include("../search.php");
include("../utils.php");

if(!isset($_POST['id_user'])) die(json_encode(["success" => false,"error" => "Error a recibir el id del usuario"]));
$id_user = $_POST['id_user'];

if(!search::search_user($id_user)) response(0,"El usuario no existe");

$getProducts = "SELECT * FROM cart c
    INNER JOIN product p ON c.id_product=p.id
    WHERE c.id_user='$id_user'";
$resGetProducts=mysqli_query($con,$getProducts);
$json = array();
while ($row = mysqli_fetch_assoc($resGetProducts)) {
    $json[] = $row;
}
die(json_encode(["success" => false,"data" => $json]));


