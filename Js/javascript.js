const resultado = document.querySelector('.result');
const confirmar = document.querySelector('.igual');


function insert (valor){
    resultado.innerHTML += valor;
}

function clean(){
    document.getElementById('resultado').innerHTML ="";
}

function backspace() {
    if (resultado.textContent){
        let result = document.getElementById('resultado').innerHTML
        resultado.innerHTML = result.substring(0, result.length -1);

    }
}

function confirma() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }

}