function validar(){

	var nombre, apellido, espe, email, contra;

	nombre = document.getElementById("nombre").value;
	apellido = document.getElementById("apellido").value;
	espe = document.getElementById("espe").value;
	email = document.getElementById("email").value;
	contra = document.getElementById("contra").value;

	if (nombre === "" || apellido === "" || espe === "" || email === "" || contra === "") {
		alert("Los Campos son Obligatorios")
		return false;
	}else if(nombre.length>20) {
		alert("El nombre es muy largo")
		return false;
	}else if(apellido.length>50) {
		alert("El apellido es muy largo")
		return false;
	}else if(espe.length>30) {
		alert("Hay muchos caracteres")
		return false;
	}else if(email.length>100) {
		alert("El email es muy largo")
		return false;
	}else if(contra.length>20) {
		alert("La Contraseña es muy larga")
		return false;
	}
	alert("SE A REGISTRADO SU CUENTA AHORA INICIE SECION")
}