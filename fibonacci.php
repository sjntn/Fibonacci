<?php

	$fn = array(0,1);

	for ($i = 0; $fn[$i+1] <= 1000; $i++) {
		  $fn[] = $fn[$i] + $fn[$i+1];
	}
	
	array_pop($fn);
 
 	echo implode(',', $fn) . "\n";
