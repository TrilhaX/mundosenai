function verificarResposta() {
    const resposta = document.getElementById('resposta').value.trim().toLowerCase();
    const resultado = document.getElementById('resultado');
    
    // Frase atribuída a Steve Jobs
    const respostaCorreta = "steve jobs";

    if (resposta === respostaCorreta) {
        resultado.textContent = "Correto! A frase é de Steve Jobs.";
        resultado.style.color = 'black';
    } else {
        resultado.textContent = "Incorreto. Tente novamente!";
        resultado.style.color = 'black';
    }
}