
document.addEventListener('DOMContentLoaded', () => {
    const selectedTeam = JSON.parse(localStorage.getItem('selectedTeam'));
    if (selectedTeam) {
        document.querySelector("#time-logo").src = selectedTeam.logo
        document.querySelector("#time-nome").innerHTML = selectedTeam.nome
        for(let i = 0; i < selectedTeam.jogadores.length; i++){
            document.querySelector(`#jogador_${i+ 1}`).innerHTML = selectedTeam.jogadores[i].nome
            document.querySelector(`#foto_jogador_${i+ 1}`).src = selectedTeam.jogadores[i].img
        }
        for(let i = 0; i < 2; i++){
            document.querySelector(`#imagem_time_${i+1}`).src = selectedTeam.proximo_jogo.times[i].logo
        }
        for(let i = 2; i < 4; i++){
            document.querySelector(`#imagem_time_${i +1}`).src = selectedTeam.ultimo_jogo.times[i - 2].logo
        }
        document.querySelector("#data_1").innerHTML = selectedTeam.proximo_jogo.data
        document.querySelector("#data_2").innerHTML = selectedTeam.ultimo_jogo.data
        for(let i = 0; i < 2; i++){
            document.querySelector(`#placar_${i + 1}`).innerHTML = selectedTeam.ultimo_jogo.times[i].placar
        }
        document.querySelector(`#local_1`).innerHTML = selectedTeam.proximo_jogo.local
        document.querySelector(`#local_2`).innerHTML = selectedTeam.ultimo_jogo.local

        if(selectedTeam.campeonato == "cblol" || selectedTeam.campeonato == "lec"){
            document.querySelector("#card1").style.borderLeft = "5px solid blue"
            document.querySelector("#card2").style.borderLeft = "5px solid blue"
        }
        
    } 
    else {
        teamDetailsContainer.textContent = 'Nenhum time selecionado.';
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

usuarioLogado();

function sair() {
    if(confirm('Tem certeza que deseja sair?')) {
        sessionStorage.removeItem('USER');
        
        usuarioLogado();
    }
}

const searchInput = document.getElementById('searchInput');
const suggestions = document.getElementById('suggestions');
const icone_busca = document.querySelector("#icon_busca")

icone_busca.addEventListener('click', async () => {
    fetch('times.json').then(r => r.json()).then(
        response => {
            const timesCs = response.times_jogos.cs.campeonatos.BPFG.times;
            const timesLol = response.times_jogos.lol.campeonatos.cblol.times;
            const timesLol2 = response.times_jogos.lol.campeonatos.Lec.times;
            const timesValorant = response.times_jogos.valorant.campeonatos.valorant_challengers.times;
            const timesValorant2 = response.times_jogos.valorant.campeonatos.valorant_champions.times;
            const timesTodos = timesCs.concat(timesLol).concat(timesLol2).concat(timesValorant).concat(timesValorant2);
            const teamName = searchInput.value
            const team = timesTodos.find(team => team.nome === teamName);
            if (team) {
                localStorage.setItem('selectedTeam', JSON.stringify(team));
                window.location.href = "time.html"
            }
        }
    )
})