const comentarioTextArea = document.getElementById("comentario");
const enviarButton = document.querySelector("button[onclick='addComment()']");
const comentarioDiv = document.getElementById("comentario-do-usuario");
const usuarioDiv = document.getElementById('usuario');

// Verifica se existe um usuário logado
const user = JSON.parse(sessionStorage.getItem('USER'));
if (user) {

    comentarioTextArea.removeAttribute('disabled');
    enviarButton.removeAttribute('disabled');
} else {
    alert("Você precisa realizar o login antes de comentar! 🙃");

    comentarioTextArea.setAttribute('disabled', 'true');
    enviarButton.setAttribute('disabled', 'true');
}


// Função para adicionar comentário
function addComment() {
    const comentario = comentarioTextArea.value;

    if (comentario.trim() === "") {
        alert("Por favor, preencha o campo de comentário antes de enviar!");
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
        if (!response.ok) {
            throw new Error('Erro ao enviar o comentário.');
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Apenas para depuração, pode ser removido
        alert('Comentário registrado com sucesso 👍');
        exibirComentarios(); // Atualiza a exibição dos comentários após adicionar um novo
    })
    .catch(error => {
        console.error('Erro ao enviar o comentário:', error);
        alert('Erro ao enviar o comentário. Por favor, tente novamente.');
    });
}

// Função para exibir os comentários na página
function exibirComentarios() {

    fetch('https://json-server-one-phi.vercel.app/comentarios')
    .then(response => response.json())
    .then(comentarios => {
        comentarioDiv.innerHTML = ""; // Limpa qualquer conteúdo existente na div

        // Adicionando cada comentário à div
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

// Evento de escuta para adicionar comentário ao pressionar Enter
comentarioTextArea.addEventListener("keypress", function (event) {
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
