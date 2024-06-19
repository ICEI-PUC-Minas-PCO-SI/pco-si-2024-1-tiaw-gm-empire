// Verifica se o usuário está logado ao carregar a página

    const nomeInput = document.getElementById("nome");
    const comentarioTextArea = document.getElementById("comentario");
    const enviarButton = document.querySelector("button[onclick='addComment()']");

// Verifica se existe um usuário logado
const user = sessionStorage.getItem('USER'); // 'USER' em letras minúsculas aqui
if (user) { // 'user' em letras minúsculas aqui
    // Usuário está logado, habilita os campos e o botão
    nomeInput.removeAttribute('disabled');
    comentarioTextArea.removeAttribute('disabled');
    enviarButton.removeAttribute('disabled');
} else {
    // Usuário não está logado, desabilita os campos e o botão e muda o placeholder
    alert("Você precisa realizar o login antes de comentar!")
    nomeInput.setAttribute('disabled', 'true');
    comentarioTextArea.setAttribute('disabled', 'true');
    enviarButton.setAttribute('disabled', 'true');
}

    exibirComentarios(); // Chama a função para exibir os comentários já existentes



function addComment() {

    //Declarando as variáveis "nome" e "comentario"
    const nome = document.getElementById("nome").value;
    const comentario = document.getElementById("comentario").value;

    //Validação da entrada do usuário
    if (nome.trim() === "" || comentario.trim() === "") {
        alert("Por favor, preencha todos os campos antes de enviar.");
        return;
    }

    //LOCALSTORAGE - INÍCIO DO NOVO CÓDIGO 

    // Criando objeto com o novo comentário
    const novoComentario = {
        nome: nome,
        comentario: comentario
    };

    // Obtendo comentários do localStorage ou inicializando um array vazio
    let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

    // Adicionando o novo comentário ao array
    comentarios.push(novoComentario);

    // Armazenando os comentários atualizados no localStorage
    localStorage.setItem("comentarios", JSON.stringify(comentarios));

    // Limpando os campos de entrada
    document.getElementById("nome").value = "";
    document.getElementById("comentario").value = "";

    // Exibindo os comentários na página
    exibirComentarios();
}

//Botão Enter - evento de escuta (NOVO CÓDIGO)
document.getElementById("comentario").addEventListener("keypress", function (event) {
    if (event.key === 'Enter') {
        addComment();
    }
});

// Função para exibir os comentários na página
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