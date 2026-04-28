const scriptURL = 'https://script.google.com/macros/s/AKfycbwA6VWu_2YwKxuCMDI8Z2Tq4kYlc_YOSBm3evn4g-DMp9MgBpRvuYJl99UCKRUQMwUXUw/exec';
const form = document.getElementById('form-contato-sheets');
const btnEnviar = document.getElementById('btn-enviar-sheets');
const btnTexto = btnEnviar.querySelector('span');

// --- FUNÇÃO DO ALERTA PERSONALIZADO ---
function showToast(mensagem, tipo = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${tipo}`;
    toast.innerText = mensagem;

    container.appendChild(toast);

    // Remove o alerta após 4 segundos
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 4000);
}

// --- MÁSCARA DE TELEFONE ---
const handlePhone = (event) => {
    let input = event.target;
    input.value = phoneMask(input.value);
}

const phoneMask = (value) => {
    if (!value) return "";
    value = value.replace(/\D/g, ''); // Remove tudo que não é número
    value = value.replace(/(\d{2})(\d)/, "($1) $2"); // Coloca parênteses no DDD
    value = value.replace(/(\d{5})(\d)/, "$1-$2"); // Coloca hífen no número
    return value.substring(0, 15); // Limita o tamanho
}

// Aplica a máscara no input de telefone
const inputTelefone = document.getElementById('telefone-contato');
inputTelefone.addEventListener('keyup', handlePhone);


// --- ENVIO DO FORMULÁRIO ---
form.addEventListener('submit', e => {
    e.preventDefault();

    btnEnviar.disabled = true;
    btnTexto.innerText = 'Enviando...';

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        showToast('Enviado com sucesso! Entraremos em contato.');
        form.reset();
    })
    .catch(error => {
        console.error('Erro!', error.message);
        showToast('Erro ao enviar dados. Tente novamente.', 'error');
    })
    .finally(() => {
        btnEnviar.disabled = false;
        btnTexto.innerText = 'Vai para Google Sheets';
    });
});