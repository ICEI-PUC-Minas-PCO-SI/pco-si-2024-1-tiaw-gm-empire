
function atualizar(){
    // card 1 - proximos jogos
        // campeonato
        document.querySelector("#local_1").innerHTML = teamsData.times_jogos.lol.campeonatos.cblol.times[0].proximo_jogo.local
        // data
        document.querySelector("#data_1").innerHTML = teamsData.times_jogos.lol.campeonatos.cblol.times[0].proximo_jogo.data
        // time 1
        for(let i = 0; i < 2; i++){
            document.querySelector(`#imagem_time_${i + 1}`).src = teamsData.times_jogos.lol.campeonatos.cblol.times[0].proximo_jogo.times[i].logo
        }
        document.querySelector("#campeonato1").innerHTML = teamsData.times_jogos.lol.campeonatos.cblol.times[0].campeonato	
    // card 2
        document.querySelector("#local_2").innerHTML = teamsData.times_jogos.valorant.campeonatos.valorant_champions.times[0].proximo_jogo.local
        document.querySelector("#data_2").innerHTML = teamsData.times_jogos.valorant.campeonatos.valorant_champions.times[0].proximo_jogo.data
        document.querySelector(`#imagem_time_3`).src = teamsData.times_jogos.valorant.campeonatos.valorant_champions.times[0].proximo_jogo.times[0].logo
        document.querySelector(`#imagem_time_4`).src = teamsData.times_jogos.valorant.campeonatos.valorant_champions.times[0].proximo_jogo.times[1].logo
        document.querySelector(`#campeonato2`).innerHTML = teamsData.times_jogos.valorant.campeonatos.valorant_champions.times[0].campeonato

    // card 3 - ultimos jogos
        // campeonato
        document.querySelector("#local_3").innerHTML = teamsData.times_jogos.lol.campeonatos.Lec.times[0].ultimo_jogo.local
        // data
        document.querySelector("#data_3").innerHTML = teamsData.times_jogos.lol.campeonatos.Lec.times[0].ultimo_jogo.data
        // time 1
        document.querySelector("#imagem_time_5").src = teamsData.times_jogos.lol.campeonatos.Lec.times[0].ultimo_jogo.times[0].logo
        // time 2
        document.querySelector("#imagem_time_6").src = teamsData.times_jogos.lol.campeonatos.Lec.times[0].ultimo_jogo.times[1].logo
        // placar 1
        document.querySelector("#placar_1").innerHTML = teamsData.times_jogos.lol.campeonatos.Lec.times[0].ultimo_jogo.times[0].placar
        // placar 2
        document.querySelector("#placar_2").innerHTML = teamsData.times_jogos.lol.campeonatos.Lec.times[0].ultimo_jogo.times[1].placar
        document.querySelector("#campeonato3").innerHTML = teamsData.times_jogos.lol.campeonatos.Lec.times[0].campeonato

    // card 4
        document.querySelector("#local_4").innerHTML = teamsData.times_jogos.valorant.campeonatos.valorant_challengers.times[0].ultimo_jogo.local
        // data
        document.querySelector("#data_4").innerHTML = teamsData.times_jogos.valorant.campeonatos.valorant_challengers.times[0].ultimo_jogo.data
        // time 1
        document.querySelector("#imagem_time_7").src = teamsData.times_jogos.valorant.campeonatos.valorant_challengers.times[0].ultimo_jogo.times[0].logo
        // time 2
        document.querySelector("#imagem_time_8").src = teamsData.times_jogos.valorant.campeonatos.valorant_challengers.times[0].ultimo_jogo.times[1].logo
        // placar 1
        document.querySelector("#placar_3").innerHTML = teamsData.times_jogos.valorant.campeonatos.valorant_challengers.times[0].ultimo_jogo.times[0].placar
        // placar 2
        document.querySelector("#placar_4").innerHTML = teamsData.times_jogos.valorant.campeonatos.valorant_challengers.times[0].ultimo_jogo.times[1].placar
        document.querySelector("#campeonato4").innerHTML = teamsData.times_jogos.valorant.campeonatos.valorant_challengers.times[0].campeonato

     
}

function carrosel_direita() {
    document.querySelector('.lol_proximos').style.display = 'none';
    document.querySelector('.valorant_proximos').style.display = 'none';
    document.querySelector('.cs_proximos').style.display = 'block';
    document.querySelector('.r6_proximos').style.display = 'block';
}

function carrosel_esquerda() {
    document.querySelector('.lol_proximos').style.display = 'block';
    document.querySelector('.valorant_proximos').style.display = 'block';
    document.querySelector('.cs_proximos').style.display = 'none';
    document.querySelector('.r6_proximos').style.display = 'none';
}


