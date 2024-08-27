<?php

function addManyitems ($numberOfLoops) {
    $counter = 0;
    $array = [];
    while ($counter < $numberOfLoops) {
        echo "Add a number: .\n >>>";
        $input = fgets(STDIN);
        $array[] = $input;
        $counter += 1;
    }; 
    return $array;
};

function calcula_media ($lista) {
    $soma = 0;
    foreach ($lista as $valor) {
        $soma += $valor;
    };
    return $soma/count($lista);
};

$listOfNumbers = addManyitems(4);
$value = calcula_media($listOfNumbers);
echo $value;