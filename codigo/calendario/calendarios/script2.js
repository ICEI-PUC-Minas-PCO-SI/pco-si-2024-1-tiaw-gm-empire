document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    const prevMonth = document.getElementById("prevMonth");
    const nextMonth = document.getElementById("nextMonth");
    const tbody = document.getElementById("dias");

    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
            mesAnterior();
        } else if (event.key === "ArrowRight") {
            proximoMes();
        }
    });



const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
let dataAtual = new Date();
let mesAtual = dataAtual.getMonth();
let anoAtual = dataAtual.getFullYear();

// Função para criar os dias do mês
function criarDias() {
    tbody.innerHTML = "";

    // Dias do mês
    const diasNoMes = new Date(anoAtual, mesAtual + 1, 0).getDate();

    // Dia da semana do primeiro dia do mês
    const primeiroDiaSemana = new Date(anoAtual, mesAtual, 1).getDay();

    // Dias do mês anterior
    const diasNoMesAnterior = new Date(anoAtual, mesAtual, 0).getDate();

    let dia = 1;
    for (let i = 0; i < 6; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            let td = document.createElement("td");

            // Dias do mês anterior
            if (i === 0 && j < primeiroDiaSemana) {
                td.textContent = diasNoMesAnterior - primeiroDiaSemana + j + 1;
                td.classList.add("mes-anterior");
            }
            // Dias do mês atual
            else if (dia <= diasNoMes) {
                td.textContent = dia;
                dia++;



                // Adicionar lembretes no dia 19
                if (dia === 17 && mesAtual === dataAtual.getMonth() && anoAtual === dataAtual.getFullYear()) {
                    const lembretes = ["Titans vs. Falcons"];
                    lembretes.forEach(function (lembreteText) {
                        const lembrete = document.createElement("a");
                        lembrete.textContent = lembreteText;
                        lembrete.classList.add("lembrete");
                        lembrete.href = "https://www.ubisoft.com/pt-br/esports/rainbow-six/siege/calendar/2024-05";
                        lembrete.target = "_blank"; // Para abrir em uma nova aba
                        td.appendChild(lembrete);
                        td.appendChild(document.createElement("br"));
                    });
                }
                if (dia === 18 && mesAtual === dataAtual.getMonth() && anoAtual === dataAtual.getFullYear()) {
                    const lembretes = ["Dragons vs. Griffins"];
                    lembretes.forEach(function (lembreteText) {
                        const lembrete = document.createElement("a");
                        lembrete.textContent = lembreteText;
                        lembrete.classList.add("lembrete");
                        lembrete.href = "https://www.ubisoft.com/pt-br/esports/rainbow-six/siege/calendar/2024-05"; // Altere para o link desejado
                        lembrete.target = "_blank"; // Para abrir em uma nova aba
                        td.appendChild(lembrete);
                        td.appendChild(document.createElement("br"));
                    });
                }
                if (dia === 20 && mesAtual === dataAtual.getMonth() && anoAtual === dataAtual.getFullYear()) {
                    const lembretes = ["Lions vs. Bears"];
                    lembretes.forEach(function (lembreteText) {
                        const lembrete = document.createElement("a");
                        lembrete.textContent = lembreteText;
                        lembrete.classList.add("lembrete");
                        lembrete.href = "https://www.ubisoft.com/pt-br/esports/rainbow-six/siege/calendar/2024-05"; 
                        lembrete.target = "_blank"; // Para abrir em uma nova aba
                        td.appendChild(lembrete);
                        td.appendChild(document.createElement("br"));
                    });
                }
                if (dia === 21 && mesAtual === dataAtual.getMonth() && anoAtual === dataAtual.getFullYear()) {
                    const lembretes = ["Eagles vs. Hawks"];
                    lembretes.forEach(function (lembreteText) {
                        const lembrete = document.createElement("a");
                        lembrete.textContent = lembreteText;
                        lembrete.classList.add("lembrete");
                        lembrete.href = "https://www.ubisoft.com/pt-br/esports/rainbow-six/siege/calendar/2024-05";
                        lembrete.target = "_blank"; // Para abrir em uma nova aba
                        td.appendChild(lembrete);
                        td.appendChild(document.createElement("br"));
                    });
                }
                if (dia === 22 && mesAtual === dataAtual.getMonth() && anoAtual === dataAtual.getFullYear()) {
                    const lembretes = ["Tigers vs. Panthers"];
                    lembretes.forEach(function (lembreteText) {
                        const lembrete = document.createElement("a");
                        lembrete.textContent = lembreteText;
                        lembrete.classList.add("lembrete");
                        lembrete.href = "https://www.ubisoft.com/pt-br/esports/rainbow-six/siege/calendar/2024-05";
                        lembrete.target = "_blank"; // Para abrir em uma nova aba
                        td.appendChild(lembrete);
                        td.appendChild(document.createElement("br"));
                    });
                }
                if (dia === 23 && mesAtual === dataAtual.getMonth() && anoAtual === dataAtual.getFullYear()) {
                    const lembretes = ["Wolves vs. Coyotes"];
                    lembretes.forEach(function (lembreteText) {
                        const lembrete = document.createElement("a");
                        lembrete.textContent = lembreteText;
                        lembrete.classList.add("lembrete");
                        lembrete.href = "https://www.ubisoft.com/pt-br/esports/rainbow-six/siege/calendar/2024-05";
                        lembrete.target = "_blank"; // Para abrir em uma nova aba
                        td.appendChild(lembrete);
                        td.appendChild(document.createElement("br"));
                    });
                }
                if (dia === 25 && mesAtual === dataAtual.getMonth() && anoAtual === dataAtual.getFullYear()) {
                    const lembretes = ["Sharks vs. Marlins"];
                    lembretes.forEach(function (lembreteText) {
                        const lembrete = document.createElement("a");
                        lembrete.textContent = lembreteText;
                        lembrete.classList.add("lembrete");
                        lembrete.href = "https://www.ubisoft.com/pt-br/esports/rainbow-six/siege/calendar/2024-05"; 
                        lembrete.target = "_blank"; // Para abrir em uma nova aba
                        td.appendChild(lembrete);
                        td.appendChild(document.createElement("br"));
                    });
                }
                if (dia === 26 && mesAtual === dataAtual.getMonth() && anoAtual === dataAtual.getFullYear()) {
                    const lembretes = ["Raptors vs. Pterodactyls"];
                    lembretes.forEach(function (lembreteText) {
                        const lembrete = document.createElement("a");
                        lembrete.textContent = lembreteText;
                        lembrete.classList.add("lembrete");
                        lembrete.href = "https://www.ubisoft.com/pt-br/esports/rainbow-six/siege/calendar/2024-05"; 
                        lembrete.target = "_blank"; // Para abrir em uma nova aba
                        td.appendChild(lembrete);
                        td.appendChild(document.createElement("br"));
                    });
                }
                if (dia === 27 && mesAtual === dataAtual.getMonth() && anoAtual === dataAtual.getFullYear()) {
                    const lembretes = ["Phoenix vs. Thunderbirds"];
                    lembretes.forEach(function (lembreteText) {
                        const lembrete = document.createElement("a");
                        lembrete.textContent = lembreteText;
                        lembrete.classList.add("lembrete");
                        lembrete.href = "https://www.ubisoft.com/pt-br/esports/rainbow-six/siege/calendar/2024-05";
                        lembrete.target = "_blank"; // Para abrir em uma nova aba
                        td.appendChild(lembrete);
                        td.appendChild(document.createElement("br"));
                    });
                }
            }
            // Dias do próximo mês
            else {
                td.textContent = dia - diasNoMes;
                td.classList.add("prox-mes");
                dia++;
            }

            tr.appendChild(td);
        }
        tbody.appendChild(tr);
        if (dia > diasNoMes && tr.children[6].classList.contains("prox-mes")) break;
    }
}

