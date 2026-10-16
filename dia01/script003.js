const inputElement3 = document.getElementById("validacion")
const btnValidacion = document.getElementById("btnValidacion")
const respuestaValidacion = document.getElementById("respuestaValidacion")
function validacion(acceso){
  if(acceso === "admin"){
    return("Acceso Concedido")
  }
  else{
    return("Acceso Denegado")
  }
}
btnValidacion.addEventListener("click" , function(){
  let valorIngresado = inputElement3.value
  let respuesta = validacion(valorIngresado)
  respuestaValidacion.textContent = respuesta
})