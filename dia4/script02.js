let dataCenter = [ [40, 45, 50], [80, 95, 85], [30, 35, 92] ];
const btnTemperatura = document.getElementById("btnTemperatura")
const respuestaTemperatura = document.getElementById("respuestaTemperatura")
function data(){
  let contador = 0
  for(let i = 0 ; i < dataCenter.length ; i++){
    for(let j = 0 ; j < dataCenter[i].length ; j++){
      if(dataCenter[i][j] > 90){
        contador++
      }
    }
  }
  return("Servidores sobre calentados :" + contador)
}
btnTemperatura.addEventListener("click" , function(){
  let respuesta = data()
  respuestaTemperatura.innerText = respuesta
})