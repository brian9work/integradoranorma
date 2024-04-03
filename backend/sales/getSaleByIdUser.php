<?php
include("../cn.php");
include("../cors.php");
include("../utils.php");

if(!isset($_POST['id_user'])) die(json_encode(["success" => false,"error" => "Error a recibir el id del usuario"]));
$id_user = $_POST['id_user'];

$getUsers = "SELECT s.*,u.name AS name_user,u.email,p.name AS name_product,p.price,p.imagen,cc.category,pa.id_status AS id_payment_status,pm.payment_method,ps.payment_status FROM sale s
    INNER JOIN user u ON s.id_user=u.id
    INNER JOIN product p ON s.id_product=p.id
    INNER JOIN cat_category cc ON p.id_category=cc.id
    INNER JOIN payment pa ON s.id_payment=pa.id 
    INNER JOIN cat_payment_method pm ON pa.id_method=pm.id 
    INNER JOIN cat_payment_status ps ON pa.id_status=ps.id
    WHERE s.id_user='$id_user' ORDER BY s.id DESC
;";
    // WHERE s.id_user='1' ORDER BY s.id
$resUsers=mysqli_query($con,$getUsers);

$json = array();
while ($row = mysqli_fetch_assoc($resUsers)) {
    $json[] = $row;
}
response(
    1,
    $json
);




