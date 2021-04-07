// Desestructurar Objetos

const persona = {
    nombre: 'Pablo',
    apellido: 'Fernandez',
    pais: 'Argentina',
    ciudad: 'Buenos Aires',
    twitter: '@pablof'
}

// const nombre = persona.nombre;
// const apellido = persona.apellido;

let {nombre, apellido, pais, ciudad} = persona;

console.log(`Hola ${nombre} ${apellido}`);

// Objeto compuesto
const usuario = {
    nombre: 'Juan',
    apellido: 'Perez',
    links: {
        social: {
            twitter: 'https://twitter.com/juanp',
            facebook: 'https://facebook.com/juan.perez'
        },
        web: {
            blog: 'https://juanperez.com'
        }
    }
};

const {twitter, facebook} = usuario.links.social
// o
const {twitter: tweet, facebook: fb} = usuario.links.social; //son alias
console.log(tweet);

// arrays
const details = ['Juan Perez', 123, 'juanp.com'];
const [name, id, website] = details;

console.log(name, id, website);

const curso = ['Pablo', 'Federico', 'Matias', 'Anna', 'Julian'];

const [profesor, asistente, ...alumnos] = curso;
console.log(profesor, asistente, alumnos);

// Swapping de variables
let a = 5;
let b = 6;

let aux = a;
a = b;
b = aux;

[a,b] = [b,a];

// Ejemplo en funciones

function convertirMonedas(importe) {
    const tipoCambio = {
        USD: importe * 0.160,
        MEX: importe * 0.10,
        EU: importe * 0.20,
    }
    return tipoCambio;
}

const {EU, USD, MEX} = convertirMonedas(1500);
console.log(EU, USD, MEX);

// Destructuring en parametros de una funcion

function calcTotal({total, propina=0.10, impuesto=0.13}) { //los =0.10 son valores por defecto
    return total + (propina * total) + (impuesto * total);
}

console.log(calcTotal({propina: 0.15, total: 200})); // no le envio impuesto pero tiene que tomar el valor por default

function calcTotal({total, propina, impuesto}) {
    return total + (propina * total) + (impuesto * total);
}

console.log(calcTotal(200, 0.15, 0.13));

const valores = {total: 200, propina: 0.10, impuesto: 0.13};
console.log(calcTotal(valores.total, valores.propina, valores.impuesto));
