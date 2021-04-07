// El operador ... Spread, devuelve, los elementos de un array

const BETP2A = ['Pedro', 'Maria', 'Juan'];
const YATP2D = ['Ana', 'Mario'];

const TP2 = [...BETP2A, ...YATP2D];
console.log(TP2);

const inventores = ['Einstein', 'Newton', 'Galileo'];
const nuevosInventores = ['Musk', 'Jobs'];

inventores.push(...nuevosInventores);

// Funciones que reciben como parametro un spread

function convertirMoneda(rate, ...amounts) {
    return amounts.map(amount => amount * rate);
}

console.log(convertirMoneda(3.4, 45, 56 ,67 ,89 , 89));

// Ejemplo de asignacion de array a array con variables
const runner = ['Pablo', 34234, 5.5, 5.6, 5.7, 6.5];

const [name, id, ...runs] = runner;
console.log(name, runs[3]);