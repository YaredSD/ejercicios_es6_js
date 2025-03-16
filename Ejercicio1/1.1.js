/* 1.1 En base al siguiente javascript, crea variables en base a las propiedades 
del objeto usando object destructuring e imprimelas por consola. Cuidado, 
no hace falta hacer destructuring del array, solo del objeto.*/

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020};

const {title, gender, year, producer = 'Naughty Dog', duration= 10} = game;

console.log(title);
console.log(gender);
console.log(year);
console.log(producer);
console.log(duration);