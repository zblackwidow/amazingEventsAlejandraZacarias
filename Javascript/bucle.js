// bucles 
// let array = [0,1,2,3,4,5]
// let arregloFrutas = ["Manzana", "Pera", "Anana", "Kiwi", "Naranja", "Mango"]

// for (let i = 0; i < 6; i++){
//     console.log(arregloFrutas[i]);
// }
// for (let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }
// 1. Realizar un programa que permita el ingreso de un numero y muestre su tabla de
// multiplicar (Los primeros 10 multiplos).
let porDiez = prompt("Ingrese un numero:");
for (let i = 1; i <= 10; i++) {
    let result = porDiez * i;
    console.log(result);
  }
  
// 2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
// acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.

// 3. Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
// variable guardar un numero que este en el rango 1 - 100. La persona debera poder
// ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
// valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
// nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
// cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
// que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
// felicitaciones y decirle en cuantos intentos lo ha realizado.

// 4. Realizar un programa que permita decir si un numero es primo. Un numero es primo
// si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
// Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
// como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
// numero ya no es primo.

// 5. Realizar un programa que permita dado un numero, mostrar todos sus divisores.

// 6. Dado un array de 10 elementos, realizar un programa que recorra ese array y
// muestre un mensaje por consola con cada uno de los elementos del array.

// 7. Dado un array de 10 numeros, realizar un programa que muestre por consola el
// doble de cada uno de los elementos.

// 8. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
// objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
// que muestre un mensaje de presentacion por cada elemento del array.

// 9. Dado un array de 10 numeros, realizar un programa que recorra el array y solo
// muestre los numeros impares.

// 10. Realizar un programa que permita la entrada de numeros y calcule la suma de los
// numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
// el usuario ingresa un 0.

// 11. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
// numero mas grande.

// 12. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
// numero mas chico.

// 13. Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
// ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
// manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
// un empate. Caso contrario mostrar un mensaje con el nombre de la persona
// ganadora.

// 14. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado.

// 15. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
// pero invertido.

// 16. Dado un array de 10 numeros desordenados, realizar un programa que imprima por
// pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR)