<?php
include("../cn.php");
include("../cors.php");

if(!isset($_GET['id_user'])) die(json_encode(["success" => false,"error" => "Error a recibir el id del usuario"]));
if(!isset($_GET['status'])) die(json_encode(["success" => false,"error" => "Error a recibir el status"]));

$status = $_GET['status']=="true" ? "1" : "0";
$id = $_GET['id_user'];

if($status=="0"){
    if(!isset($_POST['email']) && !isset($_POST['password'])){
        die(json_encode(["success" => false,"error" => "Error a recibir el correo y contraseña"]));
    } else{
        $email = $_POST['email'];
        $password = $_POST['password'];
        $sentence = "SELECT * FROM user WHERE email='$email' AND password='$password' and id='$id'";
        $response=mysqli_query($con,$sentence);
        if(mysqli_num_rows($response)==0){
            die(json_encode(["success" => false,"data" => "Correo o contraseña incorrectos"]));
        }
    }
}

$sentence = "UPDATE user SET status='$status' WHERE id=$id";
$response=mysqli_query($con,$sentence);
if($response){
    die(json_encode(["success" => true,"data" => $status=="0" ? "Usuario suspendido" : "Cuenta reactivada"]));
} else{
    die(json_encode(["success" => false,"data" => "Error al suspender usuario"]));
}
