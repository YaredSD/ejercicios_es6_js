// 2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const NewColors = [...colors.slice(0, 2), ...colors.slice(3)];
console.log(NewColors);
console.log(colors);
