<?php

$nomeBlack = "Some";
$anoShadow = 1984;
$notaSenza = 8.2;
$included = false;
$estret = $included && $anoShadow > 1700;
echo $estret;

echo "Welcome\n";
echo $notaSenza . "\n";
echo "Nome do Cara: " . $nomeBlack . "\n";
echo "Nome do Cara: $nomeBlack \n";



# Temos as entradas de dados no PHP definidas pelo $argv, que funciona similar ao
# C clássico. Toda a informação é passada na hora de chamar o programa no terminal
# $argv basicamente retorna uma lista de argumentos, incluindo o nome do programa

# ?? representa o OR caso não hajam valores
$ligma = $argv[1] ?? "N tem nada no indice 1\n";
echo $ligma;

if ($anoShadow < 1900 ) {
    echo "Entrou no True\n";
} elseif ($anoShadow > 1900 && $anoShadow < 1990) {
    echo "Talvez cara\n";
} else {
    echo "És mentira\n";
}

$tipo = match ($nomeBlack) {
    "Treat" => "Meia-Noite",
    "Some" => "The blackest",
    "Man" => "Pig",
    default => "Tristeza"
};
echo $tipo;