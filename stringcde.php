<?php
function generaterandomstring(){
    $characters = 'abcdefgmijklmnopqrstuv';
    $randomstring = '';

    for ($i = 0; $i < 4; $i++) {
        $randomstring .= $characters[rand(0, strlen($characters) - 1 )];
    }

    $randomstring .= ' '; 

    for ($i = 0; $i < 3; $i++) {
        $randomstring .= $characters[rand(0, strlen($characters) - 1 )];
    }

    $randomstring .= ' ';
    for ($i = 0; $i < 4; $i++) {
        $randomstring .= $characters[rand(0, strlen($characters) - 1 )];
    }

    return $randomstring;
}

$randomstring = generaterandomstring();
echo $randomstring;
?>
