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
console.log("EJERCICIO 1");
let porDiez = prompt("Ingrese un número:");
for (let i = 1; i <= 10; i++) {
  let result = porDiez * i;
  console.log(result);
}

// 2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
// acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.

console.log("EJERCICIO 2");
let numeroIngresado = prompt("Ingrese un número");
let acumulador = 0;
while (numeroIngresado != 0) {
  acumulador = acumulador + parseInt(numeroIngresado, 10);
  numeroIngresado = prompt("Ingrese un número");
}
console.log("El total es " + acumulador);

// 3. Realizar un juego de adivinar el numero del los ejercicios del tema anterior, en una
// variable guardar un numero que este en el rango 1 - 100. La persona debera poder
// ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
// valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
// nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
// cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
// que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
// felicitaciones y decirle en cuantos intentos lo ha realizado.

console.log("EJERCICIO 3");
let azar = 34;
let inero;
let contAux = 0;

do {
  inero = prompt("Adivine el número!");
  contAux++;
  if (inero < azar) {
    alert("Te quedaste corto");
  }
  if (inero > azar) {
    alert("Te pasaste un poquito");
  }
} while (azar != inero);
console.log("Felicitaciones");
console.log("Sos medio lerdo, hiciste", contAux, "intentos");

// 4. Realizar un programa que permita decir si un numero es primo. Un numero es primo
// si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
// Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
// como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
// numero ya no es primo.

console.log("Ejercicio 4");
let primito = prompt("Veamos si somos primos");
let dividirHasta = Math.floor(primito / 2);
let esPrimo = true;

for (let divisor = 2; divisor <= dividirHasta; divisor++) {
  let resto = primito % divisor;
  if (resto == 0) {
    esPrimo = false;
    break;
  }
}
if (!esPrimo) {
  alert("No es primo");
} else {
  alert("Es primo");
}

// 5. Realizar un programa que permita dado un numero, mostrar todos sus divisores.

console.log("EJERCICIO 5");
let unNumero = prompt("Ingrese otro numero");
let hastaQue = unNumero / 2;
for (let divisor = 1; divisor <= hastaQue; divisor++) {
  let resultado = unNumero % divisor;
  if (resultado == 0) {
    console.log(divisor);
  }
}
console.log(unNumero);

// 6. Dado un array de 10 elementos, realizar un programa que recorra ese array y
// muestre un mensaje por consola con cada uno de los elementos del array.

console.log("EJERCICIO 6");
let array = [2, 5, 7, 9, 15, 25, 30, 32, 37, 40];
for (let i = 0; i < array.length; i++) {
  console.log("Conte " + array[i] + " elefantes");
}
// 7. Dado un array de 10 numeros, realizar un programa que muestre por consola el
// doble de cada uno de los elementos.

console.log("EJERCICIO 7");
for (let i = 0; i < array.length; i++) {
  let result = array[i] * 2;
  console.log(result);
}

// 8. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
// objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
// que muestre un mensaje de presentacion por cada elemento del array.

console.log("Ejercicio 8");
let paula = {
  genero: "femenino",
  añoDeNacimiento: 1978,
  nombre: "Paula",
  apellido: "Perez",
};
let ana = {
  genero: "femenino",
  añoDeNacimiento: 1978,
  nombre: "Ana",
  apellido: "Perez",
};
let hugo = {
  genero: "masculino",
  añoDeNacimiento: 2007,
  nombre: "Hugo",
  apellido: "Perez",
};
let eze = {
  genero: "masculino",
  añoDeNacimiento: 1996,
  nombre: "Ezequiel",
  apellido: "Perez",
};
let luis = {
  genero: "masculino",
  añoDeNacimiento: 2010,
  nombre: "Luis",
  apellido: "Perez",
};

let grupoFamiliar = [paula, ana, eze, hugo, luis];

