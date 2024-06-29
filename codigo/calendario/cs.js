document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    const prevMonth = document.getElementById("prevMonth");
    const nextMonth = document.getElementById("nextMonth");
    const tbody = document.getElementById("dias");

    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
            mesAnterior();
        } else if (event.key === "ArrowRight") {
            proximoMes();
        }
    });



const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let dataAtual = new Date();
let mesAtual = dataAtual.getMonth();
let anoAtual = dataAtual.getFullYear();

// Função para criar os dias do mês
function criarDias() {
    tbody.innerHTML = "";

    // Dias do mês
    const diasNoMes = new Date(anoAtual, mesAtual + 1, 0).getDate();

    // Dia da semana do primeiro dia do mês
    const primeiroDiaSemana = new Date(anoAtual, mesAtual, 1).getDay();

    // Dias do mês anterior
    const diasNoMesAnterior = new Date(anoAtual, mesAtual, 0).getDate();

    let dia = 1;
    for (let i = 0; i < 6; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            let td = document.createElement("td");

            // Dias do mês anterior
            if (i === 0 && j < primeiroDiaSemana) {
                td.textContent = diasNoMesAnterior - primeiroDiaSemana + j + 1;
                td.classList.add("mes-anterior");
            }
            // Dias do mês atual
            else if (dia <= diasNoMes) {
                td.textContent = dia;
                dia++;



                // Adicionar lembretes no dia 19
                if (dia === 17 && mesAtual === dataAtual.getMonth() && anoAtual === dataAtual.getFullYear()) {
                    const lembretes = ["Titans vs. Falcons"];
                    lembretes.forEach(function (lembreteText) {
                        const lembrete = document.createElement("a");
                        lembrete.textContent = lembreteText;
                        lembrete.classList.add("lembrete");
                        lembrete.href = "https://www.ubisoft.com/pt-br/esports/rainbow-six/siege/calendar/2024-05";
                        lembrete.target = "_blank"; // Para abrir em uma nova aba
                        td.appendChild(lembrete);
                        td.appendChild(document.createElement("br"));
                    });
                }
                if (dia === 18 && mesAtual === dataAtual.getMonth() && anoAtual === dataAtual.getFullYear()) {
                    const lembretes = ["Dragons vs. Griffins"];
                    lembretes.forEach(function (lembreteText) {
                        const lembrete = document.createElement("a");
                        lembrete.textContent = lembreteText;
                        lembrete.classList.add("lembrete");
                        lembrete.href = "https://www.ubisoft.com/pt-br/esports/rainbow-six/siege/calendar/2024-05"; // Altere para o link desejado
                        lembrete.target = "_blank"; // Para abrir em uma nova aba
                        td.appendChild(lembrete);
                        td.appendChild(document.createElement("br"));
                    });
                }
                if (dia === 20 && mesAtual === dataAtual.getMonth() && anoAtual === dataAtual.getFullYear()) {
                    const lembretes = ["Lions vs. Bears"];
                    lembretes.forEach(function (lembreteText) {
                        const lembrete = document.createElement("a");
                        lembrete.textContent = lembreteText;
                        lembrete.classList.add("lembrete");
                        lembrete.href = "https://www.ubisoft.com/pt-br/esports/rainbow-six/siege/calendar/2024-05"; 
                        lembrete.target = "_blank"; // Para abrir em uma nova aba
                        td.appendChild(lembrete);
                        td.appendChild(document.createElement("br"));
                    });
                }
                if (dia === 21 && mesAtual === dataAtual.getMonth() && anoAtual === dataAtual.getFullYear()) {
                    const lembretes = ["Eagles vs. Hawks"];
                    lembretes.forEach(function (lembreteText) {
                        const lembrete = document.createElement("a");
                        lembrete.textContent = lembreteText;
                        lembrete.classList.add("lembrete");
                        lembrete.href = "https://www.ubisoft.com/pt-br/esports/rainbow-six/siege/calendar/2024-05";
                        lembrete.target = "_blank"; // Para abrir em uma nova aba
                        td.appendChild(lembrete);
                        td.appendChild(document.createElement("br"));
                    });
                }
                if (dia === 22 && mesAtual === dataAtual.getMonth() && anoAtual === dataAtual.getFullYear()) {
                    const lembretes = ["Tigers vs. Panthers"];
                    lembretes.forEach(function (lembreteText) {
                        const lembrete = document.createElement("a");
                        lembrete.textContent = lembreteText;
                        lembrete.classList.add("lembrete");
                        lembrete.href = "https://www.ubisoft.com/pt-br/esports/rainbow-six/siege/calendar/2024-05";
                        lembrete.target = "_blank"; // Para abrir em uma nova aba
                        td.appendChild(lembrete);
                        td.appendChild(document.createElement("br"));
                    });
                }
                if (dia === 23 && mesAtual === dataAtual.getMonth() && anoAtual === dataAtual.getFullYear()) {
                    const lembretes = ["Wolves vs. Coyotes"];
                    lembretes.forEach(function (lembreteText) {
                        const lembrete = document.createElement("a");
                        lembrete.textContent = lembreteText;
                        lembrete.classList.add("lembrete");
                        lembrete.href = "https://www.ubisoft.com/pt-br/esports/rainbow-six/siege/calendar/2024-05";
                        lembrete.target = "_blank"; // Para abrir em uma nova aba
                        td.appendChild(lembrete);
                        td.appendChild(document.createElement("br"));
                    });
                }
                if (dia === 25 && mesAtual === dataAtual.getMonth() && anoAtual === dataAtual.getFullYear()) {
                    const lembretes = ["Sharks vs. Marlins"];
                    lembretes.forEach(function (lembreteText) {
                        const lembrete = document.createElement("a");
                        lembrete.textContent = lembreteText;
                        lembrete.classList.add("lembrete");
                        lembrete.href = "https://www.ubisoft.com/pt-br/esports/rainbow-six/siege/calendar/2024-05"; 
                        lembrete.target = "_blank"; // Para abrir em uma nova aba
                        td.appendChild(lembrete);
                        td.appendChild(document.createElement("br"));
                    });
                }
                if (dia === 26 && mesAtual === dataAtual.getMonth() && anoAtual === dataAtual.getFullYear()) {
                    const lembretes = ["Raptors vs. Pterodactyls"];
                    lembretes.forEach(function (lembreteText) {
                        const lembrete = document.createElement("a");
                        lembrete.textContent = lembreteText;
                        lembrete.classList.add("lembrete");
                        lembrete.href = "https://www.ubisoft.com/pt-br/esports/rainbow-six/siege/calendar/2024-05"; 
                        lembrete.target = "_blank"; // Para abrir em uma nova aba
                        td.appendChild(lembrete);
                        td.appendChild(document.createElement("br"));
                    });
                }
                if (dia === 27 && mesAtual === dataAtual.getMonth() && anoAtual === dataAtual.getFullYear()) {
                    const lembretes = ["Phoenix vs. Thunderbirds"];
                    lembretes.forEach(function (lembreteText) {
                        const lembrete = document.createElement("a");
                        lembrete.textContent = lembreteText;
                        lembrete.classList.add("lembrete");
                        lembrete.href = "https://www.ubisoft.com/pt-br/esports/rainbow-six/siege/calendar/2024-05";
                        lembrete.target = "_blank"; // Para abrir em uma nova aba
                        td.appendChild(lembrete);
                        td.appendChild(document.createElement("br"));
                    });
                }
            }
            // Dias do próximo mês
            else {
                td.textContent = dia - diasNoMes;
                td.classList.add("prox-mes");
                dia++;
            }

            tr.appendChild(td);
        }
        tbody.appendChild(tr);
        if (dia > diasNoMes && tr.children[6].classList.contains("prox-mes")) break;
    }
}

