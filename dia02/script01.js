const inputElement6 = document.getElementById("edad")
const inputElement7 = document.getElementById("licencia")
const btnValidar = document.getElementById("btnValidar")
const respuestaValidar = document.getElementById("respuestaValidar")
function alquiler(edad , tieneLicencia){
  if(edad >= 18){
    if(tieneLicencia === "si"){
      return("Acceso Permitido")

    }else{
      return("Acceso denegado sin licencia")
    }
  }else{
    return("Acceso denegado menor de edad")
  }

}
btnValidar.addEventListener("click" , function(){
  let valorIngresado = Number(inputElement6.value)
  let valorIngresado2 = inputElement7.value
  let respuesta = alquiler(valorIngresado , valorIngresado2 )
  respuestaValidar.textContent = respuesta
})