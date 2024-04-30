
let carlos = {
    color: "blanquito",
    edad: 18,
    nacionalidad:"Argentino",
    gustos: "nenas",
    ejercicio: false,
}

console.log(carlos)


// agrego propiedad
carlos.alergias = "chocolate"
console.log (carlos)



// modifico propiedad
carlos.color = "bronceadito"
console.log(carlos)


// elimino la propiedad
delete carlos.gustos
console.log(carlos)

// METODOS 
// keys
//  muestra la variable en forma de array
let resultado = Object.keys(carlos);
console.log(resultado);
 
// values 
// muestra los valores dentro de la variable
let resultado2 = Object.values (carlos)
console.log(resultado2);

// assign
// asigna las propiedades de una variable a otra (o varias)
// carlitos es una variable vacia
let carlitos = {
}
let montoya ={
    contraseña: "millones",
    mail: "carlosmontoya@mail.com"
}
// vemos que esta vacia
console.log(carlitos);
// ahora le asignamos las propiedades que tiene carlos
let resultado3 = Object.assign (carlitos, carlos, montoya)
console.log(resultado3);
// (primero ponemos el nombre de la variable a la cual le queremos asignar las propiedades, después el nombre de cada variable en orden, si hay propiedades que son iguales va a tomar la ultima del orden)

