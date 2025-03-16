/*1.3 En base al siguiente javascript, usa destructuring para crear 2 
variables igualandolo a la función e imprimiendolo por consola.*/

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

function destructuring({name, race}) {
    console.log('Hey, I am a ' + name + ' and my race is ' + race);
};

destructuring(animalFunction());