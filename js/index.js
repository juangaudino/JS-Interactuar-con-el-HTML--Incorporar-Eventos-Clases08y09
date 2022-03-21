/**
 * @author Juan Gaudino
 * @version 1.0.0
 * @description 1er. Entrega Proyecto Final JavaScript - Clase 07 - Coderhouse
 * 
 * History
 *  1.0.0 - 2022-02-23 : Juan Gaudino : Mostrar en consola si el alumno esta aprobado o no
 */

// Declaración de valores unitarios

const unitarioPAI = 1200;
const unitarioCPM = 200;
const metroCuadradoFront = 450;
const metroCuadradoBack = 730;
const metrosCuadrados = (ancho, alto) => {
    return ancho * alto * cantidad;
}
// let precio2 = 0;
// let cantidad2 = 0;


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


// Solicitud de datos y funciones old

// let material = solicitarMaterial();
// let material2 = confirm("Desea agregar otro material?");
// if (material2 == true) {
// material2 = solicitarMaterial2();
// }


// function solicitarMaterial() {
//     let material = prompt('Ingrese el material: PAI, CPM, Front o Back');
//     if (material === 'PAI' || material === 'CPM') {
//         cantidad = prompt(`Ingrese la cantidad de ${material} a producir`);
//         console.log(`El costo de producción de ${cantidad} ${material} es de $${calcularPrecio(material, cantidad)}`);
//         alert(`El costo de producción de ${cantidad} ${material} es de $${calcularPrecio(material, cantidad)}`);
//         document.write("<h2> Cotización de "+ cantidad +" "+ material +"</h2>");
//         document.write("<h4> El costo de producción es de $" + calcularPrecio(material, cantidad,) + "</h4>");
//         precio = calcularPrecio(material, cantidad);
//     }
//     else if (material === 'Front' || material === 'Back') {
//         ancho = prompt(`Ingrese el ancho del material ${material}`);	
//         alto = prompt(`Ingrese el alto del material ${material}`);
//         cantidad = prompt(`Ingrese la cantidad de ${material}`);
//         let metrosCuadrados = (ancho * alto * cantidad);
//         console.log(`Los metros cuadrados del material ${material} son de ${metrosCuadrados}`);
//         console.log(`El costo de producción de ${cantidad} ${material} es de $${calcularPrecio(material, cantidad, metrosCuadrados)}`);
//         alert(`El costo de producción de ${cantidad} ${material} es de $${calcularPrecio(material, cantidad, metrosCuadrados)}`);
//         document.write("<h2> Cotización de "+ cantidad +" "+ material +" "+ "de " + ancho + "x" + alto + " metros" +"</h2>");
//         document.write("<h4> El costo de producción es de $" + calcularPrecio(material, cantidad, metrosCuadrados) + "</h4>");
//         precio = calcularPrecio(material, cantidad, metrosCuadrados);
//     }
//     return material;
// }

// function solicitarMaterial2() {
//     let material2 = prompt('Ingrese el material: PAI, CPM, Front o Back');
//     if (material2 === 'PAI' || material2 === 'CPM') {
//         cantidad2 = prompt(`Ingrese la cantidad de ${material2} a producir`);
//         console.log(`El costo de producción de ${cantidad2} ${material2} es de $${calcularPrecio(material2, cantidad2)}`);
//         alert(`El costo de producción de ${cantidad2} ${material2} es de $${calcularPrecio(material2, cantidad2)}`);
//         document.write("<h2> Cotización de "+ cantidad2 +" "+ material2 +"</h2>");
//         document.write("<h4> El costo de producción es de $" + calcularPrecio(material2, cantidad2,) + "</h4>");
//         precio2 = calcularPrecio(material2, cantidad2);
//     }
//     else if (material2 === 'Front' || material2 === 'Back') {
//         ancho = prompt(`Ingrese el ancho del material ${material2}`);	
//         alto = prompt(`Ingrese el alto del material ${material2}`);
//         cantidad2 = prompt(`Ingrese la cantidad de ${material2}`);
//         let metrosCuadrados = (ancho * alto * cantidad);
//         console.log(`Los metros cuadrados del material ${material2} son de ${metrosCuadrados}`);
//         console.log(`El costo de producción de ${cantidad2} ${material2} es de $${calcularPrecio(material2, cantidad2, metrosCuadrados)}`);
//         alert(`El costo de producción de ${cantidad2} ${material2} es de $${calcularPrecio(material2, cantidad2, metrosCuadrados)}`);
//         document.write("<h2> Cotización de "+ cantidad2 +" "+ material2 +" "+ "de " + ancho + "x" + alto + " metros" +"</h2>");
//         document.write("<h4> El costo de producción es de $" + calcularPrecio(material2, cantidad2, metrosCuadrados) + "</h4>");
//         precio2 = calcularPrecio(material2, cantidad2, metrosCuadrados);
//     }
//     return material2;
// }*//



//Funciones por producto

function pai() {
        let material = "PAI";
        cantidad = prompt(`Ingrese la cantidad de PPL a producir`);
        console.log(`El costo de producción de ${cantidad} PPL es de $${calcularPrecio(material, cantidad)}`);
        document.getElementById("pai").innerHTML = `El costo de producción de ${cantidad} PPL es de $${calcularPrecio(material, cantidad)}, Click para cotizar otra cantidad`;
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
        document.getElementById("cpm").innerHTML = `El costo de producción de ${cantidad} CPM es de $${calcularPrecio(material, cantidad)}, Click para cotizar otra cantidad`;
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
        document.getElementById("front").innerHTML = `El costo de producción de ${cantidad} Front es de $${calcularPrecio(material, cantidad, metrosCuadrados)}, Click para cotizar otra cantidad`;
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
        document.getElementById("back").innerHTML = `El costo de producción de ${cantidad} Back es de $${calcularPrecio(material, cantidad, metrosCuadrados)}, Click para cotizar otra cantidad`;
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

