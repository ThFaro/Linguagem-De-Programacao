document.addEventListener('DOMContentLoaded', function () {
    const teclas = document.querySelectorAll('.tecla');
    const input = document.querySelector('input');

    teclas.forEach(tecla => {
        tecla.addEventListener('click', function () {
            const valorTecla = this.textContent;
            input.value += valorTecla;
        });
    });
});