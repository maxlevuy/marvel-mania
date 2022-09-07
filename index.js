//Mensaje bienvenida
let nombreCliente = prompt('¡Bienvenid@ a MarvelManía, la tienda n°1 del Condado! \n¿Como te llamás?: ')
alert('¡Un gusto '+nombreCliente+'!')

let totalCompra = 0
let productoSeleccionado = parseInt(prompt('¿Que merchandising estas buscando?: 1.Funko - 2.Poster - 3.Llavero - 4.DVD'))
let seguirComprando = true
let decision
let producto = []
let carrito = []

//constantes
const Funko = {
    nombre:'Funko',
    precio: 1000
}
producto.push(Funko)
const Poster = {
    nombre:'Poster',
    precio: 300
}
producto.push(Poster)
const Llavero = {
    nombre:'Llavero',
    precio: 500
}
producto.push(Llavero)
const DVD = {
    nombre:'DVD',
    precio: 800
}
producto.push(DVD)

console.log(producto)

while(seguirComprando===true){
    if(productoSeleccionado === 1){
        carrito.push(producto[0])
    } else if (productoSeleccionado === 2){
        carrito.push(producto[1])
    } else if (productoSeleccionado === 3){
        carrito.push(producto[2])
    } else if (productoSeleccionado === 4){
        carrito.push(producto[3])
    } else{
        productoSeleccionado = parseInt(prompt('Por favor, ingresa una opción existente: 1.Funko - 2.Poster - 3.Llavero - 4.DVD'))
        continue
    }

decision = parseInt(prompt('¿Quieres comprar algo más? 1.Si - 2.No'))
if(decision === 1){
    productoSeleccionado = parseInt(prompt('¿Que merchandising estas buscando?: 1.Funko - 2.Poster - 3.Llavero - 4.DVD'))
    } else if(decision === 2){
    seguirComprando = false
    }
}

console.log(carrito)

//Calculo carrito
for (const prod of carrito) {
    totalCompra = totalCompra +prod.precio
}
alert('El valor total sin descuento ni impuestos es: ' + totalCompra)

function calcularPrecioConDescuento(valor) {
    let descuento = 0
    if (valor <= 1000) {
        descuento = 5
    } else if (valor > 1000 && valor <= 1500) {
        descuento = 10
    } else if (valor > 1500 && valor <= 2000) {
        descuento = 15
    } else {
        descuento = 20
    }
    let valorDescuento = valor * (descuento / 100)
    valor = valor - valorDescuento
    return valor
}
let valorConDescuento = calcularPrecioConDescuento(totalCompra)
alert('El total con descuento sin impuestos es: ' + valorConDescuento)

function calcularPrecioConImpuesto(valor) {
    const impuestos = valor * (22 / 100)
    return valor + impuestos
}

let valorFinalConImpuesto = calcularPrecioConImpuesto(valorConDescuento)
alert('Total a pagar: ' + valorFinalConImpuesto)

//Despedida
alert('Muchas gracias por preferirnos ' +nombreCliente)
alert('¡Avengers, assemble!')
