
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
    // card 2
        document.querySelector("#local_2").innerHTML = teamsData.times_jogos.valorant.campeonatos.valorant_champions.times[0].proximo_jogo.local
        document.querySelector("#data_2").innerHTML = teamsData.times_jogos.valorant.campeonatos.valorant_champions.times[0].proximo_jogo.data
        document.querySelector(`#imagem_time_3`).src = teamsData.times_jogos.valorant.campeonatos.valorant_champions.times[0].proximo_jogo.times[0].logo
        document.querySelector(`#imagem_time_4`).src = teamsData.times_jogos.valorant.campeonatos.valorant_champions.times[0].proximo_jogo.times[1].logo

    // card 3 - ultimos jogos
        // campeonato
        document.querySelector("#local_3").innerHTML = teamsData.times_jogos.lol.campeonatos.Lec.times[0].proximo_jogo.local
        // data
        document.querySelector("#data_3").innerHTML = teamsData.times_jogos.lol.campeonatos.Lec.times[0].proximo_jogo.data
        // time 1
        document.querySelector("#imagem_time_5").src = teamsData.times_jogos.lol.campeonatos.Lec.times[0].ultimo_jogo.times[0].logo
        // time 2
        document.querySelector("#imagem_time_6").src = teamsData.times_jogos.lol.campeonatos.Lec.times[0].ultimo_jogo.times[1].logo
        // placar 1
        document.querySelector("#placar_1").innerHTML = teamsData.times_jogos.lol.campeonatos.Lec.times[0].ultimo_jogo.times[0].placar
        // placar 2
        document.querySelector("#placar_2").innerHTML = teamsData.times_jogos.lol.campeonatos.Lec.times[0].ultimo_jogo.times[1].placar

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
