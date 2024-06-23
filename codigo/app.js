
function atualizar() {
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
function carrosel_direita() {
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

function carrosel_esquerda() {
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

function ultimosJogos_carrosel_direita() {
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

function ultimosJogos_carrosel_esquerda() {
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

// Daniel Fernandes - 11/06/2024
// Notícias
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
                `<div class="card_noticia">
                    <img src="${n.imagem}" alt="${n.titulo}">
                    <div class="conteudo_noticia">
                        <h6>${n.jogo}</h6>
                        <h3><a href="Noticias/noticias.html" onclick="setNoticia(${n.id});">${n.titulo}</a></h3>
                        <p>${n.conteudo}</p>
                        <p>${n.data}</p>
                    </div>
                </div>`
            );
        });
    });

function setNoticia(noticiaId) {
    debugger;
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

// Função para carregar os dados do time na página time.html
function loadTeamData(teamName) {
    // Busca o time no JSON
    const foundTeam = teamsData.times_jogos.lol.campeonatos.cblol.times.find(time => time.nome.toLowerCase() === teamName.toLowerCase());

    if (foundTeam) {
        // Atualiza os elementos na página com os dados do time encontrado
        document.getElementById("time-logo").src = foundTeam.logo;
        document.getElementById("time-nome").textContent = foundTeam.nome;

        // Carrega os jogadores do time
        foundTeam.jogadores.forEach((jogador, index) => {
            document.getElementById(`foto_jogador_${index + 1}`).src = jogador.img;
            document.getElementById(`jogador_${index + 1}`).textContent = `${jogador.nome} - ${jogador.lane}`;
        });

        // Carrega informações do último jogo
        const ultimoJogo = foundTeam.ultimo_jogo;
        document.getElementById("local_2").textContent = ultimoJogo.local;
        document.getElementById("data_2").textContent = ultimoJogo.data;
        document.getElementById("imagem_time_3").src = ultimoJogo.times[0].logo;
        document.getElementById("placar_1").textContent = ultimoJogo.times[0].placar;
        document.getElementById("imagem_time_4").src = ultimoJogo.times[1].logo;
        document.getElementById("placar_2").textContent = ultimoJogo.times[1].placar;

        // Carrega informações do próximo jogo
        const proximoJogo = foundTeam.proximo_jogo;
        document.getElementById("local_1").textContent = proximoJogo.local;
        document.getElementById("data_1").textContent = proximoJogo.data;
        document.getElementById("imagem_time_1").src = proximoJogo.times[0].logo;
        document.getElementById("imagem_time_2").src = proximoJogo.times[1].logo;

    } else {
        alert("Time não encontrado!");
    }
}

// Função para buscar e carregar os dados do time a partir da barra de pesquisa
function search() {
    const term = document.getElementById("pesquisa").value.trim().toLowerCase();
    if (term) {
        loadTeamData(term);
    } else {
        alert("Por favor, digite o nome de um time.");
    }
}

// Adiciona um ouvinte de evento para a pesquisa ao clicar no ícone de busca
document.getElementById("icon_busca").addEventListener("click", function() {
    search();
});

// Adiciona um ouvinte de evento para a tecla "Enter" na barra de pesquisa
document.getElementById("pesquisa").addEventListener("keypress", function(event) {
    // Verifica se a tecla pressionada é "Enter" (código 13)
    if (event.key === "Enter") {
        search(); // Chama a função de pesquisa
    }
});