// Atualiza o cabeçalho do mês
function atualizarMes() {
    header.textContent = meses[mesAtual] + " " + anoAtual;
}

// Função para mudar para o próximo mês
function proximoMes() {
    mesAtual++;
    if (mesAtual > 11) {
        mesAtual = 0;
        anoAtual++;
    }
    localStorage.setItem("mesAtual", mesAtual); // Salva o mês atual no localStorage
    atualizarMes();
    criarDias();
}

// Função para mudar para o mês anterior
function mesAnterior() {
    mesAtual--;
    if (mesAtual < 0) {
        mesAtual = 11;
        anoAtual--;
    }
    localStorage.setItem("mesAtual", mesAtual); // Salva o mês atual no localStorage
    atualizarMes();
    criarDias();
}

// Adiciona os event listeners para as setas
prevMonth.addEventListener("mouseenter", () => {
    prevMonth.classList.add("hover");
});
prevMonth.addEventListener("mouseleave", () => {
    prevMonth.classList.remove("hover");
});
nextMonth.addEventListener("mouseenter", () => {
    nextMonth.classList.add("hover");
});
nextMonth.addEventListener("mouseleave", () => {
    nextMonth.classList.remove("hover");
});

prevMonth.addEventListener("click", mesAnterior);
nextMonth.addEventListener("click", proximoMes);

