<?php

function fibonacci($n){
    $a = 0; 
    $b = 1;
    $tmp = 0;
    $numbers[] = 0;
    while($n){
        $tmp = $b; 
        $b = $a + $b;
        $a = $tmp;
        $numbers[] = $a;
        $n--;
    }
    return implode(' ', $numbers);
}

echo fibonacci(16);
