<?php
include("../cn.php");
include("../cors.php");

if(!isset($_POST['id_category'])) die(json_encode(["success" => false,"error" => "Error a recibir el id de la categoria"]));
if(!isset($_POST['id_brand'])) die(json_encode(["success" => false,"error" => "Error a recibir el id de la marca"]));
if(!isset($_POST['name'])) die(json_encode(["success" => false,"error" => "Error a recibir el name"]));
if(!isset($_FILES['imagen'])) die(json_encode(["success" => false,"error" => "Error a recibir el imagen"]));
if(!isset($_POST['description'])) die(json_encode(["success" => false,"error" => "Error a recibir el description"]));
if(!isset($_POST['specifications'])) die(json_encode(["success" => false,"error" => "Error a recibir el specifications"]));
if(!isset($_POST['dimensions'])) die(json_encode(["success" => false,"error" => "Error a recibir el dimensions"]));
if(!isset($_POST['stock'])) die(json_encode(["success" => false,"error" => "Error a recibir el stock"]));
if(!isset($_POST['price'])) die(json_encode(["success" => false,"error" => "Error a recibir el price"]));
if(!isset($_POST['discount'])) die(json_encode(["success" => false,"error" => "Error a recibir el discount"]));

$car = './assets/products/';
if (!file_exists($car)) { mkdir($car, 0777); }
    
$file = $_FILES['imagen'];
$fileName = $file['name'];
$fileTmpName = $file['tmp_name'];
$fileSize = $file['size'];
$fileError = $file['error'];
$fileType = $file['type'];

$fileExt = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

$fileNameNew = uniqid('', true) . "." . $fileExt;
$fileDest = $car . $fileNameNew;
$mov = move_uploaded_file($fileTmpName, $fileDest);
if(!$mov) die("Error al mover la imagen");

$rutaImagen="/assets/products/".$fileNameNew;

$id_category = $_POST['id_category'];
$id_brand = $_POST['id_brand'];
$name = $_POST['name'];
$imagen = $rutaImagen;
$description = $_POST['description'];
$specifications = $_POST['specifications'];
$dimensions = $_POST['dimensions'];
$stock = $_POST['stock'];
$price = $_POST['price'];
$discount = $_POST['discount'];

$searchCategory = "SELECT * FROM cat_category WHERE id='$id_category'";
$resSearchCategory=mysqli_query($con,$searchCategory);
if($resSearchCategory){
    if(mysqli_num_rows($resSearchCategory)<1){
        die(json_encode(["success" => false,"data" => "La categoria no existe"]));}}

$searchBrand = "SELECT * FROM cat_brand WHERE id='$id_brand'";
$resSearchBrand=mysqli_query($con,$searchBrand);
if($resSearchBrand){
    if(mysqli_num_rows($resSearchBrand)<1){
        die(json_encode(["success" => false,"data" => "La marca no existe"]));}}

$addProduct = "INSERT INTO product (id_category, id_brand, name, imagen, description, specifications, dimensions, stock, price, discount) VALUES ($id_category, $id_brand, '$name', '$imagen', '$description', '$specifications', '$dimensions', $stock, $price, '0')";

$resProduct=mysqli_query($con,$addProduct);
if(!$resProduct) die(json_encode(["success" => false,"data" => "Hubo un error al insertar en el producto"]));
die(json_encode(["success" => true,"data" => "Producto agregado"]));




