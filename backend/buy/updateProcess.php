<?php
include("../cn.php");
include("../cors.php");
include("../utils.php");
include("../search.php");
include("../searchForId.php");
include("../getByUserId.php");
include("../getAll.php");

if(!isset($_GET['id_pedido'])) response(0, "Error al recibir el id del pedido");
$id = $_GET['id_pedido'];

if(!searchForId::search_sale($id)) response(0, "El pedido no existe");


$select = "SELECT * FROM sale WHERE id=$id";
$response = mysqli_query($con, $select);
$idProcess=0;
$idPayment=0;
while ($row = mysqli_fetch_assoc($response)) { 
    $idProcess = $row['id_process']; 
    $idPayment = $row['id_payment']; 
}

$select = "SELECT * FROM history_process WHERE id=$idProcess";
$response = mysqli_query($con, $select);
$idProcessActual=0;
while ($row = mysqli_fetch_assoc($response)) { $idProcessActual = $row['id_process']; }

if($idProcessActual==6) response(1, "El proceso ya esta finalizado");
if($idProcessActual==1) {
    $select = "SELECT * FROM payment WHERE id=$idPayment";
    $response = mysqli_query($con, $select);
    $idPaymentActual=0;
    while ($row = mysqli_fetch_assoc($response)) { $idPaymentActual = $row['id']; }
    
    $select = "UPDATE payment SET id_status=3 WHERE id=$idPayment";
    $response = mysqli_query($con, $select);
    if(!$response) response(0, "Hubo un error al relizar el pago");
}

$idProcessActual = ($idProcessActual) + 1;
$select = "UPDATE history_process SET id_process='$idProcessActual' WHERE id=$idProcess";
$response = mysqli_query($con, $select);
if(!$response) response(0, "Hubo un error al actualizar el proceso");
response(1, "Actualizado correctamente");
