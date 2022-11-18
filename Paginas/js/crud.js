function eliminar(){
	alert("Se elimino correctamente")
}

function editar(){
	var dato,tiempo;

	dato = document.getElementById("dato").value;
	if (dato === "") {
		alert("Campo no se ha modificó")
		return false;
	}else
	alert("Se ha modifico correctamente")
}

function login(){
	var email, contra;
	email = document.getElementById("email").value;
	contra = document.getElementById("contra").value;
	if (email === "" || contra === "") {
		alert("Campos vacios")
		return false;
	}else if(email.length>100) {
		alert("El email es muy largo")
		return false;
	}
}


function cancel(){
	alert("Se canceló")
}
function guardar(){
	alert("Se guardo la correctamente")
}
