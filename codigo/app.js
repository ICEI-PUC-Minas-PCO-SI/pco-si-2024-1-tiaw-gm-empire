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
                "img": "https://pbs.twimg.com/profile_images/1726322424658993152/7EJIXFip_400x400.jpg",
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
        "data": "05/06/2024 19:30",
        "campeonato": "Challengets Brazil 2024",
        "times": {
            "time_a": {
                "nome": "Hero base",
                "img": "https://pbs.twimg.com/profile_images/1726322424658993152/7EJIXFip_400x400.jpg",
                "placar": 2
            },
            "time_b": {
                "nome": "Galorys Company",
                "img": "https://static.valorantzone.gg/news/2023/06/07163614/imagem_2023-06-07_163613604.png",
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

fetch("noticias.json")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        // card 1
        document.querySelector("#noticia_nomejogo1").innerHTML = data.noticias[0].jogo
        document.querySelector("#noticia_titulo1").innerHTML = data.noticias[0].titulo
        document.querySelector("#noticia_content1").innerHTML = data.noticias[0].conteudo
        document.querySelector("#noticia_data1").innerHTML = data.noticias[0].data
        document.querySelector("#foto_noticia1").src = data.noticias[0].imagem  
        // card 2
        document.querySelector("#noticia_nomejogo2").innerHTML = data.noticias[1].jogo
        document.querySelector("#noticia_titulo2").innerHTML = data.noticias[1].titulo
        document.querySelector("#noticia_content2").innerHTML = data.noticias[1].conteudo
        document.querySelector("#noticia_data2").innerHTML = data.noticias[1].data
        document.querySelector("#foto_noticia2").src = data.noticias[1].imagem  

        // card 3
        document.querySelector("#noticia_nomejogo3").innerHTML = data.noticias[2].jogo
        document.querySelector("#noticia_titulo3").innerHTML = data.noticias[2].titulo
        document.querySelector("#noticia_content3").innerHTML = data.noticias[2].conteudo
        document.querySelector("#noticia_data3").innerHTML = data.noticias[2].data
        document.querySelector("#foto_noticia3").src = data.noticias[2].imagem  
    })