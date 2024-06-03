<?php

function palindrome($str) {

    $cleanStr = strtolower(str_replace('','',$str));

    $lenght = strlen($cleanStr);
    
    for ($i = 0; $i <$lenght / 2; $i++){
        if ($cleanStr[$i] !== $cleanStr[$lenght - $i - 1]) {
            return false;
        }
    }
    return true;
}

$string1 = "radar";
$string2 = "kamu";

if (palindrome($string1)){
    echo $string1 . " adalah palindrome.";
} else {
    echo $string1 . " bukan palindrome.";
}

echo "<br>";

if (palindrome($string2)){
    echo $string2 . " adalah palindrome.";
} else {
    echo $string2 . " bukan palindrome.";
}