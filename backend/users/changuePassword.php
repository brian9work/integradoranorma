<?php
include("../cn.php");
include("../cors.php");
include("../search.php");

if(!isset($_POST['id_user'])) die(json_encode(["success" => false,"error" => "Error a recibir el id del usuario"]));
if(!isset($_POST['password'])) die(json_encode(["success" => false,"error" => "Error a recibir el password"]));

$id_user = $_POST['id_user'];
$password = $_POST['password'];

if(!Search::search_user($id_user)) die(json_encode(["success" => false,"data" => "El usuario no existe o se encuentra suspendido"]));

$updatePassword = "UPDATE user SET password='$password' WHERE id=$id_user";
$response=mysqli_query($con,$updatePassword);
if (!$response){
    die(json_encode(["success" => false,"data" => "Error al cambiar la contraseña"]));
}

die(json_encode(["success" => true,"data" => "La contraseña se ha cambiado"]));