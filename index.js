let nombreCliente = prompt('¡Bienvenid@ a MarvelManía, la tienda n°1 del Condado! \n¿Como te llamás?: ')
alert('¡Un gusto '+nombreCliente+'!')

let totalCompra = 0
let itemSeleccionado = parseInt(prompt('¿Que merchandising estas buscando?: 1.Funko - 2.Poster - 3.Llavero - 4.DVD'))
let seguirComprando = true
let decision
let producto = []
let cesta = []

const item1 = {
    nombre:'Funko',
    precio:990
}
producto.push(1)

const item2 = {
    nombre:'Poster',
    precio:300
}
producto.push(2)

const item3 = {
    nombre:'Llavero',
    precio:450
}
producto.push(3)

const item4 = {
    nombre:'DVD',
    precio:800
}
producto.push(4)

console.log(producto)



while(seguirComprando===true){
    if(itemSeleccionado === 1){
        cesta.push(producto[0])
    } else if (itemSeleccionado === 2){
        cesta.push(producto[1])
    } else if (itemSeleccionado === 3){
        cesta.push(producto[2])
    } else if (itemSeleccionado === 4){
        cesta.push(producto[3])
    } else{
        itemSeleccionado = parseInt(prompt('Por favor, ingresa una opción existente: 1.Funko - 2.Poster - 3.Llavero - 4.DVD'))
        continue
    }
decision = parseInt(prompt('¿Quieres comprar algo más? 1.Si - 2.No'))
if(decision === 1){
    itemSeleccionado = parseInt(prompt('¿Que merchandising estas buscando?: 1.Funko - 2.Poster - 3.Llavero - 4.DVD'))
    } else if(decision === 2){
    seguirComprando = false
    }

}

console.log(cesta)

alert('Muchas gracias por preferirnos ' +nombreCliente)
alert('¡Avengers, assemble!')
