<?php
    $con = mysqli_connect('localhost','root','','integradoranorma');
    // $con = mysqli_connect('localhost','u110497593_brian',']35gbFb43mj5s56k7q1qXx','u110497593_experiment');
    mysqli_set_charset($con, "utf8");
    if(!$con){
        die("Coneccion Fallida: " . mysqli_connect_error());
    }

