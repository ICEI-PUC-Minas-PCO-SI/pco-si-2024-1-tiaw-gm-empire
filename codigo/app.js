
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
    if(confirm('Tem certeza que deseja sair?')) {
        sessionStorage.removeItem('USER');
        
        usuarioLogado();
    }
}
