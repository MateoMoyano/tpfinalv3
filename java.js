function enviar(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var curso = document.getElementById("curso").value;
    var materia = document.getElementById("materia").value;
    var pendiente = document.getElementById("pendiente").value;

    var tabla= document.getElementById("tbody");

    var fila= tabla.insertRow()
    var colum1= fila.insertCell(0);
    var colum2= fila.insertCell(1);
    var colum3= fila.insertCell(2);
    var colum4= fila.insertCell(3);
    var colum5= fila.insertCell(4);
    var colum6= fila.insertCell(5);

    colum1.innerHTML= nombre;
    colum2.innerHTML= apellido;
    colum3.innerHTML= curso;
    colum4.innerHTML= materia;
    colum5.innerHTML= pendiente;
    colum6.innerHTML= '<input type="button" value="Modificar" onclick=modificar(this)><input type="button" value="Eliminar" onclick=eliminar(this)>';
}
function modificar(button){
    var row=button.parentNode.parentNode;
    row.cells[0].innerHTML=prompt("ingrese un nuevo nombre")
    row.cells[1].innerHTML=prompt("ingrese un apellido nuevo")
    row.cells[2].innerHTML=prompt("ingrese un nuevo curso")
    row.cells[3].innerHTML=prompt("ingrese nueva materia")
    row.cells[4].innerHTML=prompt("ingrese si esta pendiente/Aprobado nuevamente")
}
function eliminar(button){
    var fila= button.parentNode.parentNode;
    fila.parentNode.removeChild(fila);
}
function icono() {
    document.getElementById("div4").style.display="block";
}
function secion() {
    var nombreC = document.getElementById("nombreC").value;
    var apellidoC = document.getElementById("apellidoC").value;
    var contraseña = document.getElementById("contraseña").value;
    if (nombreC==""||apellidoC==""||contraseña=="") {
        alert("faltan ingresar datos")
    }
    else {
        document.getElementById("div5").style.display="block";
        document.getElementById("div4").style.display="none";
    }
    

}
function datos() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var curso = document.getElementById("curso").value;
    var materia = document.getElementById("materia").value;
    var pendiente = document.getElementById("pendiente").value;
    if (nombre==""||apellido==""||curso==""||materia==""||pendiente=="" ) {
        alert("faltan ingresar datos")
    }
    else {
        enviar()
    }
    

}