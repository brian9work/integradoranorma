<?php
    $con = mysqli_connect('localhost','root','','integradoranorma5');
    mysqli_set_charset($con, "utf8");
    if(!$con){
        die("Coneccion Fallida: " . mysqli_connect_error());
    }

