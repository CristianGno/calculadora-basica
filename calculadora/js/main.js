$(document).ready(function(){
	$('#raizCuadrada').click(function(){
		raizCuadrada();
	});

	$('#igual').click(function(){
		calcularStr();
	});
});

	function agregarItem(item){
	  var inputResultado = document.getElementById('resultado');
	  var valorViejo = inputResultado.value;
	  //alert(valorViejo);
	  //
	  var valorNuevo = valorViejo+item;
	  inputResultado.value = valorNuevo;
	}

	function borrarTodo() {
	  var inputResultado = document.getElementById('resultado');
	  inputResultado.value = '';
	}

	function borrarItem() {
	  var inputResultado = document.getElementById('resultado');
	  var valorViejo = inputResultado.value;
	  var valorNuevo = valorViejo.substr(0, valorViejo.length-1);
	 // console.log(valorNuevo);
	 inputResultado.value = valorNuevo;
	}

	function raizCuadrada(){
		var inputResultado = document.getElementById('resultado');
		$.ajax({
			url: 'procesar.php',
			type: 'GET',
			contentType: false,
			data: {raiz: inputResultado.value},
		}).done(function(r){
 			inputResultado.value = r;
 		});
	}


	function calcularStr() {
		var inputResultado = document.getElementById('resultado');
		$.ajax({
			url: 'procesar2.php',
			type: 'GET',
			contentType: false,
			data: {numero: inputResultado.value},
		}).done(function(r){
			inputResultado.value = r;
		});
	}

