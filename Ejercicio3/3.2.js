// 3.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const UsersName = users.map(user => {
    if(user.name[0] === 'A'){
        user.name = 'Anacleto';
    }
    return user.name;
});
console.log(UsersName);