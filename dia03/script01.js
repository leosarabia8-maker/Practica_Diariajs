let trabajadores = []
const inputElement15 = document.getElementById("empleado")
const btnRegistro = document.getElementById("btnRegistro")
const respuestaRegistro = document.getElementById("respuestaRegistro")
function registroEmpleados (nombre){
if (nombre === "" ){
  return("No queremos empleados fantasmas ")
}
else{
    trabajadores.push(nombre)
  return("Bienvenido : " + trabajadores.join (",") + " Total " + trabajadores.length )
}
}
btnRegistro.addEventListener("click" , function(){
  let valorIngresado = inputElement15.value.trim()
  let respuesta = registroEmpleados(valorIngresado)
  respuestaRegistro.textContent = respuesta
  inputElement15.value = ""
})