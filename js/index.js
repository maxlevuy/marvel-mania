//Index
let productos = []
let carrito = []
const selectTag = document.getElementById('lista')

const Funko = {
id: 1,
nombre: 'Funko',
precio: 850,
}
productos.push(Funko)
const Poster = {
id: 2,
nombre: 'Poster',
precio: 350,
}
productos.push(Poster)
const DVD = {
id: 3,
nombre: 'DVD',
precio: 800,
}
productos.push(DVD)
const Llavero = {
id: 4,
nombre: 'Llavero',
precio: 150,
}
productos.push(Llavero)

console.log(productos)

productos.forEach((producto) => {
  const option = document.createElement('option')
  option.innerText = `${producto.nombre}: $${producto.precio}`
  option.setAttribute('id', `${producto.id}`)
  selectTag.append(option)
})

const boton = document.createElement('button')
boton.innerText = 'SEGUIR COMPRANDO'
document.body.append(boton)

const boton2 = document.createElement('button')
boton2.innerText = 'TERMINAR COMPRA'
document.body.append(boton2)

boton.onclick = () => {
const productoSeleccionado = productos[selectTag.selectedIndex]
carrito.push(productoSeleccionado)
}

boton2.onclick = () => {
console.log(carrito)
let totalCompra = 0
carrito.forEach((prod) => {
    totalCompra = totalCompra + prod.precio
})

  //alert(`El precio total a pagar es ${totalCompra}`)
const p = document.createElement('p')
p.innerText = `El precio total a pagar es ${totalCompra}`
document.body.append(boton)
}
