// Ejercicio 1 
let miNombre = "Alejandra"

console.log(miNombre)

// Ejercicio 2 
let miApellido = "Zacarias"

console.log(miApellido)

// Ejercicio 3
let miEdad= 27

console.log(miEdad)

// Ejercicio 4
let miMascota = "Cleopatra"

console.log(miMascota)

// Ejercicio 5
let edadMascota = 2

console.log(edadMascota)

// Ejercicio 6
console.log(miNombre+miApellido+miEdad+miMascota+edadMascota)

// Ejercicio 7
let nombreCompleto = miNombre+miApellido

console.log(nombreCompleto)

// Ejercicio 8
let textoPresentacion = "Mi nombre es Alejandra, naci en Buenos Aires Argentina, tengo 27 años, vivo con mi pareja y mis gatas. Mi hobbie es viajar con mi moto por el país y jugar con la computadora, hacer manualidades y escuchar musica"

console.log (textoPresentacion)

// Ejercicio 9 
let sumaEdades = miEdad + edadMascota

console.log(sumaEdades)

let restaEdades = miEdad - edadMascota

console.log ( miEdad - edadMascota)

let  divisionEdades = miEdad / edadMascota

console.log (divisionEdades)

// productoEdades 

// Ejercicio 11 
let alumno = {
    miNombre,
    miApellido,
    miEdad,
    miMascota,
    edadMascota
}

let alumnoA = { 
    nombre: "Alejandra",
    apellido: "Zacarias",
    edad: 27,
    mascota: "Cleo",
    nacionalidad: "Argentina",
}
console.table (alumnoA)
console.log(alumno.nombre); 
console.table(alumno)

// Ejercicio 12
let cleoMascota = { 
    nombre: "Cleopatra",
    apellido: "Zacarias",
    edad: 2,
    sobrenombre: "Cleo",
    nacionalidad: "Argentina",
    raza: "gatito cris con manchas"
}

console.table(cleoMascota)

// Prompt 

let seArrecho = prompt("mi novia se arrecho usted sabe xq?")

console.log(seArrecho)

alert("arrecha la muchacha")