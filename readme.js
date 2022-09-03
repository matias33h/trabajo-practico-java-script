// Copiar las funciones en un archivo JavaScript.
// Simplificar la composición de los strings.
// Simplificar escritura de los objetos literales.
// Transformar las funciones básicas en funciones flecha.
// Crear un repositorio con el nombre ES6-miNombre (nombre de cada uno de ustedes) y subir las soluciones a Github a través de la consola o GitHub Desktop.




function saludar(nombre){
    return `Hola ${nombre}` ;
}

// Mostrar el resultado por consola
console.log(saludar('Alejandro'));
const multiplicar=(a, b)=>{ return a+b}

// Mostrar el resultado por consola
console.log(multiplicar(3, 15))

const crearAlumno=(nombre, apellido, edad, materias)=>{return {nombre,apellido,edad,materias}}

// Mostrar el resultado por consola.
console.log(crearAlumno('Leo', 'Messi', '32', ['TLPA','Base de Datos','Inglés']))


const devolverFecha=(d,m,a)=>{return `Hoy es ${d+m+a}`;
}

// Mostrar el resultado por consola.
console.log(devolverFecha('10/','09/','2022'));