<?php 

	if(isset($_GET['raiz'])){
		$numero = $_GET['raiz'];
		 if(!is_numeric($numero)){
		 	echo "ERROR";
		 	die();
		 }
		$raiz = sqrt($numero);
		echo $raiz;
	} else {
		echo "ERROR";
	}

 ?>