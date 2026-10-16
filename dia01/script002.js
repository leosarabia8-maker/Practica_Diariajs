const inputElement2 = document.getElementById("numCalificacion")
const btnCalificacion = document.getElementById("btnCalificacion")
const respuestaCalificacion = document.getElementById("respuestaCalificacion")
function calificaciones(numero){
if (numero >= 7 ){
return("Aprobaste")
}
else{
  return("Reprobaste")
}
}
btnCalificacion.addEventListener("click" , function(){
  let valorIngresado = Number(inputElement2.value)
  let respuesta = calificaciones(valorIngresado)
  respuestaCalificacion.textContent = respuesta
  if (respuesta === "Aprobaste"){
  respuestaCalificacion.style.color = "green"
  }
  else{
    respuestaCalificacion.style.color = "red"
  }
})