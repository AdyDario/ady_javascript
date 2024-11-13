function mostrarSaudacao() {
    const nome = prompt("Digite seu nome:");

    const pratos = ["Feijoada", "Lasanha", "Strogonoff", "Macarrão", "Pizza", "Sushi", "Frango"];

    const diaSemana = new Date().getDay();

    const pratoDoDia = pratos[diaSemana];

    const mensagem = `Olá, ${nome}! O prato do dia é ${pratoDoDia}!`;

    alert(mensagem);
}