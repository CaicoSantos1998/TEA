const { text } = require("express");

function verificarOutros() {
    const radios = document.getElementsByName("sexo");
    const inputOutros = document.getElementById('outroSexos');

    let selecionado = "";
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selecionado = radios[i].value;
            break;
        }
    }


    if (selecionado === "outroSexo") {
        inputOutros.disabled = false;
        inputOutros.focus();
    } else {
        inputOutros.value = "";
        inputOutros.disabled = true;
    }
}

function verificarEsgoto() {
    const esgoto = document.querySelector('input[name="temEsgotoAi"]:checked').value;
    const naoTemEsgoto = document.getElementById('opcoes');

    naoTemEsgoto.innerHTML = '<option value="" disabled selected>Selecione uma opção</option>';

    if (esgoto === 'Sim') {
        const option = document.createElement('option');
        option.value = 'NoSistemaDeEsgoto';
        option.text = 'No Sistema de esgoto';
        naoTemEsgoto.appendChild(option);
    } else if (esgoto === 'Nao') {
        const opcaoNao = [
            { value: 'NoMar', text:'No Mar'},
            { value: 'CeuAberto', text:'Ceu Aberto'},
            { value: 'NoMangue', text: 'No Mangue'}
        ];
        opcaoNao.forEach((opt) => {
            const option = document.createElement('option');
            option.value = opt.value;
            option.text = opt.text;
            naoTemEsgoto.appendChild(option);
        })
    }
}

const tellInput = document.getElementById('telefone');
tellInput.addEventListener('input', () => {
    let tel = tellInput.value.replace(/\D/g, '');

    if (tellInput > 11) tel = tel.slice(0, 11);

    if (tellInput.length >= 2 && tellInput.length <=6) {
        tel = `(${tel.slice(0,2)}) ${tel.slice(2)}`;
    } else if (tel.length > 6) {
        tel = `(${tel.slice(0,2)}) ${tel.slice(2, 7)}-${tel.slice(7)}`;
    }

    tellInput.value = tel;
})