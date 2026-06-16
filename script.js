function mudarPagina(idPagina) {
    // 1. Seleciona todas as seções de conteúdo e remove a classe 'active' para escondê-las
    const secoes = document.querySelectorAll('.pagina-secao');
    secoes.forEach(secao => {
        secao.classList.remove('active');
    });

    // 2. Mostra a seção que possui o ID correspondente ao botão clicado
    const paginaAtiva = document.getElementById(idPagina);
    if (paginaAtiva) {
        paginaAtiva.classList.add('active');
    }

    // 3. Atualiza o visual dos botões para mostrar qual está selecionado
    const botoes = document.querySelectorAll('.btn-nav');
    botoes.forEach(botao => {
        botao.classList.remove('active');
    });

    // Adiciona a classe 'active' ao botão que chamou a função
    event.currentTarget.classList.add('active');
}
