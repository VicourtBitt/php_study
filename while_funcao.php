<?php

require __DIR__ . "teste/funcao.php";

function getInfoFromUser(string $text): string {
    echo "Escreva $text \n>>> ";
    $input = fgets(STDIN);
    return $input;
};

function mainScreen(): void {
    $state = TRUE;
    while ($state) {
        $toPrint = getInfoFromUser("um texto");

        if ($toPrint == 'sair' or $toPrint == "") {
            echo "Saindo do programa";
            $state = FALSE;
        };

        echo "O texto escrito foi: $toPrint";
    };
};

echoOi();