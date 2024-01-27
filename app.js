
(() => {

    const iva = 0.21, descuento = 0.1
    let opcion, palabraClave, importe = 0, carritoConDescuento
    let carritoDelUsuario = [];

    const Producto = function (id, nombre, descripcion, precio) {
        this.id = id
        this.nombre = nombre
        this.descripcion = descripcion
        this.precio = precio
    }

    let producto1 = new Producto(1, "CUADERNO", "Este producto es un cuaderno para escribir", 500)
    let producto2 = new Producto(2, "LAPIZ", "EEste producto es un Lapiz para escribir", 100)
    let producto3 = new Producto(3, "GOMA", "Este producto es un Goma para borrar", 50)
    let producto4 = new Producto(4, "HOJAS", "Este producto es un Hojas para escribir", 300)
    let producto5 = new Producto(5, "PLASTICOLA", "Este producto es un Plasticola para pegar", 150)
    let producto6 = new Producto(6, "CARPETA", "Este producto es un Carpeta para hojas", 1050)
    let producto7 = new Producto(7, "CARTUCHERA", "Este producto es un Cartuchera para utiles escoladres", 600)
    let producto8 = new Producto(8, "LAPICERA", "Este producto es un Lapicera para escribir", 200)
    let producto9 = new Producto(9, "TIJERA", "Este producto es un Tijera de plastico escolar", 280)
    let producto10 = new Producto(10, "CARATULA", "Este producto es un Caratua separadora para carpetas", 80)

    let misProductos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10]

    function printArray(array){
        console.table(array)
    }

    function itemSearch(palabraClave,array) {
        let cantidad;
        let elemento = array.find((x) => x.nombre === palabraClave)
        if (elemento) {
            console.log(`\nID ${elemento.id} \nNOMBRE: ${elemento.nombre} \nDESCRIPCION: ${elemento.descipcion} \nPRECIO: ${elemento.precio}`)
            cantidad = parseInt(prompt("Ingrese la cantidad"))
            itemAdd(elemento, cantidad)
        } else {
            console.log("No se encontro el producto.\n")
        }
    }

    function itemAdd(producto, cantidad) {
        for (let i = 0; i < cantidad; i++) {
            carritoDelUsuario.push(producto);
        }
        console.log("Se agrego producto al carrito");
    }

    alert("Bienvenido a la tienda \n Abra la consola para visualizar los productos.")
    console.log("Catalogo de Productos: ")
    printArray(misProductos)

    do {
        opcion = parseInt(prompt("\n Seleccione la opcion: \n 1 - Agregar producto al Carrito. \n 2 - Aplicar Descuento 10%. \n 3 - Ver mi Carrito. \n 4 - Vaciar mi Carrito.\n --> precione cualquier otra tecla para salir \n"))
        switch (opcion) {
            case 1:
                palabraClave = prompt("Ingrese el nombre del producto").toUpperCase().trim()
                if(carritoConDescuento){
                    itemSearch(palabraClave,carritoConDescuento)
                }else{
                    itemSearch(palabraClave,misProductos)
                }
            break;

            case 2:
                if(carritoConDescuento){
                    alert("Ya se aplico descuento")
                }else{
                    carritoConDescuento = misProductos.slice(0, misProductos.length)
                    for (const producto of carritoConDescuento) {
                        producto.precio = (producto.precio*0.9)
                    }
                    alert("Se aplico un desc del 10% en tu carrito")
                }
                break;

            case 3:
                console.log("....::::CARRITO:::::....")
                let acumulador=0
                for (const producto of carritoDelUsuario) {
                    console.log(`Producto: ${producto.nombre} Precio: ${producto.precio}`)
                    acumulador = acumulador + producto.precio;
                }
                console.log("\tIMPORTE A PAGAR " + acumulador)
                break;

            case 4:
                carritoDelUsuario = []
                console.log("Se vacio el carrito")

                break
        }

    } while (opcion == 1 || opcion == 2 || opcion == 3 || opcion == 4)

    alert("Saliendo del programa")
    console.clear()
})()

