let miLaptop = {
  marca: "HP",
  pulgadas: 15.5,
  sistemaOperativo: " Ubuntu 26.04",
  arrancar:function(){
    return("Iniciando Sistema" + this.sistemaOperativo)
  }
};
const btnArrancar = document.getElementById("btnArrancar")
let contenedor = document.getElementById("pantalla-laptop")
contenedor.innerHTML = "El sistema operativo es: " + miLaptop.sistemaOperativo;
btnArrancar.addEventListener("click" , function(){
contenedor.innerHTML = miLaptop.arrancar()
})