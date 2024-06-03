<?php
function hitungsubstringsama($string,$substring)
{
    $jumlahsubstring = substr_count($string,$substring);
    return $jumlahsubstring;
}

$string = "annisa nuriffat wardani. jurusan rpl di SMK MUH 1 Bantul";
$substring = "rpl";

$jumlahsubstring = hitungsubstringsama($string,$substring);

echo "jumlah substring '$substring' dalam string adalah : $jumlahsubstring";

?>