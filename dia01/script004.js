const inputElement4 = document.getElementById("calcular")
const btnCalcular = document.getElementById("btnCalcular")
const respuestaCalcular = document.getElementById("respuestaCalcular")

function descuentos(numero){
  if(numero > 50){
    let subTotal = numero * 0.10
    let total = numero - subTotal
    return("Tu dinero total con descuento de 10% $:" + total)
  }
  else
    return("Tu dinero total es $:" + numero)
}
btnCalcular.addEventListener("click" , function(){
  let valorIngresado = Number(inputElement4.value)
  let respuesta = descuentos(valorIngresado)
  respuestaCalcular.textContent = respuesta
})