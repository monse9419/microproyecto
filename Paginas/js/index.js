
function getID(id){
    return document.getElementById(id).value;
}
function arrayJSON(id,name,description,email,edad){
  var data ={
    id : id,
    name : name,
    email : email,
    description : description,
    edad : edad
  };
  return data;
}
function insertask(){
    var id = getID("id");
    var name = getID("name");
    var email = getID("email");
    var edad = getID("edad");
    var description = getID("description");
    var doctores = getID("doctores");
    if (id.length==0 || name.length==0 || edad.length==0 || email.length==0 || description.length==0 || doctores.length==0) {
      alert("Los campos estan vacios o no a completado todo el formulario");
    }else{
        var arrayData = arrayJSON(id,name,description,email,doctores);
        console.log("arrayData");
        alert("se guardo correctamente");
    }
}