<?php
include("../cn.php");
include("../cors.php");
include("../utils.php");
include("../search.php");
include("../getByUserId.php");
include("../getAll.php");

if(!isset($_POST['id_user'])) die(json_encode(["success" => false,"error" => "Error a recibir el id del usuario"]));
if(!isset($_POST['inputBuyCountry'])) die(json_encode(["success" => false,"error" => "Error a recibir el inputBuyCountry"]));
if(!isset($_POST['inputBuyState'])) die(json_encode(["success" => false,"error" => "Error a recibir el inputBuyState"]));
if(!isset($_POST['inputBuylocality'])) die(json_encode(["success" => false,"error" => "Error a recibir el inputBuylocality"]));
if(!isset($_POST['inputBuyMainStreet'])) die(json_encode(["success" => false,"error" => "Error a recibir el inputBuyMainStreet"]));
if(!isset($_POST['inputBuyStreet1'])) die(json_encode(["success" => false,"error" => "Error a recibir el inputBuyStreet1"]));
if(!isset($_POST['inputBuyStreet2'])) die(json_encode(["success" => false,"error" => "Error a recibir el inputBuyStreet2"]));
if(!isset($_POST['inputBuyReferences'])) die(json_encode(["success" => false,"error" => "Error a recibir el inputBuyReferences"]));
if(!isset($_POST['inputBuyPM'])) die(json_encode(["success" => false,"error" => "Error a recibir el inputBuyPM"]));
if(!isset($_POST['inputBuyTitular'])) die(json_encode(["success" => false,"error" => "Error a recibir el inputBuyTitular"]));
if(!isset($_POST['inputBuyNumberCard'])) die(json_encode(["success" => false,"error" => "Error a recibir el inputBuyNumberCard"]));
if(!isset($_POST['inputBuyExpiration'])) die(json_encode(["success" => false,"error" => "Error a recibir el inputBuyExpiration"]));
if(!isset($_POST['inputBuyCVV'])) die(json_encode(["success" => false,"error" => "Error a recibir el inputBuyCVV"]));

$id_user = $_POST['id_user'];
$inputBuyCountry = $_POST['inputBuyCountry'];
$inputBuyState = $_POST['inputBuyState'];
$inputBuylocality = $_POST['inputBuylocality'];
$inputBuyMainStreet = $_POST['inputBuyMainStreet'];
$inputBuyStreet1 = $_POST['inputBuyStreet1'];
$inputBuyStreet2 = $_POST['inputBuyStreet2'];
$inputBuyReferences = $_POST['inputBuyReferences'];
$inputBuyPM = $_POST['inputBuyPM'];
$inputBuyTitular = $_POST['inputBuyTitular'];
$inputBuyNumberCard = $_POST['inputBuyNumberCard'];
$inputBuyExpiration = $_POST['inputBuyExpiration'];
$inputBuyCVV = $_POST['inputBuyCVV'];

if(!Search::search_user($id_user)) die(json_encode(["success" => false,"data" => "El usuario no existe"]));
if(!Search::search_cat_country($inputBuyCountry)) die(json_encode(["success" => false,"data" => "El país no existe"]));
if(!Search::search_cat_payment_method($inputBuyPM)) die(json_encode(["success" => false,"data" => "El metodo no existe"]));

$addAddress = "INSERT INTO address (id_country, state, locality, main_street, street1, street2, `references`) VALUES ($inputBuyCountry, '$inputBuyState', '$inputBuylocality', '$inputBuyMainStreet', '$inputBuyStreet1', '$inputBuyStreet2', '$inputBuyReferences')";
$resAddAddress=mysqli_query($con,$addAddress);
if(!$resAddAddress) response(0,"Hubo un error al insertar en el carrito");

$searchLastAddress = "SELECT id FROM address ORDER BY id DESC LIMIT 1";
$response=mysqli_query($con,$searchLastAddress);
$idAddress = 1;
while ($row = mysqli_fetch_assoc($response)) { $idAddress = $row['id']; }

$updateUser = "UPDATE user SET id_address = $idAddress WHERE id = $id_user";
$response=mysqli_query($con,$updateUser);
if(!$response) response(0,"Hubo un error al actualizar la direccion del usuario");

$mensajes = array();

$json= GetByUserId::getCartByUserId($id_user);
foreach($json as $cartRow){
    $id_product=$cartRow['id_product'];
    $quantity=$cartRow['quantity'];
    $price=$cartRow['price'];
    $total=$quantity*$price;

    $sentence = "SELECT stock,name FROM product WHERE id=$id_product";
    $response=mysqli_query($con,$sentence);
    $stockByProducts = 1;
    $nameProduct = "";
    while ($row = mysqli_fetch_assoc($response)) { 
        $stockByProducts = $row['stock']; 
        $nameProduct = $row['name']; 
    }

    $newStock= $stockByProducts-$quantity;
    if($newStock < 0){
        response(0,"No hay productos disponibles para el producto: $nameProduct");
    }

    $updateStock = "UPDATE product SET stock=$newStock WHERE id=$id_product";
    $response=mysqli_query($con,$updateStock);
    if(!$response) response(0,"Hubo un error al actualizar el stock");

    $insertPayment = "INSERT INTO payment (id_method, id_status) VALUES ('$inputBuyPM', '3')";
    $response=mysqli_query($con,$insertPayment);
    if(!$response) response(0,"Hubo un error al insertar el methodo de pago");

    $searchLastPayment = "SELECT id FROM payment ORDER BY id DESC LIMIT 1";
    $response=mysqli_query($con,$searchLastPayment);
    $idPayment = 1;
    while ($row = mysqli_fetch_assoc($response)) { $idPayment = $row['id']; }

    $insertHistoryProcess ="INSERT INTO history_process (id_process) VALUES ('2')";
    $response=mysqli_query($con,$insertHistoryProcess);
    if(!$response) response(0,"Hubo un error al insertar en el historial de pago");
    $searchHistoryProcess = "SELECT id FROM history_process ORDER BY id DESC LIMIT 1";
    $response=mysqli_query($con,$searchHistoryProcess);
    $idHistoryProcess = 1;
    while ($row = mysqli_fetch_assoc($response)) { $idHistoryProcess = $row['id']; }

    $insertSale = "INSERT INTO sale (id_user, id_product, id_payment, id_process, total, quantity) VALUES ('$id_user', '$id_product', '$idPayment', '$idHistoryProcess', '$total', '$quantity')";
    $response=mysqli_query($con,$insertSale);
    if(!$response) response(0,"Hubo un error al insertar el pago");

    $deleteCart = "DELETE FROM cart WHERE id_user='$id_user' AND id_product='$id_product'";
    $response=mysqli_query($con,$deleteCart);
    if(!$response) response(0,"Hubo un error al eliminar del pago");
    
    
}
response(1,"Productos pagados correctamente");
