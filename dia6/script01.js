let passwords = ["123", "admin1234", "qwerty", "superSegura99"]

  let serguridadPass = passwords.filter(contra => contra.length >= 8)
  console.log(serguridadPass)

  let stockBodegas = [0, 15, 0, 4, 0, 50]

let inventarioBodegas = stockBodegas.filter(invent => invent > 0)
console.log(inventarioBodegas)


let transacciones = [100, -50, 300, -20, 50]
let transacionValida = transacciones.filter(trans => trans > 0)
console.log(transacionValida)

let pings = [15, 20, 150, 18, 300]
let ms = pings.filter(laten => laten < 50)
console.log(ms)

let temperaturas = [22, 25, 38, 21, 40]
let temperaturaPeligro = temperaturas.filter(calentamineto => calentamineto > 35)
console.log("Termperatura altas peligro :" , temperaturaPeligro)

let preciosBase = [100, 20, 50, 200]
let preciosIva = preciosBase.map(iva => iva * 1.12)
console.log("Precios con iva :" , preciosIva)

let cobrosDolares = [15, 49, 12, 100]
let convertidoCentavos = cobrosDolares.filter(usa => usa > 0).map(cent => cent * 100)

console.log(convertidoCentavos)
let puntajes = [1200, 450, 3000, 890]
let bono = puntajes.map(extra => extra + 500)
console.log(bono)

let usuarios = ["leonardo", "david", "admin"];
let usuarioMayuscula = usuarios.map(user => user.toUpperCase())
console.log(usuarioMayuscula)

let pulgadas = [15.5, 24, 27, 32]
let medidas = pulgadas.map(tamaño => tamaño * 2.54)
console.log(medidas)

let cajaRegistradora = [150, 20, 30, 400]
let total = cajaRegistradora.reduce((acumulador , dinero) => acumulador + dinero , 0)
console.log("Dinero del dia " , total)


let ventasDiarias = [200, -50, 0, 100, -20, 300]
let cierreCaja = ventasDiarias.filter(ventaDia => ventaDia > 0).map(suamIva => suamIva *1.12).reduce((caja , dineroDia) => caja + dineroDia , 0)
console.log(cierreCaja)


let estudiantes = ["Leonardo", "David", "Juan"]
estudiantes.forEach( alumno =>{
  console.log("bienvedio al sistema " + alumno)
})

let motos = ["Pulsar NS 160", "Gixxer 150", "Apache"]
motos.forEach((moto , index ) =>{
  console.log("moto " + index + ":" + moto)
})

let voltajes = [110, 220, 115, 230]
let picosDeVoltaje = 0
voltajes.forEach(voltaje => {
  if(voltaje > 120){
picosDeVoltaje++
  }
})
  console.log(picosDeVoltaje)

  let pedido = ["Alitas", "Papas fritas", "Salsa BBQ"]
  let ticket = "Ticket: "
  pedido.forEach(menu => {
    ticket = ticket + menu + ", "
  })
  console.log(ticket)

  let stack = ["HTML", "CSS", "JS"]
  let estructuraHTML = ""
  stack.forEach(fronted => {
    estructuraHTML = estructuraHTML + "<li>" + fronted + "</li>"
  })
console.log(estructuraHTML)



let cajaBruta = [100, -50, 0, 200, 50, 0, -10]
let preciosNetos = cajaBruta.filter(dineroViejo => dineroViejo > 0).map(sumatoriaIva => sumatoriaIva * 1.12)
preciosNetos.forEach(empaquetado =>{
  console.log("Empacando repuesto valorado en: $" , empaquetado)
})
let granTotal = preciosNetos.reduce((caja , moneyTotal)=> caja + moneyTotal , 0)
console.log(granTotal)