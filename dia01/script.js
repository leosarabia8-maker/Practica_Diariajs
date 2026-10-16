const inputElement = document.getElementById("numEdad")
const btnEdad = document.getElementById("btnEdad")
const respuestaEdad = document.getElementById("respuestaEdad")
function edad (numero){
if(numero >=18){
return("Eres mayor de edad")
}
else{
  return("Eres menor de edad")
}
}
btnEdad.addEventListener("click" , function(){
  let valorIngresado = Number(inputElement.value)
  let respuesta = edad(valorIngresado)
  respuestaEdad.textContent = respuesta
})