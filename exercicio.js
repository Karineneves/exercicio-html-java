function validarFormulario(event) {
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const mensagem = document.getElementById('mensagem');

    if (campoB <= campoA) {
        mensagem.textContent = 'O número B deve ser maior que o número A.';
        mensagem.style.color = 'red';
        event.preventDefault();
    } else {
        mensagem.textContent = 'Formulário enviado com sucesso!';
        mensagem.style.color = 'green';
    }
}