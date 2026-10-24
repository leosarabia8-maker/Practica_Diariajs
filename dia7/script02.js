const inputElement17 = document.getElementById("primerNum")
const inputElement18 = document.getElementById("segundoNum")

let calculadora ={
  total : 0,
  suma:function(a,b){
    return("resultado es : " + (a+b) )
  },
  resta:function(a,b){
    return("resultado es : " + (a-b) )
  },
  multiplicacion:function(a,b){
    return("Resultado es : " + (a*b))
  },
  division:function(a,b){
    return("Resultado es : " + (a/b))
  }

}
const btnSuma = document.getElementById("suma")
const btnResta = document.getElementById("resta")
const btnMultiplicacion = document.getElementById("multiplicacion")
const btnDivision = document.getElementById("division")
let container = document.getElementById("resultadoCalculadora")
btnSuma.addEventListener("click" , function(){
  let valorIngresado = Number(inputElement17.value)
  let valorIngresado2 = Number(inputElement18.value)
    if(inputElement17.value === "" || inputElement18.value === ""){
    container.innerHTML = ("Valores invalidos")
    }
  else{
    container.innerHTML = calculadora.suma(valorIngresado,valorIngresado2)
  }

})
btnResta.addEventListener("click" , function(){
  let valorIngresado3 = Number(inputElement17.value)
  let valorIngresado4 = Number(inputElement18.value)
    if(inputElement17.value === "" || inputElement18.value === ""){
    container.innerHTML = ("Valores invalidos")
    }
  else{
    container.innerHTML = calculadora.resta(valorIngresado3,valorIngresado4)
  }
})
btnMultiplicacion.addEventListener("click" , function(){
  let valorIngresado5 = Number(inputElement17.value)
  let valorIngresado6 = Number(inputElement18.value)
    if(inputElement17.value === "" || inputElement18.value === ""){
    container.innerHTML = ("Valores invalidos")
    }
  else{
    container.innerHTML = calculadora.multiplicacion(valorIngresado5,valorIngresado6)
  }
})
btnDivision.addEventListener("click" , function(){
  let valorIngresado7 = Number(inputElement17.value)
  let valorIngresado8 = Number(inputElement18.value)
    if(inputElement17.value === "" || inputElement18.value === ""){
    container.innerHTML = ("Valores invalidos")
    }
  else{
    container.innerHTML = calculadora.division(valorIngresado7,valorIngresado8)
  }
})