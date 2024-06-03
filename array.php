<?php
function hitungperkalianarray($array) {
    $hasilperkalian = [];
    $total = array_product($array);

    foreach ($array as $nilai) {
        $hasilperkalian[] = $total / $nilai;
    }
    return $hasilperkalian;
}

$inputarray = [1,7,3,4];
$outputarray = hitungperkalianarray($inputarray);

echo "array input: [" . implode("," , $inputarray) . "]<br>";
echo "hasil perkalian: [" . implode("," , $outputarray) . "]";

?>