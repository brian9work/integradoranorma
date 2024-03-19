<?php
include("../cn.php");
include("../cors.php");

if(!isset($_POST['brand'])) die(json_encode(["success" => false,"error" => "Error a recibir el noombre de la marca"]));
if(!isset($_POST['description'])) die(json_encode(["success" => false,"error" => "Error a recibir la descripcion"]));

$brand = $_POST['brand'];
$description = $_POST['description'];

$searchBrand = "SELECT COUNT(*) FROM cat_brand WHERE brand='$brand'";
$resSearchBrand=mysqli_query($con,$searchBrand);
if (mysqli_fetch_assoc($resSearchBrand)['COUNT(*)']>=1){
    die(json_encode(["success" => false,"data" => "La marca ya existe"]));}

$addBrand = "INSERT INTO cat_brand (brand, description, id_address) VALUES ('$brand', '$description', 1)";
$resAddToCart=mysqli_query($con,$addBrand);
if(!$resAddToCart) die(json_encode(["success" => false,"data" => "No se pudo agregar la marca"]));
die(json_encode(["success" => true,"data" => "Marca Agregada"]));





