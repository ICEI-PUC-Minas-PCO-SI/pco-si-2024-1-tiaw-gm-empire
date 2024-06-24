var proximos_jogos = [
    {
        "jogo": "League Of Legends",
        "data": "08/06/2024 14:00",
        "campeonato": "Cblol",
        "times": {
            "time_a": {
                "nome": "Fluxo",
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBJwOrlVmBIGTTziG_KZFvZfRqp7UJnfEO8Z_ji8DmA&s"
            },
            "time_b": {
                "nome": "Kabum",
                "img": "https://pm1.aminoapps.com/6743/de686a056e10c16124d5dff523a914ff0789c866v2_00.jpg"
            }
        }
    },
    {
        "jogo": "Valorant",
        "data": "30/06/2024 18:00",
        "campeonato": "Champions Tour 2024: Americas",
        "times": {
            "time_a": {
                "nome": "Loud",
                "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/LOUD_logo.svg/1200px-LOUD_logo.svg.png"
            },
            "time_b": {
                "nome": "Mibr",
                "img": "https://upload.wikimedia.org/wikipedia/commons/5/53/Made_In_Brazil_logo.png"
            }
        }
    },

    {
        "jogo": "Cs",
        "data": "05/06/2024 05:00",
        "campeonato": "YaLLa Compass 2024",
        "times": {
            "time_a": {
                "nome": "Furia",
                "img": "https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png"
            },
            "time_b": {
                "nome": "Eternal Fire",
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsHGZIEPJ7KKcdsMqj73F7UjJkzmgVz978CQ&s"
            }
        }
    },

    {
        "jogo": "Rainbow six",
        "data": "05/06/2024 21:30",
        "campeonato": "TPL Season 8",
        "times": {
            "time_a": {
                "nome": "Karn & Co",
                "img": "https://pbs.twimg.com/profile_images/1729702311209930752/UHvAGmKb_400x400.jpg"
            },
            "time_b": {
                "nome": "Arial Arise",
                "img": "https://pbs.twimg.com/profile_images/1724264564768829440/G5lzOLtk_400x400.jpg"
            }
        }
    }
]

var ultimos_jogos = [
    {
        "jogo": "League of Legends",
        "data": "02/06/2024 15:00",
        "campeonato": "Cblol",
        "times": {
            "time_a": {
                "nome": "Pain Gaming",
                "img": "https://upload.wikimedia.org/wikipedia/pt/5/5d/PainGaming.png",
                "placar": 0
            },
            "time_b": {
                "nome": "Fluxo",
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBJwOrlVmBIGTTziG_KZFvZfRqp7UJnfEO8Z_ji8DmA&s",
                "placar": 1
            }
        }
    },
    {
        "jogo": "Valorant",
        "data": "05/06/2024 19:30",
        "campeonato": "Challengers Brazil 2024",
        "times": {
            "time_a": {
                "nome": "Hero base",
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR5A4CVohUKkco24sZ-41lbbcrbZwkU_TXxbYIz5YVpwpedT2p2qLtvRymBbk_QDBHiEg&usqp=CAU",
                "placar": 2
            },
            "time_b": {
                "nome": "Galorys Company",
                "img": "https://static.valorantzone.gg/news/2023/06/07163614/imagem_2023-06-07_163613604.png",
                "placar": 0
            }
        }
    },
    {
        "jogo": "Cs",
        "data": "05/06/2024 19:30",
        "campeonato": "YaLLa Compass 2024",
        "times": {
            "time_a": {
                "nome": "eLevate",
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLp_ywihY5J7njothvfrqK9b6NAWVZjHE6DA&s",
                "placar": 2
            },
            "time_b": {
                "nome": "Mythic",
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSooTGKkLPoQyWojZv623K8BzkQaf-HaXQo7g&s",
                "placar": 1
            }
        }
    },
    {
        "jogo": "Rainbow six",
        "data": "05/06/2024 19:00",
        "campeonato": "TPL Season 8",
        "times": {
            "time_a": {
                "nome": "TSG Black",
                "img": "https://pbs.twimg.com/profile_images/1650135927069503488/k-fdGFWU_400x400.jpg",
                "placar": 2
            },
            "time_b": {
                "nome": "Mkers",
                "img": "https://pbs.twimg.com/profile_images/1131572156293373953/devWtScQ_400x400.png",
                "placar": 0
            }
        }
    },
]

