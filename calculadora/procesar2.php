<?php 

	if(!$_GET){die();}
	
	$numero = $_GET['numero'];
	
	require_once 'math.php';
	$math = new MathHelp_jmd();
	
	echo $math->calculate_str($numero);
	die();




 ?>