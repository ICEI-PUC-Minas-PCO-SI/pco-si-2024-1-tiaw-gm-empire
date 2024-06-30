document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    const prevMonth = document.getElementById("prevMonth");
    const nextMonth = document.getElementById("nextMonth");
    const tbody = document.getElementById("dias");

    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    let dataAtual = new Date();
    let mesAtual = dataAtual.getMonth();
    let anoAtual = dataAtual.getFullYear();

    // Função para criar os dias do mês
    function criarDias(mes, ano) {
        tbody.innerHTML = "";

        // Dias do mês
        const diasNoMes = new Date(ano, mes + 1, 0).getDate();

        // Dia da semana do primeiro dia do mês
        const primeiroDiaSemana = new Date(ano, mes, 1).getDay();

        // Dias do mês anterior
        const diasNoMesAnterior = new Date(ano, mes, 0).getDate();

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

    // Atualiza o cabeçalho do mês e as setas de navegação
    function atualizarMes(mes, ano) {
        header.textContent = meses[mes] + " " + ano;

        // Verifica se é o mês atual
        const isMesAtual = (mes === dataAtual.getMonth() && ano === dataAtual.getFullYear());

        // Mostra ou esconde as setas baseado no mês atual
        if (isMesAtual) {
            prevMonth.style.visibility = "visible"; // Mostra a seta de mês anterior
            nextMonth.style.visibility = "hidden"; // Esconde a seta de próximo mês
            nextMonth.classList.remove("bi", "bi-caret-right-fill");
            nextMonth.classList.add("bi", "bi-caret-left-fill");
        } else {
            prevMonth.style.visibility = "hidden"; // Esconde a seta de mês anterior
            nextMonth.style.visibility = "visible"; // Mostra a seta de próximo mês
            nextMonth.classList.remove("bi", "bi-caret-left-fill");
            nextMonth.classList.add("bi", "bi-caret-right-fill");
        }
    }

    // Função para mudar para o próximo mês
    function proximoMes() {
        mesAtual++;
        if (mesAtual > 11) {
            mesAtual = 0;
            anoAtual++;
        }
        atualizarMes(mesAtual, anoAtual);
        criarDias(mesAtual, anoAtual);
    }

    // Função para mudar para o mês anterior
    function mesAnterior() {
        mesAtual--;
        if (mesAtual < 0) {
            mesAtual = 11;
            anoAtual--;
        }
        atualizarMes(mesAtual, anoAtual);
        criarDias(mesAtual, anoAtual);
    }

    // Adiciona o event listener para a seta de mês anterior (imagem)
    prevMonth.addEventListener("click", function () {
        mesAnterior();
    });

    // Adiciona o event listener para a seta de próximo mês (imagem)
    nextMonth.addEventListener("click", function () {
        proximoMes();
    });

    // Event listener para capturar as teclas de seta esquerda e direita
    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft" && mesAtual === dataAtual.getMonth()) {
            mesAnterior();
        } else if (event.key === "ArrowRight" && mesAtual === dataAtual.getMonth() - 1) {
            proximoMes();
        }
    });

    // Inicializa o calendário com o mês atual e o mês anterior
    atualizarMes(mesAtual, anoAtual);
    criarDias(mesAtual, anoAtual);
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






/* Mostrar os jogos */

// API JSON
const teamsData = {
    "times_jogos": {
        "lol": {
            "campeonatos": {
                "cblol": {
                    "jogos": [
                        {
                            "data": "12/07/2024 16:00",
                            "local": "Arena CBLOL",
                            "times": [
                                {
                                    "nome": "Liberty",
                                    "logo": "https://am-a.akamaihd.net/image?resize=200:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1643305707691_RXfNcFMU.png",
                                },
                                {
                                    "nome": "Loud",
                                    "logo": "https://static.valorantzone.gg/news/2022/02/06183039/LOUD.png"
                                }
                            ]
                        },
                        {
                            "data": "12/07/2024 13:00",
                            "local": "Arena CBLOL",
                            "times": [
                                {
                                    "nome": "LOS",
                                    "logo": "https://n9necats.com.br/wp-content/uploads/2022/03/Los_Grandes.png"
                                },
                                {
                                    "nome": "Pain Gaming",
                                    "logo": "https://upload.wikimedia.org/wikipedia/pt/5/5d/PainGaming.png"
                                }
                            ]
                        },
                        {
                            "data": "12/07/2024 15:00",
                            "local": "Arena CBLOL",
                            "times": [
                                {
                                    "nome": "Kabum",
                                    "logo": "https://pm1.aminoapps.com/6743/de686a056e10c16124d5dff523a914ff0789c866v2_00.jpg"
                                },
                                {
                                    "nome": "Fluxo",
                                    "logo": "https://esportenewsmundo.com.br/wp-content/uploads/2022/01/fluxo.png"
                                }
                            ]
                        },
                        {
                            "data": "12/07/2024 15:00",
                            "local": "Arena CBLOL",
                            "times": [
                                {
                                    "nome": "Vivo Keyd",
                                    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaDj2osS2rk5CQ-cxpzSs63tZGq2LE6UyWkg&s"
                                },
                                {
                                    "nome": "Fúria",
                                    "logo": "https://seeklogo.com/images/F/furia-esports-logo-C7F0FAD39C-seeklogo.com.png"
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

teamsData.times_jogos.lol.campeonatos.cblol.jogos.forEach(jogo => {
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
                        <img src="${timeUm}" width="40px" height="40px" id="imagem_time_1" data-nome="Liberty" class="img_lol_cblol">
                    </div>
                    <div class="time">
                        <img src="${timeDois}" alt="" height="40px" width="40px" id="imagem_time_2" data-nome="Loud" class="img_lol_cblol">
                    </div>
                </div>
        </aside>
    `;
});

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

   function renderizarCards(e) {
    fetch("./caioAPI.JSON").then(r => r.json()).then(caioAPI => {
        const dataSelecionada = e.target.textContent;
        const jogos = caioAPI.cblol_2024_split_2.Jogos;

        teamsData.times_jogos.lol.camponatos.cblol.jogos.forEach(jogo => {
            let dataCompleta = jogo.data.split(' ')[0];
            let data = dataCompleta.split('/')[0].toString();
            if (data === dataSelecionada) {
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
                            <img src="${timeUm}" width="40px" height="40px" id="imagem_time_1" data-nome="Liberty" class="img_lol_cblol">
                        </div>
                        <div class="time">
                            <img src="${timeDois}" alt="" height="40px" width="40px" id="imagem_time_2" data-nome="Loud" class="img_lol_cblol">
                        </div>
                    </div>
                </aside>`;
            }
        });
    });
}
