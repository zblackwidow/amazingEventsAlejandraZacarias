
function convertir() {
    let cantidad = parseInt(document.getElementById('pesos').value, 10);
    let dolares = 1095;
    let resultado = cantidad / dolares;
    resultado = resultado.toFixed(2)
    document.getElementById('resultado').innerHTML = resultado
}
