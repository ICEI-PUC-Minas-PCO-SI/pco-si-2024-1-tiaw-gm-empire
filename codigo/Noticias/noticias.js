'use strict';

const conteudoNoticia = document.getElementById('conteudoNoticia');
const comentarios = document.getElementById('comentario-do-usuario');

if (!localStorage.getItem('noticia')) {
    // redirecionar para inicio
}

const noticia = JSON.parse(localStorage.getItem('noticia'));

console.log(noticia);

// const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam non nisi est sit amet. Tellus in hac habitasse platea. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Tempus quam pellentesque nec nam. Volutpat lacus laoreet non curabitur gravida arcu. Sit amet massa vitae tortor condimentum lacinia. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Ligula ullamcorper malesuada proin libero. Nunc mattis enim ut tellus elementum sagittis vitae et. Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Enim neque volutpat ac tincidunt vitae semper. Dolor morbi non arcu risus quis varius quam quisque. Mi eget mauris pharetra et ultrices.

// Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Vitae tempus quam pellentesque nec nam aliquam. Tortor posuere ac ut consequat semper viverra nam libero. Sed risus ultricies tristique nulla aliquet enim tortor. Justo nec ultrices dui sapien eget mi. Sagittis aliquam malesuada bibendum arcu vitae. Ac tincidunt vitae semper quis lectus nulla at volutpat. Egestas pretium aenean pharetra magna ac placerat vestibulum. Turpis nunc eget lorem dolor sed viverra ipsum. Arcu ac tortor dignissim convallis aenean et tortor at risus.

// Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Duis tristique sollicitudin nibh sit amet commodo nulla. Feugiat sed lectus vestibulum mattis ullamcorper. Rutrum quisque non tellus orci ac auctor augue. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Nulla facilisi cras fermentum odio eu feugiat pretium. Faucibus purus in massa tempor nec feugiat. Eleifend quam adipiscing vitae proin sagittis. Viverra maecenas accumsan lacus vel. Consectetur adipiscing elit ut aliquam purus sit amet. Sed turpis tincidunt id aliquet risus feugiat. Eu turpis egestas pretium aenean pharetra. Id diam maecenas ultricies mi. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Morbi quis commodo odio aenean sed adipiscing. At augue eget arcu dictum varius duis. Tellus pellentesque eu tincidunt tortor aliquam.

// Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum. Blandit libero volutpat sed cras. Et odio pellentesque diam volutpat. Imperdiet nulla malesuada pellentesque elit. Egestas diam in arcu cursus euismod quis viverra nibh cras. Tortor condimentum lacinia quis vel eros donec ac odio. Erat velit scelerisque in dictum non consectetur a erat nam. Ut morbi tincidunt augue interdum velit euismod in. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Sit amet tellus cras adipiscing enim eu turpis. Adipiscing bibendum est ultricies integer quis auctor elit. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Sed augue lacus viverra vitae congue eu consequat ac. Diam ut venenatis tellus in metus vulputate eu.

// A lacus vestibulum sed arcu non odio euismod lacinia. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. Sagittis vitae et leo duis ut diam quam nulla. Nulla facilisi cras fermentum odio. Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Tristique senectus et netus et malesuada fames ac turpis egestas. Ut placerat orci nulla pellentesque dignissim enim. Bibendum arcu vitae elementum curabitur. In hendrerit gravida rutrum quisque non tellus orci. Dictum non consectetur a erat nam at. Pretium aenean pharetra magna ac placerat vestibulum lectus. Ultricies tristique nulla aliquet enim tortor at.`;

conteudoNoticia.innerHTML = `
    <h1>${noticia.titulo}</h3>
    <img id="noticia_img" src=${noticia.imagem}>
    <p id="noticia_conteudo">${noticia.conteudo}<p>
`;

document.addEventListener('DOMContentLoaded', function () {
    const commentForm = document.querySelector('.form-coment');
    const commentTextArea = document.getElementById('comentario');
    const btn_submit = document.getElementById("btn")
    // Verifica se o usuário está logado
    const user = sessionStorage.getItem('USER');

    if (user) {
        // Usuário está logado, habilita a área de texto
        commentTextArea.removeAttribute('disabled');
        btn_submit.removeAttribute('disabled');
    } else {
        // Usuário não está logado, desabilita a área de texto e muda seu placeholder
        commentTextArea.setAttribute('disabled', 'true');
        btn_submit.setAttribute('disabled', 'true');
        Swal.fire({
            title: "Atenção!",
            text: "Você precisa realizar o login antes de comentar! 🙃",
            icon: "warning"
          });
    }

    btn.addEventListener('click', () => {
        const userJson = JSON.parse(user);
        console.log(userJson)
        const novoComentario = {
            "nome": userJson.nome,
            "comentario": commentTextArea.value,
            "noticia": noticia.id
        }
        
        enviarComentarioParaServidor(novoComentario);
        location.reload
    });

    exibirComentarios();

    function exibirComentarios() {
        fetch('https://json-server-one-phi.vercel.app/comentario-noticia').then(r => r.json()).then(res => {
            const coments = res.filter(n => n.noticia == noticia.id)
            
            coments.forEach(coment => {
                comentarios.insertAdjacentHTML('beforeend', `<p>${coment.nome}: ${coment.comentario}`)
            })
            
        })
    }
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
const user = JSON.parse(sessionStorage.getItem('USER'));

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
const commentTextArea = document.getElementById('comentario');

function enviarComentarioParaServidor(novoComentario) {
    fetch('https://json-server-one-phi.vercel.app/comentario-noticia', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoComentario),
    }).then(response => {
        debugger;
        console.log(novoComentario)
        console.log(response);
        Swal.fire({
            title: "Registrado!",
            text: "Comentário registrado com sucesso 👍",
            icon: "success"
        });
        comentarioTextArea.value = '';
        comentario.innerHTML = '';
        exibirComentarios();

    }).catch(
        error => {
            console.error('Erro ao enviar o comentário:', error);
        }
    );
}