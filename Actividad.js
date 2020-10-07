//Actividad 1
const objectLiteral = {};
const objectConstructor = new Object();

const Producto = {
	categoria: 'Libros',
	descripcion: 'El libro del olvido',
	precio: 10.5,
};

//Actividad 2

Producto['estado'] = '1';

//Actividad 3

Producto['categoria'] = 'Cuadernos';
Producto['desc'] = 'A4 cuadriculado';
Producto['precio'] = '5.2';

for (let key in Producto) {
	console.log(`${key.toUpperCase()}: ${Producto[key]}`);
}

console.log('categoria', Producto.categoria);
console.log('desc', Producto.descripcion);
console.log('precio con igv', Producto.precio*1.18);
console.log('estado', Producto.estado);
