<?php

$contador = 0;
$notas = [10, 6, 8.5, 9];
$notasLength = count($notas);
$soma = 0;
$soma1 = 0;

for ($i = 0; $i < $notasLength ; $i += 1) {
    $soma += $notas[$i];
};

foreach ($notas as $nota){
    $soma1 += $nota;
};

echo ($soma / $notasLength) . "\n";
echo ($soma1 / $notasLength) . "\n";
echo (array_sum($notas)/$notasLength);

// while ($contador < 100) {
//     if ($contador % 2 != 0) {
//         echo $contador . "\n";
//     } 
//     $contador += 1;
// }