for (let i = 0; i < grupoFamiliar.length; i++) {
  let persona = grupoFamiliar[i];
  console.log(
    "Hola soy",
    persona.nombre,
    "nací en el año",
    persona.añoDeNacimiento,
    "mi apellido es",
    persona.apellido,
    "mi genero es",
    persona.genero
  );
}
// 9. Dado un array de 10 numeros, realizar un programa que recorra el array y solo
// muestre los numeros impares.
console.log("Ejercicio 9");
let arrayDeDiez = [7, 14, 25, 32, 45, 48, 57, 62, 78, 91];
for (let i = 0; i < arrayDeDiez.length; i++) {
  let numero = arrayDeDiez[i];
  let resto = numero % 2;
  if (resto != 0) {
    console.log(numero);
  }
}

// 10. Realizar un programa que permita la entrada de numeros y calcule la suma de los
// numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
// el usuario ingresa un 0.
console.log("Ejercicio 10");

let numeroIngresado1 = prompt("Ingrese un numero");
let numeroPares = 0;
let numerosImpares = 0;
while (numeroIngresado1 != 0) {
  let resto = numeroIngresado1 % 2;
  if (resto != 0) {
    numerosImpares = numerosImpares + parseInt(numeroIngresado1);
  } else {
    numeroPares = numeroPares + parseInt(numeroIngresado1);
  }
  numeroIngresado1 = prompt("Ingrese un numero");
}
console.log("la suma de los numeros impares dio", numerosImpares);
console.log("y la suma de los numeros pares es", numeroPares);

// 11. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
// numero mas grande.
console.log("Ejercicio 11");
let arreglo1 = [10, 23, 34, 65, 76, 1, 45, 23, 11];
let masGrande = arreglo1[0];
for (let i = 0; i < arreglo1.length; i++) {
  if (masGrande < arreglo1[i]) {
    masGrande = arreglo1[i];
  }
}
console.log("el mas grande es", masGrande);

// 12. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
// numero mas chico.
console.log("Ejercicio 12");
let arreglo2 = [10, 23, 34, 65, 76, 1, 45, 23, 11];
let masChico = arreglo2[0];

for (let i = 0; i < arreglo2.length; i++) {
  if (masChico > arreglo2[i]) {
    masChico = arreglo2[i];
  }
}
console.log("el mas chico es", masChico);

// 13. Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
// ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
// manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
// un empate. Caso contrario mostrar un mensaje con el nombre de la persona
// ganadora.
console.log("Ejercicio 13");
let jugador1 = prompt("Ingrese el nombre del jugador 1");
let jugador2 = prompt("Ingrese el nombre del jugador 2");
let mano1;
let mano2;
let gana1 = false;
let gana2 = false;

while (!gana1 && !gana2) {
  mano1 = prompt(jugador1 + " elija piedra, papel o tijera");
  mano2 = prompt(jugador2 + " elija piedra, papel o tijera");
  if (mano1 == mano2) {
    alert("Empate");
  } else if (
    (mano1 == "piedra" && mano2 == "tijera") ||
    (mano1 == "tijera" && mano2 == "papel") ||
    (mano1 == "papel" && mano2 == "piedra")
  ) {
    gana1 = true;
  }
  if (
    (mano2 == "piedra" && mano1 == "tijera") ||
    (mano2 == "tijera" && mano1 == "papel") ||
    (mano2 == "papel" && mano1 == "piedra")
  ) {
    gana2 = true;
  }
}

if (gana1) {
  alert("Gana " + jugador1);
}
if (gana2) {
  alert("Gana " + jugador2);
}

// 14. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado.
console.log("Ejercicio 14");
let asterisco = "*";
let triangulo = "";
for (let i = 0; i < 5; i++) {
  triangulo = triangulo + asterisco;
  console.log(triangulo);
}

// 15. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
// pero invertido.
console.log("Ejercicio 15");

let triangulo1 = "******";
for (let i = 0; i < 5; i++) {
  triangulo1 = triangulo1.slice(0, -1);
  console.log(triangulo1);
}

// 16. Dado un array de 10 numeros desordenados, realizar un programa que imprima por
// pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR)

let desordenado = [20, 9, 2, 5, 4, 7, 9, 10, 14, 3];
function ordenarSeleccion(array) {
  for (let i = 0; i < array.length; i++) {
    let menor = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[menor]) {
        menor = j;
      }
    }
    [array[i], array[menor]] = [array[menor], array[i]];
  }
  return array;
}

let ordenado = ordenarSeleccion(desordenado);
console.log("Array ordenado:", ordenado);
