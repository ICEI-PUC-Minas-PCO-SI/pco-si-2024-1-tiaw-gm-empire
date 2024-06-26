const comentarioTextArea = document.getElementById("comentario");
const enviarButton = document.querySelector("button[onclick='addComment()']");
const comentarioDiv = document.getElementById("comentario-do-usuario");
const usuarioDiv = document.getElementById('usuario');

// Verifica se existe um usuário logado
const user = sessionStorage.getItem('USER');
if (user) {
    
    comentarioTextArea.removeAttribute('disabled');
    enviarButton.removeAttribute('disabled');
} else {
    alert("Você precisa realizar o login antes de comentar! 🙃");

    comentarioTextArea.setAttribute('disabled', 'true');
    enviarButton.setAttribute('disabled', 'true');
}

// Função para adicionar comentário
// Função para adicionar comentário
function addComment() {

    const comentario = document.getElementById("comentario").value;

    if (nome.trim() === "" || comentario.trim() === "") {
        alert("Por favor, preencha todos os campos antes de enviar!");
        return;
    }

    const novoComentario = {
        nome: user.nome,
        comentario: comentario
    };

    // Enviar o novo comentário para o servidor
    enviarComentarioParaServidor(novoComentario);
}

// Função para enviar o novo comentário para o servidor
function enviarComentarioParaServidor(novoComentario) {
    fetch('https://json-server-one-phi.vercel.app/comentarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoComentario),
    })
    .then(response => {
        console.log(response);
        alert('Comentário registrado com sucesso 👍');    
        exibirComentarios(); 
        
    })
    .catch(error => {
        console.error('Erro ao enviar o comentário: 😕', error);
    });
}

// Função para exibir os comentários na página
function exibirComentarios() {
    debugger;
    fetch('https://json-server-one-phi.vercel.app/comentarios')
    .then(response => response.json())
    .then(comentarios => {
        comentarioDiv.innerHTML = ""; // Limpa qualquer conteúdo existente na div

        // Adicionando cada comentário à div
        comentarios.forEach(comentario => {
            const comentarioElement = document.createElement("p");
            comentarioElement.textContent = `${comentario.nome} ${comentario.comentario}`;
            comentarioDiv.appendChild(comentarioElement);
        });
    })
    .catch(error => {
        console.error('Erro ao obter os comentários:', error);
    });
}

// Evento de escuta para adicionar comentário ao pressionar Enter
document.getElementById("comentario").addEventListener("keypress", function (event) {
    if (event.key === 'Enter') {
        addComment();
    }
});

// Verificar se há usuário logado e exibir o nome ou botão de login
function usuarioLogado() {
    if (sessionStorage.getItem('USER')) {
        const user = JSON.parse(sessionStorage.getItem('USER'));
        usuarioDiv.innerHTML = `<span onclick="sair();">Olá ${user.nome}</span>`;
    } else {
        usuarioDiv.innerHTML = `<a href="../Login/login.html"><li><button>ENTRAR</button></li></a>`;
    }
}

// Função para sair da sessão
function sair() {
    if(confirm('Tem certeza que deseja sair?')) {
        sessionStorage.removeItem('USER');
        usuarioLogado();
    }
}

// Chamada inicial para exibir os comentários na página
exibirComentarios();
