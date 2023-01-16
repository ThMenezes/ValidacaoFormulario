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

    if(inputEmail.value === "" || !isEmailValidacao(inputEmail.value)) {
        alert('Por favor, preencha seu email.');
        return;
    }

    if(!validacaoSenha(inputSenha.value, 8)) {
        alert('A senha precisa ser no mínimo 8 dígitos.');
        return;
    }

    if(inputSituacao.value == "") {
        alert('Por favor, selecione uma opção.');
        return;
    }

    formulario.submit()
})

// validação do email com regex
function isEmailValidacao(email) {
    const emailRegex = new RegExp (
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    if (emailRegex.test(email)) {
        return true
    }
    return false;
}

// validação de senha
function validacaoSenha(senha, minDigitos) {
    if(senha.length >= minDigitos) {
        return true
    }
    return false
}


