
let notas = [];
let notaID = 0; 


function agregarNota() {
    const tituloA = document.getElementById('titulo');
    const descripcionA = document.getElementById('descripcion');
    const tituloIngresado = tituloA.value.trim();
    const descripcionIngresada = descripcionA.value.trim();

    if (tituloIngresado && descripcionIngresada) {
        const nuevaNota = {
            id: notas.length + 1, 
            titulo: tituloIngresado,
            descripcion: descripcionIngresada,
            realizada: false
        };

        notas.push(nuevaNota);
        tituloA.value = '';
        descripcionA.value = '';
        imprimirNotas(); 
    } else {
        alert("Ingrese título y descripción");
    }
}


function eliminarNota(id) {
    notas = notas.filter(nota => nota.id !== id);
    imprimirNotas(); 
}


function marcarRealizada(id) {
    let nota = notas.find(nota => nota.id === id);
    if (nota) {
        nota.realizada = !nota.realizada;
    }
    imprimirNotas();
}


function imprimirNotas() {
    let tarjeta = document.getElementById('tarjeta');
    tarjeta.innerHTML = '';

    let notasFiltradas = aplicarFiltrosInterno(notas);
    if (notasFiltradas.length === 0) {
        tarjeta.innerHTML = '<p>Está vacío</p>';
        return;
    }

    notasFiltradas.forEach(nota => {
        let div = document.createElement('div');
        div.classList.add('tarjeta-nota');
        div.innerHTML = `
            <input type="checkbox" onclick="marcarRealizada(${nota.id})" ${nota.realizada ? 'checked' : ''}>
            <strong>${nota.titulo}</strong>
            <p>${nota.descripcion}</p>
            <button onclick="eliminarNota(${nota.id})">Borrar Nota</button>
        `;
        tarjeta.appendChild(div);
    });
}

function aplicarFiltros() {
    imprimirNotas(); 
}

function aplicarFiltrosInterno(arrayNotas) {
    let textoFiltro = document.getElementById('filterText').value.toLowerCase();
    let mostrarRealizadas = document.getElementById('filterCompleted').checked;

    return arrayNotas.filter(nota => {
        let cumpleTexto = nota.titulo.toLowerCase().includes(textoFiltro) || nota.descripcion.toLowerCase().includes(textoFiltro);
        let cumpleRealizadas = !mostrarRealizadas || (mostrarRealizadas && nota.realizada);
        return cumpleTexto && cumpleRealizadas;
    });
}

function limpiarCampos() {
    document.getElementById('titulo').value = '';
    document.getElementById('descripcion').value = '';
}

imprimirNotas();
