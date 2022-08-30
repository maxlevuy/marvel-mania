let nombreCliente = prompt('¡Bienvenid@ a MarvelManía, la tienda n°1 del Condado! \n¿Como te llamás?: ')
alert('¡Un gusto '+nombreCliente+'!')

let totalCompra = 0
let productoSeleccionado = parseInt(prompt(
    "Por favor, ingresa la opción deseada: 1.Figura de acción - 2.Poster grande - 3.Llavero - 4.Taza personalizada"))

let seguirComprando = true
let decision

while (seguirComprando === true) {
    if (productoSeleccionado === 1) {
        totalCompra = totalCompra + 5800
    } else if (productoSeleccionado === 2) {
        totalCompra = totalCompra + 1400
    } else if (productoSeleccionado === 3) {
        totalCompra = totalCompra + 750
    } else if (productoSeleccionado === 4) {
        totalCompra = totalCompra + 500
    } else {
        productoSeleccionado = parseInt(
            prompt(
                "Por favor, ingresa la opción deseada: 1.Figura de acción, 2.Poster grande, 3.Llavero"))
        continue
    }

    decision = parseInt(prompt('¿Quieres seguir agregando productos al carrito? 1.Si - 2.No'))
    if (decision === 1) {
        productoSeleccionado = parseInt(prompt(
            "Por favor, ingresa la opción deseada: 1.Figura de acción - 2.Poster grande - 3.Llavero"))
    } else if (decision === 2) {
        seguirComprando = false
    }
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
alert('Muchas gracias por preferirnos ' +nombreCliente)
alert('¡Avengers, assemble!')
