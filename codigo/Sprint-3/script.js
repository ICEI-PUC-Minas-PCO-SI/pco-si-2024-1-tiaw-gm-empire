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

//FIM DO CÓDIGO NOVO QUE ENGLOBA O LOCALSTORAGE E O BOTÃO ENTER, OBTENDO UMA APRESENTAÇÃO DE INFORMAÇÃO (AI)


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







/*const comentarios = [
    {
        "nome": "João:",
        "comentario": "Ótimo site! Gostei da navegação e da interação feita com o usuário."
    },
    {
        "nome": "Maria:",
        "comentario": "Gostei muito do site! Atendeu as minhas expectativas!!"
    },
    {
        "nome": "Daniel:",
        "comentario": "Site muito completo! Agora consigo me localizar quanto aos horários dos jogos que eu curto!!"
    },
    {
        "nome": "Luíza:",
        "comentario": "Site totalmente responsivo e adequado a qualquer tipo de tela! Sem contar no seu conteúdo, que era necessário para atender o público dos games!"
    }
];

// Função para carregar os comentários
function carregarComentarios() {
    // Recupera a div onde os comentários serão exibidos
    const comentarioDiv = document.getElementById("comentario-do-usuario");

    // Itera sobre os comentários no JSON
    for (const comment of comentarios) {
        // Cria um elemento de parágrafo para cada comentário
        const comentarioElement = document.createElement("p");
        comentarioElement.textContent = `${comment.nome} ${comment.comentario}`;

        // Adiciona o elemento de parágrafo à div de comentários
        comentarioDiv.appendChild(comentarioElement);
    }
}

// Chama a função para carregar os comentários assim que a página for carregada
window.onload = function () {
    carregarComentarios();
};*/