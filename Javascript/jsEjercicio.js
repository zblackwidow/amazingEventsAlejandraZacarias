let auto={
    marca:"BMW",
    color: "Blanco"
}

console.log(auto);

// AGREGAR 6 Propiedades 
auto.ejes = 4;
auto.puertas = 4;
auto.luces= 16,
auto.airbag= true;
auto.seguro= true;
auto.año=2019;

console.log(auto);

// Agregar 4 (cantidad de llantas, cantidad de asientos , si es 4x4 (buleano), si se vende el latam (buleano))

auto.cDeLlantas= 5;
auto.cDeAsientos= 4;
auto.todoTerreno= true;
auto.disponibleEnLatam= true;

console.log(auto);

// cambiar la marca
 auto.marca = "Nissan"

 console.log(auto);

// cambiar color

auto.color="Negro Mate"

console.log(auto);

// eliminen 2 propiedades

delete auto.cDeAsientos 
delete auto.cDeLlantas

console.log(auto);

// eliminen 4x4

delete auto.todoTerreno

console.log(auto);

// Array de todas las propiedades
let resultadoPropiedades = Object.keys(auto)

console.log(resultadoPropiedades);

// existen altura (Busca dentro de las propiedades si existe o  no)
let existeAltura = resultadoPropiedades.includes ("altura")

console.log(existeAltura);

// existe marca 
let existeMarca = resultadoPropiedades.includes ("marca")

console.log(existeMarca);
// array de todos los valores

let resultadoValores = Object.values(auto)

console.log(resultadoValores);

// existe el valor verde (busca dentro de los valores si existe o no)
let existeValorColor = resultadoValores.includes ("verde");

console.log(existeValorColor);
// existe el valor 2024
let existe2024 = resultadoValores.includes (2024);

console.log(existe2024);