function atualizar(){
    // card 1 - proximos jogos
        // nome do game
        document.querySelector("#nome_jogo1").innerHTML = proximos_jogos[0].jogo
        // campeonato
        document.querySelector("#campeonato_1").innerHTML = proximos_jogos[0].campeonato
        // data
        document.querySelector("#data_1").innerHTML = proximos_jogos[0].data
        // time 1
        document.querySelector("#imagem_time_1").src = proximos_jogos[0].times.time_a.img
        // time 2
        document.querySelector("#imagem_time_2").src = proximos_jogos[0].times.time_b.img

    // card 2
        // nome do game
        document.querySelector("#nome_jogo2").innerHTML = proximos_jogos[1].jogo
        // campeonato
        document.querySelector("#campeonato_2").innerHTML = proximos_jogos[1].campeonato
        // data
        document.querySelector("#data_2").innerHTML = proximos_jogos[1].data
        // time 1
        document.querySelector("#imagem_time_3").src = proximos_jogos[1].times.time_a.img
        // time 2
        document.querySelector("#imagem_time_4").src = proximos_jogos[1].times.time_b.img

    // card 3 - ultimos jogos
        // nome do game
        document.querySelector("#nome_jogo3").innerHTML = ultimos_jogos[0].jogo
        // campeonato
        document.querySelector("#campeonato_3").innerHTML = ultimos_jogos[0].campeonato
        // data
        document.querySelector("#data_3").innerHTML = ultimos_jogos[0].data
        // time 1
        document.querySelector("#imagem_time_5").src = ultimos_jogos[0].times.time_a.img
        // time 2
        document.querySelector("#imagem_time_6").src = ultimos_jogos[0].times.time_b.img
        // placar 1
        document.querySelector("#placar_1").innerHTML = ultimos_jogos[0].times.time_a.placar
        // placar 2
        document.querySelector("#placar_2").innerHTML = ultimos_jogos[0].times.time_b.placar

    // card 4
        // nome do game
        document.querySelector("#nome_jogo4").innerHTML = ultimos_jogos[1].jogo
        // campeonato
        document.querySelector("#campeonato_4").innerHTML = ultimos_jogos[1].campeonato
        // data
        document.querySelector("#data_4").innerHTML = ultimos_jogos[1].data
        // time 1
        document.querySelector("#imagem_time_7").src = ultimos_jogos[1].times.time_a.img
        // time 2
        document.querySelector("#imagem_time_8").src = ultimos_jogos[1].times.time_b.img
        // placar 1
        document.querySelector("#placar_3").innerHTML = ultimos_jogos[1].times.time_a.placar
        // placar 2
        document.querySelector("#placar_4").innerHTML = ultimos_jogos[1].times.time_b.placar

     
}
let i = 0
function carrosel_direita(){
     // nome do game
     document.querySelector("#nome_jogo1").innerHTML = proximos_jogos[i + 2].jogo
     // campeonato
     document.querySelector("#campeonato_1").innerHTML = proximos_jogos[i + 2].campeonato
     // data
     document.querySelector("#data_1").innerHTML = proximos_jogos[i + 2].data
     // time 2
     document.querySelector("#imagem_time_1").src = proximos_jogos[i + 2].times.time_a.img
     // time 2
     document.querySelector("#imagem_time_2").src = proximos_jogos[i + 2].times.time_b.img
    
 // card 2
     // nome do game
     document.querySelector("#nome_jogo2").innerHTML = proximos_jogos[i + 3].jogo
     // campeonato
     document.querySelector("#campeonato_2").innerHTML = proximos_jogos[i + 3].campeonato
     // data
     document.querySelector("#data_2").innerHTML = proximos_jogos[i + 3].data
     // time 3
     document.querySelector("#imagem_time_3").src = proximos_jogos[i + 3].times.time_a.img
     // time 2
     document.querySelector("#imagem_time_4").src = proximos_jogos[i + 3].times.time_b.img
}

