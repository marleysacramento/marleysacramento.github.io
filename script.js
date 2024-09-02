function mostrarPagina(secao) {
    // Esconder todas as secoes
    var secoes = document.querySelectorAll('.conteudo');
    secoes.forEach(function(section) {
        section.style.display = 'none';
    });

    // Mostrar a secao selecionada
    document.getElementById(secao).style.display = 'block';
}

// Exibir a seção inicial quando a página carregar
document.addEventListener("DOMContentLoaded", function() {
    mostrarPagina('home');
});