// Atualiza o cabeçalho do mês
function atualizarMes() {
    header.textContent = meses[mesAtual] + " " + anoAtual;
}

// Função para mudar para o próximo mês
function proximoMes() {
    mesAtual++;
    if (mesAtual > 11) {
        mesAtual = 0;
        anoAtual++;
    }
    localStorage.setItem("mesAtual", mesAtual); // Salva o mês atual no localStorage
    atualizarMes();
    criarDias();
}

// Função para mudar para o mês anterior
function mesAnterior() {
    mesAtual--;
    if (mesAtual < 0) {
        mesAtual = 11;
        anoAtual--;
    }
    localStorage.setItem("mesAtual", mesAtual); // Salva o mês atual no localStorage
    atualizarMes();
    criarDias();
}

// Adiciona os event listeners para as setas
prevMonth.addEventListener("mouseenter", () => {
    prevMonth.classList.add("hover");
});
prevMonth.addEventListener("mouseleave", () => {
    prevMonth.classList.remove("hover");
});
nextMonth.addEventListener("mouseenter", () => {
    nextMonth.classList.add("hover");
});
nextMonth.addEventListener("mouseleave", () => {
    nextMonth.classList.remove("hover");
});

prevMonth.addEventListener("click", mesAnterior);
nextMonth.addEventListener("click", proximoMes);

// Inicializa o calendário
atualizarMes();
criarDias();
});
