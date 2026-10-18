const inputElement9 = document.getElementById("envio")
const inputElement10 = document.getElementById("precio")
const btnCalcularEnvio = document.getElementById("btnCalcularEnvio")
const respuestaCalcularEnvio = document.getElementById("respuestaCalcularEnvio")
function calcularEnvio (lugar , monto){
  let total = 0
  if(lugar === "local"  ){
    if(monto > 50){
      total = monto
      return("Tienes  envio gratis " + "Total a pagar " + total )
    }else{
      total = monto + 5
      return("costo de envio :$ " + "5" + " Total a pago " + total)
    }
  }
  if(lugar === "nacional"){
    if(monto > 100){
      total = monto + 5
      return("Tienes  envio es de :$ " + "5" + " Total a pagar " + total )
    }
  }else{
    total = monto + 10
      return("costo de envio :$ " + "10" + " Total a pago " + total)
  }
  }
  btnCalcularEnvio.addEventListener("click" , function(){
    let valorIngresado = inputElement9.value
    let valorIngresado2 = Number(inputElement10.value)
    let respuesta = calcularEnvio(valorIngresado , valorIngresado2)
    respuestaCalcularEnvio.textContent = respuesta
  })

