let latencias = [120, 50, 300, 80, 400]
const btnLatencia = document.getElementById("btnLatencia")
const respuestaLatencia = document.getElementById("respuestaLatencia")
function latencia(){
  let contador = 0
for(let i = 0 ; i < latencias.length ; i++ ){
if (latencias[i] > 100){
contador ++
}
}
return("Servidores lentos: " + contador)
}
btnLatencia.addEventListener("click" , function(){
  let respuesta = latencia()
  respuestaLatencia.innerText = respuesta
})