<?php
include("../cn.php");
include("../cors.php");
include("../getAll.php");
include("../utils.php");

response(1,getAll::getCategories());


