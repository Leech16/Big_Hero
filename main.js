//Seção dos botões do Header. (em teste)
const heroSection = document.querySelector('.hero');
const alturaHero = heroSection.clientHeight;

window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual > alturaHero) {
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader
        }
})


function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}