let trabajadores = []
const inputElement15 = document.getElementById("empleado")
const inputElement16 = document.getElementById("departamento")
const btnRegistro = document.getElementById("btnRegistro")
const respuestaRegistro = document.getElementById("respuestaRegistro")
function registroEmpleados (nombre , departamento){
if (nombre === "" || departamento === "" ){
      return("No queremos empleados fantasmas ; Agrega tu campo y nombre")
}
else if (trabajadores.some(trabajador => trabajador[0] === nombre)){
return("Nombre ya ingresado ")
}
else{
    trabajadores.push([nombre , departamento])
let textoFinal = "Bienvenido. Total: " + trabajadores.length + "\n"
trabajadores.forEach( trabajador => { 
textoFinal = textoFinal + "- " + trabajador[0] + " (Dep: " + trabajador[1] + ")\n";
})
return(textoFinal)
}
}

btnRegistro.addEventListener("click" , function(){
  let valorIngresado = inputElement15.value.trim()
  let valorIngresado2 = inputElement16.value.trim()
  let respuesta = registroEmpleados(valorIngresado ,valorIngresado2)
  respuestaRegistro.innerText = respuesta
  inputElement15.value = ""
  inputElement16.value = ""
})