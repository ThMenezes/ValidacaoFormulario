const formulario = document.querySelector('#formulario')
const inputNome = document.querySelector('#nome')
const inputCpf = document.querySelector('#cpf')
const inputNascimento = document.querySelector('#nascimento')
const inputEmail = document.querySelector('#email')
const inputSenha = document.querySelector('#senha')
const inputSituacao = document.querySelector('#situacao')
const inputMensagem = document.querySelector('#mensagem')

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if(inputNome.value === "") {
        alert('Por favor, preencha seu nome.');
        return;
    }
})


