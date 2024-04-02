<?php

class SearchForID
{
    public static function search_sale($id) {
        include("../cn.php");
        $search = "SELECT * FROM sale WHERE id='$id'";
        $resSearch = mysqli_query($con, $search);
        if ($resSearch)
            if (mysqli_num_rows($resSearch) < 1)
                return false;

        return true;
    }
}