function ultimosJogos_carrosel_direita() {
    document.querySelector('.lol_ultimos').style.display = 'none';
    document.querySelector('.valorant_ultimos').style.display = 'none';
    document.querySelector('.cs_ultimos').style.display = 'block';
    document.querySelector('.r6_ultimos').style.display = 'block';
}

function ultimosJogos_carrosel_esquerda() {
    document.querySelector('.lol_ultimos').style.display = 'block';
    document.querySelector('.valorant_ultimos').style.display = 'block';
    document.querySelector('.cs_ultimos').style.display = 'none';
    document.querySelector('.r6_ultimos').style.display = 'none';
}
let news;
const containerNoticias = document.querySelector('.noticias_container');
fetch("db.json")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        // Array de notícias
        news = data.noticias;

        // Cria card html para as notícias
        news.forEach(n => {
            containerNoticias.insertAdjacentHTML('beforeend',
              `<a href="Noticias/noticias.html" onclick="setNoticia(${n.id});">
                    <div class="card_noticia">
                        <img src="${n.imagem}" alt="${n.titulo}">
                        <div class="conteudo_noticia">
                            <h6>${n.jogo}</h6>
                            <h3>${n.titulo}</h3>
                            <p>${n.conteudo_breve}</p>
                            <p>${n.data}</p>
                        </div>
                    </div>
                </a>`
            );
        });
    });

function setNoticia(noticiaId) {
    debugger;
    console.log(news)
    const noticia = JSON.stringify(news.find(n => n.id == noticiaId));
    localStorage.setItem('noticia', noticia);
}

document.addEventListener('DOMContentLoaded', () => {
    const championship_cblol = teamsData.times_jogos.lol.campeonatos.cblol;
    const images_lol_cblol = document.querySelectorAll('.img_lol_cblol');
    const championship_champions = teamsData.times_jogos.valorant.campeonatos.valorant_champions;
    const imagens_valorant_champions = document.querySelectorAll(".img_valorant_champions")
    const championship_challengers = teamsData.times_jogos.valorant.campeonatos.valorant_challengers;
    const imagens_valorant_challengers = document.querySelectorAll(".img_valorant_challengers")
    const championship_Lec = teamsData.times_jogos.lol.campeonatos.Lec
    const imagens_lol_Lec = document.querySelectorAll(".img_lol_Lec")

    images_lol_cblol.forEach(img => {
        const teamName = img.getAttribute('data-nome');
        const team = championship_cblol.times.find(team => team.nome === teamName);
        if (team) {
            img.src = team.logo;
            img.alt = team.nome;
            img.addEventListener('click', () => {
                localStorage.setItem('selectedTeam', JSON.stringify(team));
                window.location.href = 'times/time.html';
            });
        }
    });

    imagens_valorant_champions.forEach(img => {
        const teamName = img.getAttribute('data-nome');
        const team = championship_champions.times.find(team => team.nome === teamName);
        if (team) {
            img.src = team.logo;
            img.alt = team.nome;
            img.addEventListener('click', () => {
                localStorage.setItem('selectedTeam', JSON.stringify(team));
                window.location.href = 'times/time.html';
            });
        }
    });

    imagens_valorant_challengers.forEach(img => {
        const teamName = img.getAttribute('data-nome');
        const team = championship_challengers.times.find(team => team.nome === teamName);
        if (team) {
            img.src = team.logo;
            img.alt = team.nome;
            img.addEventListener('click', () => {
                localStorage.setItem('selectedTeam', JSON.stringify(team));
                window.location.href = 'times/time.html';
            });
        }
    });

    imagens_lol_Lec.forEach(img =>{
        const teamName = img.getAttribute('data-nome');
        const team = championship_Lec.times.find(team => team.nome === teamName);
        if (team) {
            img.src = team.logo;
            img.alt = team.nome;
            img.addEventListener('click', () => {
                localStorage.setItem('selectedTeam', JSON.stringify(team));
                window.location.href = 'times/time.html';
            });
        }
    })
    
});

   // usuário logado
   const usuarioDiv = document.getElementById('usuario');
   function usuarioLogado() {
       if (sessionStorage.getItem('USER')) {
           const user = JSON.parse(sessionStorage.getItem('USER'));
       
           usuarioDiv.innerHTML = `<span onclick="sair();">Olá ${user.nome}</span>`;
       } else {
           usuarioDiv.innerHTML = `<a href="Login/login.html"><li><button>ENTRAR</button></li></a>`;
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
       fetch('times.json')
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
               console.log(timesTodos)
   
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
                               window.location.href = "times/time.html";
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