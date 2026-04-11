// Função para mudar a imagem da tampa com Cross-Fade flúido
function changeTampaImage(imagePath, colorName) {
    const activeTampa = document.getElementById('activeTampa');
    const colorDisplay = document.getElementById('colorName');
    
    // 1. Inicia o Fade-Out da imagem ativa atual (caso já esteja visível)
    activeTampa.classList.remove('show');
    
    // 2. Pequeno delay para garantir que o fade-out começou antes de trocar a imagem
    // Isso evita o 'pisca-pisca' da imagem carregando
    setTimeout(() => {
        // 3. Troca o caminho da imagem ATIVA (a que está por cima)
        activeTampa.src = imagePath;
        
        // 4. Atualiza o nome da cor
        colorDisplay.innerText = colorName;
        
        // 5. Inicia o Fade-In da NOVA imagem ativa
        // Adicionamos a classe 'show' que define opacidade 1 no CSS
        activeTampa.classList.add('show');
        
    }, 100); // 100ms é suficiente para o navegador processar a troca suavemente

    // 6. Gerencia o estado 'active' nas bolinhas da paleta
    document.querySelectorAll('.color-dot').forEach(dot => {
        dot.classList.remove('active');
    });
    // Adiciona o 'active' apenas na bolinha clicada (usamos event.currentTarget para segurança)
    if(event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}

// Inicia a página com a cor vermelha ativa (opcional, para garantir que comece bonito)
window.addEventListener('load', () => {
    // Engatilha a animação inicial para a cor que começa marcada como active no HTML
    document.getElementById('activeTampa').classList.add('show');
});

function trocarFoto(url, nome) {
    const imgElement = document.getElementById('mainTampa');
    const nomeElement = document.getElementById('nomeCor');
    
    // 1. Inicia o efeito de saída (fade out)
    imgElement.classList.add('changing');
    
    // 2. Espera o fade out (400ms) para trocar a imagem
    setTimeout(() => {
        imgElement.src = url;
        nomeElement.innerText = nome;
        
        // 3. Quando a nova imagem carregar, removemos o efeito (fade in)
        imgElement.onload = () => {
            imgElement.classList.remove('changing');
        };
    }, 400);

    // Atualiza a bolinha ativa na paleta
    document.querySelectorAll('.color-dot').forEach(dot => {
        dot.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
}