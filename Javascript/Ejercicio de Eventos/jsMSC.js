function calcularIMC() {
    let nombre = document.getElementById('nombre').value;
    let altura = parseFloat(document.getElementById('altura').value) / 100;
    let peso = parseFloat(document.getElementById('peso').value);
    let imc = peso / (altura * altura);
    let clasificacion;

    if (imc < 18.5) {
        clasificacion = "Bajo peso";
    } else if (imc < 25) {
        clasificacion = "Peso normal";
    } else if (imc < 30) {
        clasificacion = "Sobrepeso";
    } else {
        clasificacion = "Obesidad";
    }

    let resultado = "Hola " + nombre + ", tu IMC es de " + imc.toFixed(2) + " y tu clasificación es " + clasificacion;
    document.getElementById('resultado').innerHTML = resultado;
}
