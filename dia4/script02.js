let dataCenter = [ [40, 45, 50], [80, 95, 85], [30, 35, 92] ];
let reporte = []
const btnTemperatura = document.getElementById("btnTemperatura")
const respuestaTemperatura = document.getElementById("respuestaTemperatura")
function data(){
  for(let i = 0 ; i < dataCenter.length ; i++){
    for(let j = 0 ; j < dataCenter[i].length ; j++){
      if(dataCenter[i][j] > 90){
        reporte.push("Fila : " + i + " Columna : " + j + " a " + dataCenter[i][j] + " Grados" )
      }
    }
  }
  return(reporte)
}
btnTemperatura.addEventListener("click" , function(){
  let respuesta = data()
  respuestaTemperatura.innerText = respuesta
})