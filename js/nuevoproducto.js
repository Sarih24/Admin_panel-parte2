import { nuevoProducto } from "./api.js";
import { mostrarAlerta } from "./mostrarAlerta.js";

const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit',validarProducto);

async function validarProducto(e){
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const precio = document.querySelector('#precio').value;
    const categoria = document.querySelector('#categoria').value;

    //crear estructura para guardar
    const producto ={
        nombre,
        precio,
        categoria
    }

    if(validar(producto)){
        //en caso de que algun campo este vacio
        mostrarAlerta('Todos los campos son obligatorios');
        return;
    }

    await nuevoProducto(producto);

    window.location.href = 'index.html';
}

function validar(objeto){
    return !Object.values(objeto).every(elemento => elemento !=='');
}