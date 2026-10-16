const inputElement5 = document.getElementById("paridad")
const btnParidad = document.getElementById("btnParidad")
const respuestaParidad = document.getElementById("respuestaParidad")
function paridad (numero){
if(numero % 2 === 0){
  return("Es par")
}
else{
  return("Es impar")
}
}
btnParidad.addEventListener("click" , function(){
  let valorIngresado = Number(inputElement5.value)
  let respuesta = paridad(valorIngresado)
  respuestaParidad.textContent = respuesta
})