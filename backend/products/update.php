<?php
include("../cn.php");
include("../cors.php");

if(!isset($_POST['id'])) die(json_encode(["success" => false,"error" => "Error a recibir el id"]));
if(!isset($_POST['id_category'])) die(json_encode(["success" => false,"error" => "Error a recibir el id de la categoria"]));
if(!isset($_POST['id_brand'])) die(json_encode(["success" => false,"error" => "Error a recibir el id de la marca"]));
if(!isset($_POST['name'])) die(json_encode(["success" => false,"error" => "Error a recibir el name"]));
if(!isset($_POST['imagen'])) die(json_encode(["success" => false,"error" => "Error a recibir el imagen"]));
if(!isset($_POST['description'])) die(json_encode(["success" => false,"error" => "Error a recibir el description"]));
if(!isset($_POST['specifications'])) die(json_encode(["success" => false,"error" => "Error a recibir el specifications"]));
if(!isset($_POST['dimensions'])) die(json_encode(["success" => false,"error" => "Error a recibir el dimensions"]));
if(!isset($_POST['stock'])) die(json_encode(["success" => false,"error" => "Error a recibir el stock"]));
if(!isset($_POST['price'])) die(json_encode(["success" => false,"error" => "Error a recibir el price"]));
if(!isset($_POST['discount'])) die(json_encode(["success" => false,"error" => "Error a recibir el discount"]));


$id = $_POST['id'];
$id_category = $_POST['id_category'];
$id_brand = $_POST['id_brand'];
$name = $_POST['name'];
$imagen = $_POST['imagen'];
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
if(!$resProduct) die(json_encode(["success" => false,"data" => "Hubo un error al insertar en el producto"]));
die(json_encode(["success" => true,"data" => "Producto actualizado"]));




// INSERT INTO product (id, id_category, id_brand, name, imagen, description, specifications, dimensions, stock, price, discount, status, created_at, last_update) VALUES (NULL, '', '', '', '', '', '', NULL, '', '', '0', '1', '2024-03-19 20:46:26.000000', CURRENT_TIMESTAMP)



