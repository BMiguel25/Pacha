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
Producto['igv'] = 1.18;

//Actividad 3

Producto['categoria'] = 'Cuadernos';
Producto['desc'] = 'A4 cuadriculado';
Producto['precio'] = '5.2';

for (let key in Producto) {
	console.log(`${key.toUpperCase()}: ${Producto[key]}`);
}

//actividad 4

const libreria = {
    item1:
    {
        categoria: 'Libros',
		descripcion: 'El libro del olvido',
		precio: 10.5,
		estado: 1,
		igv: 1.18
        
    },
    item2:
    {
        categoria: 'cuaderno',
		descripcion: 'A4 con dibujo',
		precio: 5,
		estado: 1,
		igv: 1.18
    }
};


//activiad 5

console.log('precio con igv: ', Producto.precio*Producto.igv + ' subtotal: ', Producto.precio + ' subtotal: ' ,Producto.precio*0.18);

