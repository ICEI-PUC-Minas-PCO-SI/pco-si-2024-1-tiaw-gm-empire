
function atualizar() {
    // card 1 - proximos jogos


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


usuarioLogado();


