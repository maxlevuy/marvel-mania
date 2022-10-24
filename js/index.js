//Carrito de compras
const Clickbutton = document.querySelectorAll('.button')
const tbody = document.querySelector('.tbody')
let carrito = []

Clickbutton.forEach(btn => {
  btn.addEventListener('click', addToCarritoItem)
})


function addToCarritoItem(e){
  const button = e.target
  const item = button.closest('.card')
  const itemTitle = item.querySelector('.card-title').textContent;
  const itemPrice = item.querySelector('.precio').textContent;
  const itemImg = item.querySelector('.card-img-top').src;
  
  const newItem = {
    title: itemTitle,
    precio: itemPrice,
    img: itemImg,
    cantidad: 1
  }

  addItemCarrito(newItem)
}


function addItemCarrito(newItem){

  const alert = document.querySelector('.alert')

  Swal.fire({
    title: 'Excelente!',
    text: 'Añadido a tu carrito',
    imageUrl: 'https://c.tenor.com/0-e7d7ct3G0AAAAC/shut-up-and-take-my-money-futurama.gif',
    imageWidth: 400,
    imageHeight: 250,
    imageAlt: 'Custom image',
  })

  const InputElemnto = tbody.getElementsByClassName('input__elemento')
  for(let i =0; i < carrito.length ; i++){
    if(carrito[i].title.trim() === newItem.title.trim()){
      carrito[i].cantidad ++;
      const inputValue = InputElemnto[i]
      inputValue.value++;
      CarritoTotal()
      return null;
    }
  }
  
  carrito.push(newItem)
  
  renderCarrito()
} 


function renderCarrito(){
  tbody.innerHTML = ''
  carrito.map(item => {
    const tr = document.createElement('tr')
    tr.classList.add('ItemCarrito')
    const Content = `
    
    <th scope="row">1</th>
            <td class="table__productos">
              <img src=${item.img}  alt="">
              <h6 class="title">${item.title}</h6>
            </td>
            <td class="table__price"><p>${item.precio}</p></td>
            <td class="table__cantidad">
              <input type="number" min="1" value=${item.cantidad} class="input__elemento">
              <button class="delete btn btn-danger">x</button>
            </td>
    
    `
    tr.innerHTML = Content;
    tbody.append(tr)

    tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
    tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad)
  })
  CarritoTotal()
}

function CarritoTotal(){
  let Total = 0;
  const itemCartTotal = document.querySelector('.itemCartTotal')
  carrito.forEach((item) => {
    const precio = Number(item.precio.replace("$", ''))
    Total = Total + precio*item.cantidad
  })


  itemCartTotal.innerHTML = `Total $${Total}`
  addLocalStorage()

  const comprar = document.querySelector('.btn-success');

comprar.addEventListener('click', ()=>{
    
  Swal.fire({
    title: 'Compra realizada!',
    text: 'Nos pondremos en contacto para coordinar el pedido',
    imageUrl: 'https://media.tenor.com/h6DdoEuQgJEAAAAC/robert-downey-jr-rdj.gif',
    imageWidth: 450,
    imageHeight: 300,
    imageAlt: 'Custom image',
  });
    localStorage.clear();
    tbody.innerHTML = '';
    const itemCartTotal = document.querySelector('.itemCartTotal');
    itemCartTotal.innerHTML = '';    
});
}

function removeItemCarrito(e){
  const buttonDelete = e.target
  const tr = buttonDelete.closest(".ItemCarrito")
  const title = tr.querySelector('.title').textContent;
  for(let i=0; i<carrito.length ; i++){

    if(carrito[i].title.trim() === title.trim()){
      carrito.splice(i, 1)
    }
  }
  
  Swal.fire({
    title: 'Recibido',
    text: 'Quitado de tu carrito',
    imageUrl: 'https://media3.giphy.com/media/xUOwG9eMUyBknKhOWQ/giphy.gif?cid=790b7611e46ac15fed051a60391fa93ea4d6196aec7f24f2&rid=giphy.gif&ct=g',
    imageWidth: 400,
    imageHeight: 250,
    imageAlt: 'Custom image',
  })


  tr.remove()
  CarritoTotal()
}

function sumaCantidad(e){
  const sumaInput  = e.target
  const tr = sumaInput.closest(".ItemCarrito")
  const title = tr.querySelector('.title').textContent;
  carrito.forEach(item => {
    if(item.title.trim() === title){
      sumaInput.value < 1 ?  (sumaInput.value = 1) : sumaInput.value;
      item.cantidad = sumaInput.value;
      CarritoTotal()
    }
  })
}

function addLocalStorage(){
  localStorage.setItem('carrito', JSON.stringify(carrito))
}

window.onload = function(){
  const storage = JSON.parse(localStorage.getItem('carrito'));
  if(storage){
    carrito = storage;
    renderCarrito()
  }
}

