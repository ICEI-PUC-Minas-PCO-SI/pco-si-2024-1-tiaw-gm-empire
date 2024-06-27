const nomeInput = document.getElementById("nome");
const comentarioTextArea = document.getElementById("comentario");
const enviarButton = document.querySelector("button[onclick='addComment()']");
const comentarioDiv = document.getElementById("comentario-do-usuario");
const usuarioDiv = document.getElementById('usuario');
// Verifica se existe um usuário logado
const user = sessionStorage.getItem('USER');
const userObjeto = JSON.parse(user)
if (user) {
    comentarioTextArea.removeAttribute('disabled');
    enviarButton.removeAttribute('disabled');
} else {
    Swal.fire({
        title: "Atenção!",
        text: "Você precisa realizar o login antes de comentar! 🙃",
        icon: "warning"
      });
    exibirComentarios()
    nomeInput.setAttribute('disabled', 'true');
    comentarioTextArea.setAttribute('disabled', 'true');
    enviarButton.setAttribute('disabled', 'true');
}

// Função para adicionar comentário
function addComment() {
    const comentario = document.getElementById("comentario").value;

    if (comentario.trim() === "") {
        alert("Por favor, preencha todos os campos antes de enviar.");
        return;
    }

    const novoComentario = {
        nome: userObjeto.nome,
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
        debugger
        console.log(novoComentario)
        console.log(response);
        Swal.fire({
            title: "Registrado!",
            text: "Comentário registrado com sucesso 👍",
            icon: "success"
          });
        exibirComentarios(); 
        comentarioTextArea.innerHTML = ''
        
    })
    .catch(error => {
        console.error('Erro ao enviar o comentário:', error);
    });
}

// Função para exibir os comentários na página
function exibirComentarios() {
    fetch('https://json-server-one-phi.vercel.app/comentarios')
    .then(response => response.json())
    .then(comentarios => {
        comentarioDiv.value = ""; // Limpa qualquer conteúdo existente na div

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
document.getElementById("comentario").addEventListener("keypress", function (event) {
    if (event.key === 'Enter') {
        addComment();
    }
});


// Chamada inicial para exibir os comentários na página
exibirComentarios();

function usuarioLogado() {
    if (sessionStorage.getItem('USER')) {
        const user = JSON.parse(sessionStorage.getItem('USER'));
        usuarioDiv.innerHTML = `<span onclick="sair();">Olá ${user.nome}</span>`;
    } else {
        usuarioDiv.innerHTML = `<a href="../Login/login.html"><li><button>ENTRAR</button></li></a>`;
    }
}

usuarioLogado()
// Função para sair da sessão
function sair() {

    Swal.fire({
        title: "Deseja sair?",
        text: "Deseja sair da sua conta?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Saiu!",
            text: "Você saiu da sua conta!.",
            icon: "success"
          });
          sessionStorage.removeItem('USER');
          usuarioLogado();
        }
      });
   }


const searchInput = document.getElementById('searchInput');
    const suggestions = document.getElementById('suggestions');
    const icone_busca = document.querySelector("#icon_busca")

    icone_busca.addEventListener('click', async () => {
        fetch('../times.json').then(r => r.json()).then(
            response => {
                const timesCs = response.times_jogos.cs.campeonatos.BPFG.times;
                const timesLol = response.times_jogos.lol.campeonatos.cblol.times;
                const timesLol2 = response.times_jogos.lol.campeonatos.Lec.times;
                const timesValorant = response.times_jogos.valorant.campeonatos.valorant_challengers.times;
                const timesValorant2 = response.times_jogos.valorant.campeonatos.valorant_champions.times;
                const timesTodos = timesCs.concat(timesLol).concat(timesLol2).concat(timesValorant).concat(timesValorant2);
                const teamName = searchInput.value
                const team = timesTodos.find(team => team.nome === teamName);
                if (team) {
                    localStorage.setItem('selectedTeam', JSON.stringify(team));
                    window.location.href = "../times/time.html"
                }
            }
        )
    })