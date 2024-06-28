'use strict';

const buttonEntrar = document.getElementById('btn');
const inputLogin = document.getElementById('usuario');
const inputSenha = document.getElementById('senha');

const urlJSONServer = 'https://json-server-one-phi.vercel.app/';

buttonEntrar.addEventListener('click', function() {
    const user = inputLogin.value;
    const senha = inputSenha.value;

    if (user == '' || senha == '') {
        Swal.fire({
            title: "Atenção!",
            text: "Você precisa informar o login e a senha!",
            icon: "warning"
          });
        return;
    }
    fetch(`${urlJSONServer}usuarios/${user}`)
    .then(r => r.json())
    .then(response => {
        if(user == response.nome && senha == response.senha){
            sessionStorage.setItem('USER', JSON.stringify(response));
            window.location.href = '../index.html';
        }
        else{
            Swal.fire({
                title: "Atenção!",
                text: "Usuário ou senha incorretos!",
                icon: "warning",
              });
        }
        }
    )
})