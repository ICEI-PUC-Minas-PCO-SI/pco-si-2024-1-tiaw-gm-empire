
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
   const icone_busca = document.querySelector("#icon_busca");
   
   const handleSearch = async () => {
       fetch('../times.json')
           .then(response => response.json())
           .then(data => {
               const timesTodos = [];
   
               // Coletando todos os times de todos os jogos
               Object.values(data.times_jogos).forEach(jogo => {
                   Object.values(jogo.campeonatos).forEach(campeonato => {
                       timesTodos.push(...campeonato.times.map(time => ({
                           ...time,
                           jogo: jogo.nome // Adicionando o nome do jogo ao objeto do time
                       })));
                   });
               });
   
               const searchValue = searchInput.value.trim().toLowerCase();
               suggestions.innerHTML = ''; // Limpa sugestões anteriores
   
               if (searchValue.length >= 1) {
                   const filteredTeams = timesTodos.filter(team => {
                       const teamName = team.nome.toLowerCase();
                       return teamName.includes(searchValue);
                   });
   
                   if (filteredTeams.length > 0) {
                       filteredTeams.slice(0, 5).forEach(team => {
                           const suggestionItem = document.createElement('div');
                           suggestionItem.classList.add('suggestion');
   
                           // Criando o conteúdo da sugestão com nome do time e ícone do jogo
                           suggestionItem.innerHTML = `
                                <img src="${team.logo}" width="45px" height="31px" id="time" alt="${team.jogo}" class="game-icon">
                                <span id="nome">${team.nome}</span>
                                <img src="${team.game}" width="45px" height="31px" id="jogo" alt="${team.game}" class="game-icon">
                           `;
   
                           suggestionItem.addEventListener('click', () => {
                               searchInput.value = team.nome; // Preenche o input com o termo sugerido
                               localStorage.setItem('selectedTeam', JSON.stringify(team));
                               window.location.href = "../times/time.html";
                           });
                           suggestions.appendChild(suggestionItem);
                       });
                       suggestions.style.display = 'block'; // Mostra as sugestões
                   } else {
                       suggestions.style.display = 'none'; // Esconde as sugestões se não houver resultados
                   }
               } else {
                   suggestions.style.display = 'none'; // Esconde as sugestões se o termo for muito curto
               }
           })
           .catch(error => {
               console.error('Erro ao carregar dados:', error);
           });
   };
   
   icone_busca.addEventListener('click', handleSearch);
   
   searchInput.addEventListener('input', () => {
       handleSearch();
   });
   
   searchInput.addEventListener('keydown', (event) => {
       if (event.key === 'Enter') {
           handleSearch();
       }
   });
   
   document.addEventListener('click', (event) => {
       if (!document.getElementById('searchContainer').contains(event.target)) {
           suggestions.style.display = 'none'; // Esconde as sugestões quando clicar fora do container
       }
   });
   
   document.addEventListener('DOMContentLoaded', () => {
       handleSearch();
   });