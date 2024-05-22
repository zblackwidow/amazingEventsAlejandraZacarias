// array vacio donde almacena las
let nota = [];

function agregarNota() {
    let tituloIngresado = document.getElementById('titulO');
    let descripcionIngresada = document.getElementById('descripcion');
    let tituloDeLaNota = tituloIngresado.value;
    let descripcionDeLaNota = descripcionIngresada.value;

    if (tituloDeLaNota && descripcionDeLaNota) {
        nota.push({ titulo: tituloDeLaNota, descripcion: descripcionDeLaNota, completed: false });
        tituloIngresado.value = '';
        descripcionIngresada.value = '';
        imprimirNota();
    }
}

function limpiarCampos() {
    let tituloIngresado = document.getElementById('titulO');
    let descripcionIngresada = document.getElementById('descripcion');
    tituloIngresado.value = '';
    descripcionIngresada.value = '';
}
function checked(index) {
    if (nota[index].completed) {
        nota[index].completed = false;
    } else {
        nota[index].completed = true;
    }
    imprimirNota();
}

function eliminarNota(index) {
    nota.splice(index, 1);
    imprimirNota();
}

function imprimirNota() {
    let tarjeta = document.getElementById('tarjeta');
    tarjeta.innerHTML = '';

    nota.forEach((task, index) => {
        let li = document.createElement('li');
        li.classList.add('miClase');
        li.innerHTML = `
            <div>
                <input type="checkbox" id="task${index}" ${task.completed ? 'checked' : ''} onchange="checked(${index})">
                <label for="task${index}" class="${task.completed ? 'completed' : ''}">
                    <strong>${task.titulo}</strong><br>
                    ${task.descripcion}
                </label>
            </div>
            <button class="css-button-gradient--1" onclick="eliminarNota(${index})" >Eliminar</button>
        `;
        tarjeta.appendChild(li);
    });
}

imprimirNota();
