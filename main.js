const form = document.getElementById('formCampos');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const campoA = document.getElementById('campoA');
    const campoB = document.getElementById('campoB');
    const success = `O Número ${campoB.value} é <b>Maior</b> que ${campoA.value}`;
    const error = `O Número ${campoB.value} é <b>Menor</b> que ${campoA.value}`;
    const draw = `Ambos os Números (${campoA.value} e ${campoB.value}) são Iguais`;

    if(campoA.value < campoB.value){
        const mensagemSucesso = document.querySelector('.Message');
        mensagemSucesso.innerHTML = success;
        mensagemSucesso.style.display='block';
        mensagemSucesso.style.backgroundColor='green';
        campoA.value = '';
        campoB.value = '';
    }else if (campoA.value == campoB.value){
        const mensagemDraw = document.querySelector('.Message');
        mensagemDraw.innerHTML = draw;
        mensagemDraw.style.display='block';
        mensagemDraw.style.backgroundColor='red';
        campoA.value = '';
        campoB.value = '';
    } 
    else {
        const mensagemErro = document.querySelector('.Message');
        mensagemErro.innerHTML = error;
        mensagemErro.style.display='block';
        mensagemErro.style.backgroundColor='red';
        campoA.value = '';
        campoB.value = '';
    }
})

console.log(form)