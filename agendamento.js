const form = document.getElementById("formAgendamento");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const agendamento = {
        nome: document.getElementById("nome").value,
        servico: document.getElementById("servico").value,
        data: document.getElementById("data").value,
        horario: document.getElementById("horario").value
    };

    let lista = JSON.parse(localStorage.getItem("agendamentos")) || [];


    lista.push(agendamento);


    localStorage.setItem("agendamentos", JSON.stringify(lista));

    alert("Agendamento salvo com sucesso!");

    form.reset();
});
