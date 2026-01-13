document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.project-item').forEach(el => {
            if (el !== item) el.classList.remove('active');
        });
        item.classList.toggle('active');
    });
});

const btnTopo = document.getElementById('btnTopo');
window.addEventListener('scroll', () => {
    btnTopo.classList.toggle('show', window.scrollY > 400);
});


// Seleciona o elemento da tabela
const tabelona = document.getElementById('tabelona');

// Adiciona evento de clique
tabelona.addEventListener('click', () => {
    // Copia o texto para a área de transferência
    navigator.clipboard.writeText(tabelona.innerText)
        .then(() => {
            alert('Tabela copiada para a área de transferência!');
        })
        .catch(err => {
            alert('Erro ao copiar tabela: ' + err);
        });
});
