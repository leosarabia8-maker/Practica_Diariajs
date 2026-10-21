let latencias = [120, 50, 300, 80, 400];
const btnServerLam = document.getElementById("btnServerLam")
const respuestaServerLam = document.getElementById("respuestaServerLam")
function latencia (){
let servidoresLentos = latencias.filter(lam => lam > 100)
return("Servidores lentos encontrados: " + servidoresLentos.length)
}

btnServerLam.addEventListener("click" , function(){
  let respuesta2 = latencia()
  respuestaServerLam.innerText = respuesta2
})

const btnCulpables = document.getElementById("btnCulpables")
const respuestaCulpables = document.getElementById("respuestaCulpables")
let culpables = [120, 300, 400];

function culpable (){
let enSegundos = culpables.map(seg => seg / 1000)
return("Ping del sever :" + enSegundos )
}

btnCulpables.addEventListener("click" , function(){
  let respuesta3 = culpable()
  respuestaCulpables.innerText = respuesta3
})

const btnFinal = document.getElementById("btnFinal")
const respuestaFinal = document.getElementById("respuestaFinal")
let depuracion = [120, 50, 300, 80, 400]
function final (){
  let respuestaFinal = depuracion.filter(lam => lam > 100).map(seg => seg / 1000)
  return("Server lentos / S :" + respuestaFinal)
}
btnFinal.addEventListener("click" , function(){
  let respuesta4 = final()
  respuestaFinal.innerText = respuesta4
})