function carrosel_esquerda(){
     // nome do game
     document.querySelector("#nome_jogo1").innerHTML = proximos_jogos[i].jogo
     // campeonato
     document.querySelector("#campeonato_1").innerHTML = proximos_jogos[i].campeonato
     // data
     document.querySelector("#data_1").innerHTML = proximos_jogos[i].data
     // time 2
     document.querySelector("#imagem_time_1").src = proximos_jogos[i].times.time_a.img
     // time 2
     document.querySelector("#imagem_time_2").src = proximos_jogos[i].times.time_b.img

 // card 2
     // nome do game
     document.querySelector("#nome_jogo2").innerHTML = proximos_jogos[i + 1].jogo
     // campeonato
     document.querySelector("#campeonato_2").innerHTML = proximos_jogos[i + 1].campeonato
     // data
     document.querySelector("#data_2").innerHTML = proximos_jogos[i + 1].data
     // tim+ 1
     document.querySelector("#imagem_time_3").src = proximos_jogos[i + 1].times.time_a.img
     // time 2
     document.querySelector("#imagem_time_4").src = proximos_jogos[i + 1].times.time_b.img
}

function ultimosJogos_carrosel_direita(){
    // nome do game
    document.querySelector("#nome_jogo3").innerHTML = ultimos_jogos[i + 2].jogo
    // campeonato
    document.querySelector("#campeonato_3").innerHTML = ultimos_jogos[i + 2].campeonato
    // data
    document.querySelector("#data_3").innerHTML = ultimos_jogos[i + 2].data
    // time 2
    document.querySelector("#imagem_time_5").src = ultimos_jogos[i + 2].times.time_a.img
    // time 2
    document.querySelector("#imagem_time_6").src = ultimos_jogos[i + 2].times.time_b.img
    // placar 1
    document.querySelector("#placar_1").innerHTML = ultimos_jogos[i + 2].times.time_a.placar
    // placar 2
    document.querySelector("#placar_2").innerHTML = ultimos_jogos[i + 2].times.time_b.placar


// card 2
    // nome do game
    document.querySelector("#nome_jogo4").innerHTML = ultimos_jogos[i + 3].jogo
    // campeonato
    document.querySelector("#campeonato_4").innerHTML = ultimos_jogos[i + 3].campeonato
    // data
    document.querySelector("#data_4").innerHTML = ultimos_jogos[i + 3].data
    // time 3
    document.querySelector("#imagem_time_7").src = ultimos_jogos[i + 3].times.time_a.img
    // time 2
    document.querySelector("#imagem_time_8").src = ultimos_jogos[i + 3].times.time_b.img
    //placar 1
    document.querySelector("#placar_3").innerHTML = ultimos_jogos[i + 3].times.time_a.placar
    // placar 2
    document.querySelector("#placar_4").innerHTML = ultimos_jogos[i + 3].times.time_b.placar
}

