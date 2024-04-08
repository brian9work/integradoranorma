<?php
include("../cn.php");
include("../cors.php");
include("../search.php");
include("../utils.php");

$booleanImage=true;

if(!isset($_POST['id'])) die(json_encode(["success" => false,"error" => "Error a recibir el id"]));
if(!isset($_POST['id_category'])) die(json_encode(["success" => false,"error" => "Error a recibir el id de la categoria"]));
if(!isset($_POST['id_brand'])) die(json_encode(["success" => false,"error" => "Error a recibir el id de la marca"]));
if(!isset($_POST['name'])) die(json_encode(["success" => false,"error" => "Error a recibir el name"]));
if(!isset($_FILES['imagen'])) $booleanImage=false;
if(!isset($_POST['description'])) die(json_encode(["success" => false,"error" => "Error a recibir el description"]));
if(!isset($_POST['specifications'])) die(json_encode(["success" => false,"error" => "Error a recibir el specifications"]));
if(!isset($_POST['dimensions'])) die(json_encode(["success" => false,"error" => "Error a recibir el dimensions"]));
if(!isset($_POST['stock'])) die(json_encode(["success" => false,"error" => "Error a recibir el stock"]));
if(!isset($_POST['price'])) die(json_encode(["success" => false,"error" => "Error a recibir el price"]));
if(!isset($_POST['discount'])) die(json_encode(["success" => false,"error" => "Error a recibir el discount"]));
$car = './assets/products/';

$rutaImagen="";
if($booleanImage){
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
}


$id = $_POST['id'];
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

if(!search::search_cat_category($id_category)) response(0, "La categoria no existe");
if(!search::search_cat_brand($id_brand)) response(0, "La marca no existe");

if(!$booleanImage){
    $searchImage = "SELECT imagen FROM product WHERE id='$id'";
    $resSearchImage=mysqli_query($con,$searchImage);
    if($resSearchImage){
        $row = mysqli_fetch_array($resSearchImage);
        $imagen = $row['imagen'];
        if(file_exists($imagen)) unlink($imagen);
    }
}
// echo $imagen;
// die("");

$addProduct = "INSERT INTO product (id_category, id_brand, name, imagen, description, specifications, dimensions, stock, price, discount) VALUES ('$id_category', '$id_brand', '$name', '$imagen', '$description', '$specifications', '$dimensions', '$stock', '$price', '0')";
$addProduct = "UPDATE product SET 
        id_category='$id_category', 
        id_brand='$id_brand', 
        name='$name', 
        imagen='$imagen', 
        description='$description', 
        specifications='$specifications', 
        dimensions='$dimensions', 
        stock='$stock', 
        price='$price', 
        discount='$discount'
    WHERE id='$id'
";
$resProduct=mysqli_query($con,$addProduct);
if(!$resProduct) response(0, "Hubo un error al insertar en el producto" );
response(1, "Producto Actualizado");



