/**
 * @author Juan Gaudino
 * @version 1.0.1
 * @description DOM y Eventos - Clase 08 y 09 - Coderhouse
 * 
 * History
 *  1.0.0 - 2022-02-23 : Juan Gaudino : Initial Commit
 *  1.0.1 - 2022-02-23 : Juan Gaudino : Ajustes en los textos y borrar codigo innecesario
 */

// Declaración de valores unitarios

const unitarioPAI = 1200;
const unitarioCPM = 200;
const metroCuadradoFront = 450;
const metroCuadradoBack = 730;
const metrosCuadrados = (ancho, alto) => {
    return ancho * alto * cantidad;
}

// Declaración de funciones


calcularPrecio = (material, cantidad, metrosCuadrados) => {
    let precio = 0;
    switch (material) {
        case 'PAI':
            precio = cantidad * unitarioPAI;
            break;
        case 'CPM':
            precio = cantidad * unitarioCPM;
            break;
        case 'Front':
            precio = metrosCuadrados * metroCuadradoFront;
            break;
        case 'Back':
            precio = metrosCuadrados * metroCuadradoBack; 
            break;
    }
    return precio;
}


//Funciones por producto

function pai() {
        let material = "PAI";
        cantidad = prompt(`Ingrese la cantidad de PPL a producir`);
        console.log(`El costo de producción de ${cantidad} PPL es de $${calcularPrecio(material, cantidad)}`);
        document.getElementById("pai").innerHTML = `El costo de producción de ${cantidad} PPL es de $${calcularPrecio(material, cantidad)}. <br> Click para cotizar de nuevo <br>`;
        // document.write("<h2> Cotización de "+ cantidad +" "+ material +"</h2>");
        // document.write("<h4> El costo de producción es de $" + calcularPrecio(material, cantidad,) + "</h4>");
        precio = calcularPrecio(material, cantidad);
        return material;
}

function cpm() {
        let material = "CPM";
        cantidad = prompt(`Ingrese la cantidad de CPM a producir`);
        console.log(`El costo de producción de ${cantidad} CPM es de $${calcularPrecio(material, cantidad)}`);
        alert(`El costo de producción de ${cantidad} CPM es de $${calcularPrecio(material, cantidad)}`);
        document.getElementById("cpm").innerHTML = `El costo de producción de ${cantidad} CPM es de $${calcularPrecio(material, cantidad)}. <br> Click para cotizar de nuevo <br>`;
        // document.write("<h2> Cotización de "+ cantidad +" "+ material +"</h2>");
        // document.write("<h4> El costo de producción es de $" + calcularPrecio(material, cantidad,) + "</h4>");
        precio = calcularPrecio(material, cantidad);
        return material;
}

function front() {
        let material = "Front";
        ancho = prompt(`Ingrese el ancho del material Front`);	
        alto = prompt(`Ingrese el alto del material Front`);
        cantidad = prompt(`Ingrese la cantidad de Front`);
        let metrosCuadrados = (ancho * alto * cantidad);
        console.log(`Los metros cuadrados del material Front son de ${metrosCuadrados}`);
        console.log(`El costo de producción de ${cantidad} Front es de $${calcularPrecio(material, cantidad, metrosCuadrados)}`);
        alert(`El costo de producción de ${cantidad} Front es de $${calcularPrecio(material, cantidad, metrosCuadrados)}`);
        document.getElementById("front").innerHTML = `El costo de producción de ${cantidad} Front de ${ancho} x ${alto} es de $${calcularPrecio(material, cantidad, metrosCuadrados)}. <br> Click para cotizar de nuevo <br>`;
        // document.write("<h2> Cotización de "+ cantidad +" "+ material +" "+ "de " + ancho + "x" + alto + " metros" +"</h2>");
        // document.write("<h4> El costo de producción es de $" + calcularPrecio(material, cantidad, metrosCuadrados) + "</h4>");
        precio = calcularPrecio(material, cantidad, metrosCuadrados);
}

function back () {
        let material = "Back";
        ancho = prompt(`Ingrese el ancho del material Back`);	
        alto = prompt(`Ingrese el alto del material Back`);
        cantidad = prompt(`Ingrese la cantidad de Back`);
        let metrosCuadrados = (ancho * alto * cantidad);
        console.log(`Los metros cuadrados del material Back son de ${metrosCuadrados}`);
        console.log(`El costo de producción de ${cantidad} Back es de $${calcularPrecio(material, cantidad, metrosCuadrados)}`);
        alert(`El costo de producción de ${cantidad} Back es de $${calcularPrecio(material, cantidad, metrosCuadrados)}`);
        document.getElementById("back").innerHTML = `El costo de producción de ${cantidad} Back de ${ancho} x ${alto} es de $${calcularPrecio(material, cantidad, metrosCuadrados)}. <br> Click para cotizar de nuevo <br>`;
        // document.write("<h2> Cotización de "+ cantidad +" "+ material +" "+ "de " + ancho + "x" + alto + " metros" +"</h2>");
        // document.write("<h4> El costo de producción es de $" + calcularPrecio(material, cantidad, metrosCuadrados) + "</h4>");
        precio = calcularPrecio(material, cantidad, metrosCuadrados);
}

// Creación de objetos

class Producto {
    constructor(titulo, precio, cantidad) {
        this.titulo = titulo;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

const PRODUCTO = new Producto(material, calcularPrecio, cantidad);


const agregarAlCarrito = (producto) => {
      carrito.push(producto);
  };


const carrito = [];
const arrayProductos = [
    { id: 1, titulo: material, precio: precio, cantidad},
    // { id: 2, titulo: material2, precio: precio2, cantidad2},
];

arrayProductos.forEach(producto => {
    agregarAlCarrito(producto);
});

console.log(carrito);

