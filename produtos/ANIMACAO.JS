// Função para girar o card
function flipCard(cardId) {
    const card = document.getElementById(cardId);
    card.classList.toggle('flipped');
}

// Opcional: Fechar outros cards ao abrir um novo (opcional)
/*
function flipCard(cardId) {
    document.querySelectorAll('.product-card').forEach(c => {
        if(c.id !== cardId) c.classList.remove('flipped');
    });
    document.getElementById(cardId).classList.toggle('flipped');
}
*/