const productos = [
  { nombre: "Galletas", cantidad: 110 },
  { nombre: "Arroz", cantidad: 150 },
  { nombre: "Leche", cantidad: 120 },
  { nombre: "Azucar", cantidad: 110 },
  { nombre: "Sal", cantidad: 11 },
  { nombre: "Papa", cantidad: 16 },
];
const nuevosProductos = [];
class agregarProductos {
  constructor(nombre, cantidad) {
    this.nombre = nombre;
    this.cantidad = cantidad;
  }
}
let nombreUsuario = 0;

let contador = 0;
let respuestaUsuario = 0;

alert("BIENVENIDO INVENTARIO ALMACEN");
let usuario = prompt("Ingrese nombre de usuario");

alert(
  "BIENVENIDO " +
    usuario +
    "\n" +
    "Al INVENTARIO ALMACEN DE SUMINISTROS DE COCINA"
);
menuOpciones();

while (respuestaUsuario > 0 && respuestaUsuario < 4) {
  switch (respuestaUsuario) {
    case 1:
      ListaDeProductos();
      menuOpciones();
      break;
    case 2:
      let nombreProducto = prompt("Ingrese nombre del producto");
      let cantidadProducto = prompt("Ingrese cantidad del producto");
      productoAgregar(nombreProducto, cantidadProducto);
      listaNuevosProductos();
      menuOpciones();
    case 3:
      let cotizarProducto = prompt("Ingrese nombre del producto");
      let cotizarPrecio = prompt("Ingrese precio del producto");

      let cotizarCantidad = prompt("Ingrese cantidad a cotizar");
      let resultado = cotizarCantidad * cotizarPrecio;
      alert(
        "COTIZACION DEL PRODUCTO: " +
          cotizarProducto +
          "\n" +
          "\n" +
          "ADQUIRIENDO: " +
          cotizarCantidad +
          " UNIDADES \n" +
          " AL PRECIO DE: " +
          cotizarPrecio +
          "\n" +
          "\n" +
          "TOTAL: " +
          resultado
      );
      menuOpciones();
  }
}
alert("CERRANDO SESIONN...");

//FUNCIONES
function ListaDeProductos() {
  let ListaDeProducto = productos.map(
    (producto) => producto.nombre + " -  Stock: " + producto.cantidad
  );
  alert(ListaDeProducto.join("\n"));
}
function productoAgregar(nombre, cantidad) {
  nuevosProductos.push(new agregarProductos(nombre, cantidad));
  console.log(`Productos agregados\n ${nuevosProductos.length}`);
}
function menuOpciones() {
  let respuesta = parseInt(
    prompt(
      " Que desea Realizar (Escriba el numero de la opcion que desea)\n 1-Mostrar Productos\n 2-Agregar Producto\n 3-Cotizar Productos\n 4-Salir"
    )
  );
  respuestaUsuario = respuesta;
}
function listaNuevosProductos() {
  let ListaDeProducto = nuevosProductos.map(
    (producto) =>
      producto.nombre + " -  Cantidad Agregada: " + producto.cantidad
  );
  alert("Productos Agregados \n" + ListaDeProducto.join("\n"));
}
