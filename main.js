const form = document.getElementById('formCampos');
let formValido = false;

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const campoA = document.getElementById('campoA').value;
    const campoB = document.getElementById('campoB').value;
    const success = `O Número ${campoB} é <b>Maior</b> que ${campoA}`;
    const error = `O Número ${campoB} é <b>Menor</b> que ${campoA}`;
    const draw = `Ambos os Números (${campoA} e ${campoB}) são Iguais`;

    if(campoA < campoB){
        const mensagemSucesso = document.querySelector('.Message');
        // document.querySelector('.successMessage').style.display='block'
        mensagemSucesso.innerHTML = success;
        mensagemSucesso.style.display='block';
        campoA = '';
        campoB = '';
    }else if (campoA == campoB){
        const mensagemDraw = document.querySelector('.Message');
        mensagemDraw.innerHTML = draw;
        mensagemDraw.style.display='block';
        mensagemDraw.style.backgroundColor='red';
        campoA = '';
        campoB = '';
    } else {
        // document.querySelector('.errorMessage').style.display='block'
        const mensagemErro = document.querySelector('.Message');
        mensagemErro.innerHTML = error;
        mensagemErro.style.display='block';
        mensagemErro.style.backgroundColor='red';
        campoA = '';
        campoB = '';
    }
})