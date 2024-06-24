'use strict';

const buttonCadastrar = document.getElementById('btn');
const inputMail = document.getElementById('inputEmail');
const inputUser = document.getElementById('inputUser');
const inputPass = document.getElementById('inputPass');

buttonCadastrar.addEventListener('click', function(e) {
    e.preventDefault();

    if (inputUser.value == '') {
        alert('Informe o usuário');
        inputUser.focus();
        return;
    }

    if (inputMail.value == '') {
        alert('Informe o email');
        inputMail.focus();
        return;
    }

    if (inputPass.value == '') {
        alert('Informe o usuário');
        inputPass.focus();
        return;
    }

    const newUser = {
        "id": inputUser.value,
		"senha": inputPass.value,
		"nome": inputUser.value,
        "login": inputUser.value,
		"email": inputMail.value
	}
    
    console.log(newUser);

    const options = {
        method: "POST",
        headers: { 
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(newUser)
    }

    console.log(options);
    fetch('https://json-server-one-phi.vercel.app/usuarios/', options).then(res => {
        if (res.ok) {
            alert('Usuário criado');
        }
        console.log(res);
        res.json();
    })
});

function limparForm() {
    inputUser.value = '';
    inputPass.value = '';
    inputMail.value = ''
}