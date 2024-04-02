<?php
include("../cn.php");
include("../cors.php");

require_once("../utils.php");
require_once("../getAll.php");

$data = getAll::getCatPaymentMethod();
die(response(1,$data));


