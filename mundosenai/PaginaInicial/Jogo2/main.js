function verificarResposta() {
    const resposta = document.getElementsByClassName('input').value.trim().toLowerCase();
    const resultado = document.getElementById('resultado');
    
    // Frase atribuída a Albert Einstein
    const respostaCorreta = "albert einstein";

    if (resposta === respostaCorreta) {
        resultado.textContent = "Correto! A frase é de Albert Einstein.";
        resultado.style.color = 'white';
    } else {
        resultado.textContent = "Incorreto. Tente novamente!";
        resultado.style.color = 'white';
    }
}