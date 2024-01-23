
 const iva = 0.21, descuento=0.1
 let opcion, palabraClave

/**
 * crear funcion para que mostrar mas informacion de los productos
 * crear funcion para aplicar descuento + iva
 * crear funcion para busqueda y filtrado de producto XXXX
 * crear funcion para mostrar carrito del usuario
 * crear funcion para borrar producto del carrito
 * 
*/

/**
 * El array misProductos contiene los 10 productos vendidos en la tienda, c/ articulo cuenta con id-nombre-descripcion y precio
 */

 let misProductos = [
    {id: 1, nombre:"CUADERNO",descipcion: "Este producto es un cuaderno para escribir", precio: 500},
    {id: 2, nombre:"LAPIZ",descipcion: "Este producto es un Lapiz para escribir", precio: 100},
    {id: 3, nombre:"GOMA",descipcion: "Este producto es un Goma para borrar", precio: 50},
    {id: 4, nombre:"HOJAS",descipcion: "Este producto es un Hojas para escribir", precio: 300},
    {id: 5, nombre:"PLASTICOLA",descipcion: "Este producto es un Plasticola para pegar", precio: 150},
    {id: 6, nombre:"CARPETA",descipcion: "Este producto es un Carpeta para hojas", precio: 1050},
    {id: 7, nombre:"CARTUCHERA",descipcion: "Este producto es un Cartuchera para utiles escoladres", precio: 600},
    {id: 8, nombre:"LAPICERA",descipcion: "Este producto es un Lapicera para escribir", precio: 200},
    {id: 9, nombre:"TIJERA",descipcion: "Este producto es un Tijera de plastico escolar", precio: 280},
    {id: 10, nombre:"CARATULA",descipcion: "Este producto es un Caratua separadora para carpetas", precio: 80}
 ]

/**
 * El array carritoDelUsuario contendra los items-productos seleccionados por el usuario
 */

let carritoDelUsuario=[];


/**
 * La funcion busca en el array misProductos y devuelve el objeto que coincida con la palabraClave tipeada por el usuario
*/
function itemSearch(palabraClave){
    let elemento = misProductos.find((x) => x.nombre === palabraClave)
    if(elemento){
        console.log(`\nID ${elemento.id} \nNOMBRE: ${elemento.nombre} \nDESCRIPCION: ${elemento.descipcion} \nPRECIO: ${elemento.precio}`)
    }else{
        console.log("No se encontro el producto.\n")
    }
}


function itemAdd(){

}



alert("Bienvenido a la tienda \n Abra la consola para visualizar los productos.")
console.log("Catalogo de Productos: ")

for (const producto of misProductos) {
    console.log(`codigo: ${producto.id} ---> ${producto.nombre} precio: ${producto.precio}`)
}

opcion = parseInt(prompt("\n Seleccione la opcion: \n 1 - Agregar producto al Carrito. \n 2 - Ver descripcion de un producto. \n 3 - Ver mi Carrito. \n 4 - Borrar producto de mi Carrito.\n --> precione cualquier otra tecla para salir \n"))

switch (opcion){
    case 1:

        break;

    case 2:
        palabraClave = prompt("Ingrese el nombre del producto").toUpperCase()
        itemSearch(palabraClave)
        break;


    case 3:

        break;

    case 4:

        break
    
    default:
        alert("Saliendo del programa")
        console.clear()
}
