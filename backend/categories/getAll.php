<?php
include("../cn.php");
include("../cors.php");
include("../getAll.php");
include("../utils.php");

$select = "SELECT * FROM cat_category";
$response = mysqli_query($con, $select);

$json = array();
while ($row = mysqli_fetch_assoc($response)) { 
    $json[] = array(
        'id' => $row['id'],
        'text' => $row['category'],
    );
}
response(1,$json);

