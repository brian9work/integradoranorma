<?php
    $con = mysqli_connect('localhost','root','','integradoranorma5');
    // $con = mysqli_connect('localhost','u110497593_root','W&D*Ah?W9h0*[ewf3r32f_.,23k532d','u110497593_sao');
    mysqli_set_charset($con, "utf8");
    if(!$con){
        die("Coneccion Fallida: " . mysqli_connect_error());
    }

