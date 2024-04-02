<?php
include("../cn.php");
include("../cors.php");

if(!isset($_POST['email'])) die("Error a recibir email");
if(!isset($_POST['password'])) die("Error a recibir password");

$email = $_POST['email'];
$password = $_POST['password'];

$sentenciaSesion = "SELECT id,id_user FROM user WHERE email='$email' and password='$password'";
$resUser=mysqli_query($con,$sentenciaSesion);
if($resUser){
    while ($row = mysqli_fetch_assoc($resUser)) {
        $id = $row['id'];
        $id_user = $row['id_user'];
    }
    if(mysqli_num_rows($resUser)>0){
        
        die(json_encode([
            "success" => true,
            "data" => "Sesion exitosa",
            "id" => $id,
            "is_user" => ($id_user==="3")
        ]));
    } else {
        die(json_encode(["success" => false,"data" => "El correo o contraseña son incorrectos"]));
    }
} else {
    die(json_encode(["success" => false,"data" => "Error del server"]));
}
