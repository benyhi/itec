let listaNombres = [];

function hola() {
    let data = "";
    let contenedor = document.querySelector(".contenido");

    while (data !== "fin") {
        data = prompt("Ingresa un nombre, para finalizar ingresa 'fin': ");
        if (data !== "fin") {
            listaNombres.push(data);
            let crear = document.createElement("p");
            let agregar = document.createTextNode(data);
            crear.appendChild(agregar);
            contenedor.appendChild(crear);
        }
    }
}