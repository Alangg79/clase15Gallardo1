class zapatilla{
    constructor(marca, modelo, color, precio,img) {
        this.marca=marca
        this.modelo=modelo
        this.color=color
        this.precio=precio
        this.img=img

    }
}



const airMax= new zapatilla ("Nike", "AirMax", "Negro", 25000,"https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw76bc5435/products/NI_CW4554-001/NI_CW4554-001-1.JPG")
const mercuri= new zapatilla ("Nike", "Mercuri", "Blanco", 27000,"https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwea3cdd29/products/NI_AQ4176-906/NI_AQ4176-906-1.JPG")
const tiempo= new zapatilla ("Nike","Tiempo", "Azul", 28500,"https://www.tradeinn.com/f/13825/138253191/nike-botas-futbol-tiempo-legend-9-pro-fg.jpg")

const originals= new zapatilla ("Adidas","Originals", "Negro", 23000,"https://essential.vteximg.com.br/arquivos/ids/430115-1000-1000/261-2321_1.jpg?v=637564416135030000")
const style= new zapatilla ("Adidas","Style", "Verde", 18000,"https://images.complex.com/complex/images/c_scale,f_auto,q_auto,w_1920/fl_lossy,pg_1/kmu0hm7rapc8svrph4nk/nerd-adidas-hu-race-trail?fimg-client-default")
const skateboarding= new zapatilla ("Adidas", "Skateboarding", "Rojo", 22500,"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8cc69c7636ac47feba8bac9800a31110_9366/Zapatilla_Retrovulc_Negro_H02210_01_standard.jpg")

const rewind= new zapatilla ("Reebok", "Rewind", "Negro", 15000,"https://redsport.vteximg.com.br/arquivos/ids/1107281-1000-1000/ZAPATILLAS-REEBOK-REEBOK-REWIND-RUN-.jpg?v=637851060201570000")
const classic= new zapatilla ("Reebok","Classic", "Blanco", 12500,"https://sneakernews.com/wp-content/uploads/2022/05/Reebok-Classic-Leather-Modernize-GX2846-8.jpg?w=1140")
const energylux= new zapatilla ("Reebok","EnergyLux" ,"Marron", 8900,"https://atleet.store/files/images/atleet/802391e4d31f/zapatillas-reebok-energylux-2-0-negras-2.jpg")

const productos = [airMax, mercuri, tiempo, originals,style]
//DESESTRUCTURACION DE ARRAYS
const[nike1,nike2,nike3,adidas1,adidas2]=productos
console.log(nike1);

//SPREAD DE ARRAYS
let spreadProductos=[...productos]
console.log(spreadProductos);

let carrito = []

const cardContainer = document.querySelector('#cardContainer')


productos.forEach((producto) => {
    const card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `
    <h3 class="cardTitle"> Zapatilla ${producto.marca} </h3>
    <img src="${producto.img}" class="cardImg">
    <p class="cardDesc"> ${producto.modelo} </p>
    <span class="cardPrice"> $${producto.precio} </span>
    <button data-id="${producto.modelo}" class="buttonCTA"> Agregar al Carrito </button>
    `
    cardContainer.append(card)
})



const cartContainer = document.querySelector('#cartContainer')

const imprimirCarrito = () => {
    cartContainer.innerHTML = ''
    carrito.forEach((producto) => {
        const cartRow = document.createElement('div')
        cartRow.className = 'cartRow'
        cartRow.innerHTML = `
        <div class="cartImg">
        <img src="${producto.img}">
        </div>
        <div class="cartTitle"><span> Zapatilla ${producto.marca}</span></div>
        <div class="cartDesc"><span> ${producto.modelo} Modelo</span></div>
        <div class="cartPrice"><span> $${producto.precio}</span></div>
        `
        cartContainer.append(cartRow)
    })
} 


const agregarProducto = (e) => {

    const productoElegido = e.target.getAttribute('data-id')

    const producto = productos.find((producto) => producto.modelo == productoElegido)
        carrito.push(producto)
    imprimirCarrito()
    localStorage.setItem('carrito', JSON.stringify(carrito))
}



const botonesCompra = document.querySelectorAll('.buttonCTA')
botonesCompra.forEach((botonCompra) => {
    botonCompra.addEventListener('click', agregarProducto)
})


//EMEPLO DE CARRITO DE LOCAL STORAGE

let carrito2=JSON.parse(localStorage.getItem('carrito'))&& imprimirCarrito() || []

let vaciarCarrito2 

const vaciarCarrito = () => {
    if (localStorage.getItem('carrito')) {
        localStorage.removeItem('carrito')
    }
    carrito = []
    imprimirCarrito()
}


const vaciarCarritoBtn = document.querySelector('#vaciarCarrito')
vaciarCarritoBtn.addEventListener('click', vaciarCarrito)

document.querySelector(".buttonCTA").addEventListener("click",() => {
    Swal.fire(
        '',
        'Compra agregada con éxito',
        'success'
      )
})

document.querySelector("#vaciarCarrito").addEventListener("click",() => {
    Swal.fire(
        '',
        'Carrito Vaciado con éxito',
        'info'
      )
})

//FETCH GET RELATIVO

fetch("../data/data.json")
.then((res) => res.json())
.then((data) => console.log(data))

