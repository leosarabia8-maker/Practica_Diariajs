  let saldo = 500
  const inputElement13 = document.getElementById("retiro")
  const btnCajero = document.getElementById("btnCajero")
  const respuestaCajero = document.getElementById("respuestaCajero")
function cajero(dinero){
  if(dinero > 0){
    if(dinero <= saldo){
    saldo = saldo - dinero
    return("Retiro Exitoso " + "Monto Retirado es :$ "+ dinero + " Tu saldo quedante es:$ " + saldo)
  }else{
    return("Error sin suficientes fondos " + " Tu fondo es :$ " + saldo)
  }
  }else{
    return("Valor ingresado Invalido ")
  }
}
btnCajero.addEventListener("click" , function(){
  let valorIngresado = Number(inputElement13.value)
  let respuesta = cajero(valorIngresado)
  respuestaCajero.textContent = respuesta
})
const inputElement14 = document.getElementById("money")
const btnAddDinero = document.getElementById("btnAddDinero")
const respuestaAddDinero = document.getElementById("respuestaAddDinero")
function addDinero(agregar){
  if(agregar > 0){
    saldo = saldo + agregar
    return("Tu deposito fue exitoso " + " Monto del deposito:$ " + agregar)
}else{
  return("Deposito Rechazado valor incorrecto")
}
}
btnAddDinero.addEventListener("click" , function (){
  let valorIngresado2 = Number(inputElement14.value)
  let respuesta2 = addDinero(valorIngresado2)
  respuestaAddDinero.textContent = respuesta2
})
