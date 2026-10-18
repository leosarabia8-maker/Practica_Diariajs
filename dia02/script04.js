const inputElement11 = document.getElementById("user")
const inputElement12 = document.getElementById("contra")
const btnSistema = document.getElementById("btnSistema")
const respuestaSistema = document.getElementById("respuestaSistema")
function inicioSesion (user , contra){
  if (user === "admin" || user === "leonardo"){
    if(contra === "12345"){
      return("Bienvenido al Sistema")
    }else{
      return("Contraseña Incorrecta")
    }
  }else{
    return("Usuario no encontrado")
  }
}
btnSistema.addEventListener("click" , function(){
  let valorIngresado = inputElement11.value
  let valorIngresado2 = inputElement12.value
  let respuesta = inicioSesion(valorIngresado , valorIngresado2)
  respuestaSistema.textContent = respuesta
})