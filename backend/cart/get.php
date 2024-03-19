<?php
include("../cn.php");
include("../cors.php");

if(!isset($_POST['id_user'])) die(json_encode(["success" => false,"error" => "Error a recibir el id del usuario"]));
$id_user = $_POST['id_user'];

$searchUser = "SELECT * FROM user WHERE id='$id_user'";
$resSearchUser=mysqli_query($con,$searchUser);
if($resSearchUser){
    if(mysqli_num_rows($resSearchUser)<1){
        die(json_encode(["success" => false,"data" => "El usuario no existe"]));}}

$getProducts = "SELECT * FROM cart c
    INNER JOIN product p ON c.id_product=p.id
    WHERE c.id_user='$id_user'";
$resGetProducts=mysqli_query($con,$getProducts);
$json = array();
while ($row = mysqli_fetch_assoc($resGetProducts)) {
    $json[] = $row;
}
die(json_encode(["success" => false,"data" => $json]));


