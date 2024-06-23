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
