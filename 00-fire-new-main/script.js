window.onload = function () {
    // Função de rolar
    function scrollPage(offset) {
        window.scrollBy({
            top: offset,
            behavior: 'smooth'
        });
    }

    // Botões do topo
    document.getElementById('up-top').addEventListener('click', function () {
        scrollPage(-500);
    });

    document.getElementById('down-top').addEventListener('click', function () {
        scrollPage(500);
    });

    // Botões do fim
    document.getElementById('up-bottom').addEventListener('click', function () {
        scrollPage(-500);
    });

    document.getElementById('down-bottom').addEventListener('click', function () {
        scrollPage(500);
    });

    // Navegação entre páginas
    document.getElementById('prevPage').addEventListener('click', function () {
        window.location.href = 'pagina1.html';
    });

    document.getElementById('nextPage').addEventListener('click', function () {
        window.location.href = 'pagina3.html';
    });
};
