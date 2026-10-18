const inputElement8 = document.getElementById("rangoEdad")
const btnRangoEdad = document.getElementById("btnRangoEdad")
const respuestaRangoEdad = document.getElementById("respuestaRangoEdad")
function rangoEdad (numero){
  if(numero < 13){
    return("Eres un niño")
  }
  else if(numero < 18  ){
    return("Eres un adolecente")
  }
  else if(numero < 65  ){
    return("Eres un adulto")
  }
  else{
    return("Eres un adulto mayor")
  }
}
btnRangoEdad.addEventListener("click" , function(){
  let valorIngresado = Number(inputElement8.value)
  let respuesta = rangoEdad(valorIngresado)
  respuestaRangoEdad.textContent = respuesta
})
