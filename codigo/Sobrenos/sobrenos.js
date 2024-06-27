
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
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          sessionStorage.removeItem('USER');
          usuarioLogado();
        }
      });
   }


const searchInput = document.getElementById('searchInput');
    const suggestions = document.getElementById('suggestions');
    const icone_busca = document.querySelector("#icon_busca")

    icone_busca.addEventListener('click', async () => {
        fetch('../times.json').then(r => r.json()).then(
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
                    window.location.href = "../times/time.html"
                }
            }
        )
    })