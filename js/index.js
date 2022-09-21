//Carrito de compras
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

boton.onclick = ()=>{
  const productoSeleccionado = productos[selectTag.selectedIndex]
  console.log(selectTag.selectedIndex)
  carrito.push(productoSeleccionado)
  console.log(carrito.length)
}

boton2.onclick = () =>{
  console.log(carrito)
  let totalCompra = 0
  carrito.forEach((prod)=>{
    totalCompra = totalCompra + prod.precio
  })
  alert(`El precio final es ${totalCompra}`)
}

//Form de datos del usuario
const titulo = document.getElementById('titulo1')
const formulario = document.getElementById('formInicial')

formulario.onsubmit = (event)=>{
event.preventDefault()
const informacionArray = []
for (const input of event.target.children) {
    const obj = {}
    obj['tipo'] = input.name
    obj['valor'] = input.value
    informacionArray.push(obj)
}
console.log(informacionArray)
localStorage.setItem('info',JSON.stringify(informacionArray))
}
if(localStorage.length>0){
const informacion = JSON.parse(localStorage.getItem('info'))

let nombre = ''
let apellido = ''
informacion.forEach(dato=>{
  if (dato.tipo==='name'){
      nombre = dato.valor
    }
    if (dato.tipo==='lastname'){
        apellido = dato.valor
    }
})
console.log('name',nombre)
console.log('lastname',apellido)
if(nombre!=='' || apellido!==''){
titulo.innerText = `Hola ${nombre} ${apellido}, bienvenido de vuelta`
}
}