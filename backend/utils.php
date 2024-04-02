<?php
function response($boolean, $data)
{
    die(json_encode([
        "success" => $boolean == 1 ? true : false,
        "data" => $data
    ]));
}

