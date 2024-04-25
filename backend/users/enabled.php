<?php
include("../cn.php");
include("../cors.php");

if(!isset($_GET['id_user'])) die(json_encode(["success" => false,"error" => "Error a recibir el id del usuario"]));
$id = $_GET['id_user'];

$sentence = "UPDATE user SET status=1 WHERE id=$id";
$response=mysqli_query($con,$sentence);
if($response){
    die(json_encode(["success" => true,"data" => "Usuario suspendido"]));
} else{
    die(json_encode(["success" => false,"data" => "Error al suspender usuario"]));
}
