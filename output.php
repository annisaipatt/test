<?php
function generatepattern($n) {
    for ($i = 1; $i <= $n; $i++) {
        for ($j = 1; $j <= $i; $j++){
            echo $j;
        }
        echo "**";
        for ($k = $i + 3; $k <= $n + 3; $k++){
            echo $k;
        }
        echo "<br>";
    }
}

echo "Input n = 5<br>";
generatepattern(5);

echo "<br>Input n = 4<br>";
generatepattern(4);

?>