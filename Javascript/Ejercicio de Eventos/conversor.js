function convertir() {
    let dolaresInput = document.getElementById('dolares').value;
    let pesosInput = document.getElementById('pesos').value;
    let tasaConversion = 1400; 

    if (dolaresInput) {
        let dolares = parseFloat(dolaresInput);
        let resultado = dolares * tasaConversion;
        document.getElementById('pesos').value = resultado.toFixed(2);
        document.getElementById('resultado').innerHTML = dolares + " USD = " + resultado.toFixed(2) + " Pesos Argentinos";
    } else if (pesosInput) {
        let pesos = parseFloat(pesosInput);
        let resultado = pesos / tasaConversion;
        document.getElementById('dolares').value = resultado.toFixed(2);
        document.getElementById('resultado').innerHTML = pesos + " Pesos Argentinos = " + resultado.toFixed(2) + " USD";
    }}