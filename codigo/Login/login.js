'use strict';

const buttonEntrar = document.getElementById('btn');
const inputLogin = document.getElementById('usuario');
const inputSenha = document.getElementById('senha');

const urlJSONServer = 'http://localhost:3000/';

buttonEntrar.addEventListener('click', function() {
    const user = inputLogin.value;
    const senha = inputSenha.value;

    if (user == '' || senha == '') {
        alert('Informe login e senha');
        return;
    }

    fetch(`${urlJSONServer}usuarios/${user}`).then(r => r.json()).then(
        response => {
            sessionStorage.setItem('USER', JSON.stringify(response));
            window.location.href = '../index.html';
        }
    )
})