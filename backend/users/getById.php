<?php
include("../cn.php");
include("../cors.php");

if(!isset($_GET['id_user'])) die(json_encode(["success" => false,"error" => "Error a recibir el id del usuario"]));
$id = $_GET['id_user'];

$sentence = "SELECT * FROM user WHERE id=$id";
$response=mysqli_query($con,$sentence);
$jsonUser = array();
while ($row = mysqli_fetch_assoc($response)) {
    $jsonUser[] = $row;
}

$id_address = $jsonUser[0]['id_address'];
$sentence = "SELECT * FROM address WHERE id=$id_address";
$response=mysqli_query($con,$sentence);
$jsonAddress = array();
while ($row = mysqli_fetch_assoc($response)) {
    $jsonAddress[] = $row;
}

$sentence = "SELECT COUNT(*) AS cart FROM cart WHERE id_user=$id";
$response=mysqli_query($con,$sentence);
$jsonCountCart = array();
while ($row = mysqli_fetch_assoc($response)) {
    $jsonCountCart[] = $row;
}

$sentence = "SELECT COUNT(*) AS sale FROM sale WHERE id_user=$id";
$response=mysqli_query($con,$sentence);
$jsonCountSale = array();
while ($row = mysqli_fetch_assoc($response)) {
    $jsonCountSale[] = $row;
}


die(json_encode([
    "success" => true,
    "data" => [
        "user" => $jsonUser[0],
        "address" => $jsonAddress[0],
        "cart" => $jsonCountCart[0],
        "sale" => $jsonCountSale[0],
    ]
]));






