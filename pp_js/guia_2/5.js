let productos = [
    { nombre: "Camisa", precio: 30, descuento: 10 },
    { nombre: "Pantalón", precio: 50, descuento: 15 },
    { nombre: "Zapatos", precio: 80, descuento: 20 },
    { nombre: "Chaqueta", precio: 100, descuento: 25 },
    { nombre: "Bufanda", precio: 20, descuento: 5 },
    { nombre: "Gorra", precio: 15, descuento: 0 },
    { nombre: "Calcetines", precio: 10, descuento: 0 },
    { nombre: "Reloj", precio: 120, descuento: 30 },
    { nombre: "Bolsa", precio: 40, descuento: 10 },
    { nombre: "Gafas de sol", precio: 60, descuento: 15 }
  ];

function obtenerPrecio(productos){
  var precioFinal = productos.map(producto =>({...producto, precio: producto.precio - producto.descuento}))
  var mayores50 = precioFinal.filter(producto => producto.precio > 50)
  return mayores50.find(producto => producto.descuento === 20)
};
  
console.log(obtenerPrecio(productos))