const nomeInput = document.getElementById("nome");
const comentarioTextArea = document.getElementById("comentario");
const enviarButton = document.querySelector("button[onclick='addComment()']");

// Verifica se existe um usuário logado
const user = sessionStorage.getItem('USER');
if (user) {
    nomeInput.removeAttribute('disabled');
    comentarioTextArea.removeAttribute('disabled');
    enviarButton.removeAttribute('disabled');
} else {
    alert("Você precisa realizar o login antes de comentar!");
    nomeInput.setAttribute('disabled', 'true');
    comentarioTextArea.setAttribute('disabled', 'true');
    enviarButton.setAttribute('disabled', 'true');
}

exibirComentarios(); // Chama a função para exibir os comentários já existentes

function addComment() {
    const nome = document.getElementById("nome").value;
    const comentario = document.getElementById("comentario").value;

    if (nome.trim() === "" || comentario.trim() === "") {
        alert("Por favor, preencha todos os campos antes de enviar.");
        return;
    }

    const novoComentario = {
        nome: nome,
        comentario: comentario
    };

    // Enviar o novo comentário para o servidor
    enviarComentarioParaServidor(novoComentario);
}

// Função para enviar o novo comentário para o servidor
function enviarComentarioParaServidor(novoComentario) {
    fetch('http://localhost:3000/comentarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoComentario),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Novo comentário enviado com sucesso!', data);
        exibirComentarios(); // Atualiza os comentários na página após enviar
    })
    .catch(error => {
        console.error('Erro ao enviar o comentário:', error);
    });
}

// Função para exibir os comentários na página (sem alterações necessárias para a nova abordagem)
function exibirComentarios() {
    const comentarioDiv = document.getElementById("comentario-do-usuario");
    comentarioDiv.innerHTML = ""; // Limpa qualquer conteúdo existente na div

// Obtendo comentários armazenados no localStorage
const comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

// Adicionando cada comentário à div
comentarios.forEach(comentario => {
    const comentarioElement = document.createElement("p");
    comentarioElement.textContent = `${comentario.nome}: ${comentario.comentario}`;
    comentarioDiv.appendChild(comentarioElement);
});
}

window.onload = exibirComentarios;

//Limpar o localStorage quando for preciso (NOVO)
//localStorage.clear();

   // usuário logado
   const usuarioDiv = document.getElementById('usuario');
   function usuarioLogado() {
       if (sessionStorage.getItem('USER')) {
           const user = JSON.parse(sessionStorage.getItem('USER'));
       
           usuarioDiv.innerHTML = `<span onclick="sair();">Olá ${user.nome}</span>`;
       } else {
           usuarioDiv.innerHTML = `<a href="../Login/login.html"><li><button>ENTRAR</button></li></a>`;
       }
   }
   
   usuarioLogado();
   
   function sair() {
       if(confirm('Tem certeza que deseja sair?')) {
           sessionStorage.removeItem('USER');
           
           usuarioLogado();
       }
   }
    fetch('http://localhost:3000/comentarios')
    .then(response => response.json())
    .then(comentarios => {
        comentarios.forEach(comentario => {
            const comentarioElement = document.createElement("p");
            comentarioElement.textContent = `${comentario.nome}: ${comentario.comentario}`;
            comentarioDiv.appendChild(comentarioElement);
        });
    })
    .catch(error => {
        console.error('Erro ao obter os comentários:', error);
    });
}

// Evento de escuta para adicionar comentário ao pressionar Enter (sem alterações necessárias para a nova abordagem)
document.getElementById("comentario").addEventListener("keypress", function (event) {
    if (event.key === 'Enter') {
        addComment();
    }
});