function ultimosJogos_carrosel_esquerda(){
    // nome do game
    document.querySelector("#nome_jogo3").innerHTML = ultimos_jogos[i].jogo
    // campeonato
    document.querySelector("#campeonato_3").innerHTML = ultimos_jogos[i].campeonato
    // data
    document.querySelector("#data_3").innerHTML = ultimos_jogos[i].data
    // ti
    document.querySelector("#imagem_time_5").src = ultimos_jogos[i].times.time_a.img
    // ti
    document.querySelector("#imagem_time_6").src = ultimos_jogos[i].times.time_b.img
    // placar 1
    document.querySelector("#placar_1").innerHTML = ultimos_jogos[i].times.time_a.placar
    // placar 2
    document.querySelector("#placar_2").innerHTML = ultimos_jogos[i].times.time_b.placar

// card 2
    // nome do game
    document.querySelector("#nome_jogo4").innerHTML = ultimos_jogos[i + 1].jogo
    // campeonato
    document.querySelector("#campeonato_4").innerHTML = ultimos_jogos[i + 1].campeonato
    // data
    document.querySelector("#data_4").innerHTML = ultimos_jogos[i + 1].data
    // time 3
    document.querySelector("#imagem_time_7").src = ultimos_jogos[i + 1].times.time_a.img
    // time 2
    document.querySelector("#imagem_time_8").src = ultimos_jogos[i + 1].times.time_b.img
    // placar 1
    document.querySelector("#placar_3").innerHTML = ultimos_jogos[i + 1].times.time_a.placar
    // placar 2
    document.querySelector("#placar_4").innerHTML = ultimos_jogos[i + 1].times.time_b.placar
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
    const noticia = JSON.stringify(news.find(n => n.id === noticiaId));
    localStorage.setItem('noticia', noticia);
}

document.addEventListener('DOMContentLoaded', () => {
    const championship_cblol = teamsData.times_jogos.lol.campeonatos.cblol;
    const images_lol_cblol = document.querySelectorAll('.img_lol_cblol');
    const championship_champions = teamsData.times_jogos.valorant.campeonatos.valorant_champions;
    const imagens_valorant_champions = document.querySelectorAll(".img_valorant_champions")
    const championship_challengers = teamsData.times_jogos.valorant.campeonatos.valorant_challengers;
    const imagens_valorant_challengers = document.querySelectorAll(".img_valorant_challengers")

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
});
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const suggestions = document.getElementById('suggestions');

    searchInput.addEventListener('keyup', async () => {
        const input = searchInput.value.toLowerCase();
        suggestions.innerHTML = '';

        if (input.length === 0) {
            return;
        }

        try {
            const response = await fetch('times.js'); // Carrega o arquivo JSON externo
            if (!response.ok) {
                throw new Error('Erro ao carregar os times.');
            }
            const { times } = await response.json(); // Converte a resposta para JSON

            times.forEach(team => {
                if (team.nome.toLowerCase().includes(input)) {
                    const div = document.createElement('div');
                    div.className = 'suggestion-item';
                    div.innerHTML = `<img src="${team.logo}" alt="${team.nome}" style="width: 20px; height: 20px; margin-right: 10px;">${team.nome}`;
                    suggestions.appendChild(div);
                }
            });
        } catch (error) {
            console.error('Erro:', error);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const campoPesquisa = document.querySelector('#pesquisa');
    const linkTime = document.querySelector('#link_time');

    campoPesquisa.addEventListener('keypress', async (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Evita o comportamento padrão do formulário
            const nomeTime = campoPesquisa.value.trim();

            if (nomeTime === '') {
                alert('Digite o nome de um time para pesquisar.');
                return;
            }

            try {
                const response = await fetch('times.json'); // Simulação de busca na API
                const data = await response.json();

                const timeEncontrado = encontrarTime(data, nomeTime);

                if (timeEncontrado) {
                    localStorage.setItem('timePesquisado', JSON.stringify(timeEncontrado));

                    const timeUrl = `times/time.html?time=${encodeURIComponent(nomeTime)}`;
                    linkTime.href = timeUrl;
                    linkTime.textContent = `Redirecionando para ${timeEncontrado.nome}`;
                    window.location.href = 'times/time.html'
                } else {
                    linkTime.href = '#'; // Sem link
                    linkTime.textContent = `O time "${nomeTime}" não foi encontrado.`;
                }
            } catch (error) {
                console.error('Erro ao buscar dados: ', error);
                alert('Ocorreu um erro ao buscar os dados. Por favor, tente novamente mais tarde.');
            }
        }
    });
});

function encontrarTime(data, nomeTime) {
    // Implementação para encontrar o time na estrutura de dados fornecida
    const times = data.times_jogos.lol.campeonatos.cblol.times;
    const timeEncontrado = times.find(time => time.nome.toLowerCase() === nomeTime.toLowerCase());
    return timeEncontrado;
}

