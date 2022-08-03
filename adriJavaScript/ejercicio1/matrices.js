/**

 */
//Variable globales *********
var matriz = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
];

//+++++++++++++++++++++++++++++++

window.onload = function () {
    document.getElementById('opciones').addEventListener('change', ejecutarOpcion);
};

function ejecutarOpcion() {
    let opcion = document.getElementById('opciones').value;
    switch (opcion) {
        case '1':
            mostrarMatriz();
            break;
        case '2':
            mostrarDiagonalPrincipal();
            break;
        case '3':
            mostrarDiagonalInversa();
            break;
        case '4':

            break;
        case '5':

            break;
        case '6':

            break;
        case '7':

            break;
        case '8':
            generarMatriz();
            console.log(matriz);
            break;
        default:
            break;
    }
}


function generarMatriz() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 0; c < matriz.length; c++) {
            matriz[f][c] = generalAleatorio(10, 100);
        }
    }
}


function mostrarMatriz(){
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 0; c < matriz.length; c++) {
            let ident = 'i-f'+f+'c'+c;
            console.log(ident);
            document.getElementById(ident).innerText= matriz[f][c];
            //mostrar matriz[f][c]
            
        }
        
    }
}

function mostrarDiagonalPrincipal() {
    for (let f = 0; f < matriz.length; f++) {
        //ensamblar el id "d-f3c3"
        let ident= 'd-f'+f+'c'+f;
        //mostrar en la caja correspondiente
        document.getElementById(ident).innerText = matriz[f][f];
    }

    function mostrarDiagonalInversa() {
        for (let f = 0; f < matriz.length; f++) {
            //ensamblar el id "d-f3c3"
            let ident= 'd-f'+f+'c'+f;
          
            document.getElementById(ident).innerText = matriz[f][4-f];
        }   

    
}


/**
 * Genera un número entero aleatrorio
 * entre min y max
 * @param {*} min valor minimo a generar
 * @param {*} max valor maximo a generar
 */
function generalAleatorio(min, max) {
    let numero = Math.round(Math.random() * (max - min)) + min;
    return numero;
}

//generarMatriz();

