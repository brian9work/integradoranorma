<?php
include("../cn.php");
include("../cors.php");
include("../utils.php");

if(!isset($_POST['name'])) json_encode(["success" => false,"error" => "Error a recibir name"]);
if(!isset($_POST['spelitF'])) json_encode(["success" => false,"error" => "Error a recibir spelitF"]);
if(!isset($_POST['spelitM'])) json_encode(["success" => false,"error" => "Error a recibir spelitM"]);
if(!isset($_POST['email'])) json_encode(["success" => false,"error" => "Error a recibir email"]);
if(!isset($_POST['password'])) json_encode(["success" => false,"error" => "Error a recibir password"]);


$name = $_POST['name'];
$spelitF = $_POST['spelitF'];
$spelitM = $_POST['spelitM'];
$email = $_POST['email'];
$password = $_POST['password'];

$sentenciaEmail = "SELECT * FROM user WHERE email='$email'";
$resUser=mysqli_query($con,$sentenciaEmail);
if($resUser){
    if(mysqli_num_rows($resUser)>0){
        die(json_encode(["success" => false,"data" => "El correo ya esta registrado"]));
    }
}

$senUser = "INSERT INTO user (name, lastnameF, lastnameM, email, password, id_address, id_user, status) VALUES ('$name', '$spelitF', '$spelitM', '$email', '$password',1,3,1)";
$resUser=mysqli_query($con,$senUser);
if(!$resUser) die(response(0,"Hubo un error al insertar en usuarios"));

$sentenciaSesion = "SELECT id,id_user FROM user WHERE email='$email' and password='$password'";
$resUser=mysqli_query($con,$sentenciaSesion);
if($resUser){
    while ($row = mysqli_fetch_assoc($resUser)) {
        $id = $row['id'];
        $id_user = $row['id_user'];
    }
        // die(response(1,$id));
        die(json_encode([
            "success" => true,
            "data" => "Usuario Registrado",
            "id" => $id,
            "is_user" => ($id_user==="3")
        ]));
}
