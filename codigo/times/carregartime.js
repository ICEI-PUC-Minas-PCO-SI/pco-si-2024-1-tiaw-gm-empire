
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
        
    } else {
        teamDetailsContainer.textContent = 'Nenhum time selecionado.';
    }
});