// Inicializa o calendário
atualizarMes();
criarDias();
});

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






/* Mostrar os jogos */

// API JSON
const teamsData = {
    "times_jogos": {
        "cs": {
            "campeonatos": {
                "blast": {
                    "jogos": [
                        {
                            "data": "07/07/2024 11:00",
                            "local": "Copenhagen, Dinamarca",
                            "times": [
                                {
                                    "nome": "Cloud9",
                                    "logo": "https://static.valorantzone.gg/news/2021/04/03214658/380px-Cloud9.png",
                                },
                                {
                                    "nome": "Vitality",
                                    "logo": "https://liquipedia.net/counterstrike/File:Vitality_2021_lightmode.png"
                                }
                            ]
                        },
                        {
                            "data": "08/07/2024 12:00",
                            "local": "Copenhagen, Dinamarca",
                            "times": [
                                {
                                    "nome": "Team Spiritt",
                                    "logo": "https://liquipedia.net/counterstrike/File:Team_Spirit_2021_lightmode.png"
                                },
                                {
                                    "nome": "FaZe Clan",
                                    "logo": "https://liquipedia.net/counterstrike/File:FaZe_Clan_November_2021_full_darkmode.png"
                                }
                            ]
                        },
                        {
                            "data": "09/07/2024 11:00",
                            "local": "Copenhagen, Dinamarca",
                            "times": [
                                {
                                    "nome": "Natus Vincere",
                                    "logo": "https://liquipedia.net/counterstrike/File:Natus_Vincere_2021_lightmode.png"
                                },
                                {
                                    "nome": "ninjas in pyjamas",
                                    "logo": "https://liquipedia.net/counterstrike/File:Ninjas_in_Pyjamas_2021_lightmode.png"
                                }
                            ]
                        },
                        {
                            "data": "10/07/2024 12:00",
                            "local": "Copenhagen, Dinamarca",
                            "times": [
                                {
                                    "nome": "Virtus.pro",
                                    "logo": "https://liquipedia.net/counterstrike/File:Virtus.pro_logo.png"
                                },
                                {
                                    "nome": "Heroic",
                                    "logo": "https://liquipedia.net/counterstrike/File:Heroic_2021_lightmode.png"
                                }
                            ]
                        }
                    ]
                }
            }
        }
    }
}



//Receber os dados da API

let jogos = document.querySelector("#jogos")

teamsData.times_jogos.cs.campeonatos.blast.jogos.forEach(jogo => {
    let dataJogo = jogo.data;
    let timeUm = jogo.times[0].logo;
    let timeDois = jogo.times[1].logo;
    let lugar = jogo.local;

    // Criar o HTML para cada jogo e adicionar ao elemento jogos
    jogos.innerHTML += `
        <aside class="jogos-do-dia">
            <div class="card" id="card1">
                    <div class="data">
                        <h4 id="local_1">${lugar}</h4>
                        <p>${dataJogo}</p>
                    </div>
                    <div class="time">
                        <img src="${timeUm}" width="40px" height="40px" id="imagem_time_1">
                    </div>
                    <div class="time">
                        <img src="${timeDois}" alt="" height="40px" width="40px" id="imagem_time_2">
                    </div>
                </div>
        </aside>
    `;
});