const formulario = document.querySelector('#formulario')
const inputNome = document.querySelector('#nome')
const inputCpf = document.querySelector('#cpf')
const inputNascimento = document.querySelector('#nascimento')
const inputEmail = document.querySelector('#email')
const inputSenha = document.querySelector('#senha')
const inputSituacao = document.querySelector('#situacao')
const inputMensagem = document.querySelector('#mensagem')

const progresso = document.querySelector("#progresso");

const modal = document.querySelector("#modal");
const fecharBotao = document.querySelector('#fechar-botao');
const modalMensagem = document.querySelector('.modal-mensagem');

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if(inputNome.value === "") {
        mostrarModal('Por favor, preencha seu nome.');
        return;
    }

    if(inputCpf.value === "") {
        mostrarModal('Por favor, insira os números do CPF.');
        return;
    }

    if(inputNascimento.value === "") {
        mostrarModal('Por favor, preencha sua data de nascimento.');
        return;
    }

    if(inputEmail.value === "" || !isEmailValidacao(inputEmail.value)) {
        mostrarModal('Por favor, preencha seu email.');
        return;
    }

    if(!validacaoSenha(inputSenha.value, 8)) {
        mostrarModal('A senha precisa ser no mínimo 8 dígitos.');
        return;
    }

    if(inputSituacao.value == "") {
        mostrarModal('Por favor, selecione uma opção.');
        return;
    }

    if (inputMensagem.value === "") {
        mostrarModal("Por favor, escreva uma mensagem");
        return;
      }

    formulario.submit()

    progresso.value = 0;
});

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

// Atualiza a barra de progresso ao preencher o formulário
formulario.addEventListener("input", () => {
    const todosInputs = formulario.elements.length - 1;
    let camposCompletos = 0;
  
    // Conta o número de campos preenchidos
    for (let i = 0; i < todosInputs; i++) {
      if (formulario.elements[i].value) {
        camposCompletos++;
      }
    }
  
    // Atualiza o valor da barra de progresso
    progresso.value = (camposCompletos / todosInputs) * 100;
  });

// Exibir e fechar modal
function mostrarModal(msg) {
    modalMensagem.textContent = msg;
    modal.style.display = "block";
  }
  
    fecharBotao.addEventListener("click", () => {
    modal.style.display = "none";
  });
  
  window.addEventListener("click", (evento) => {
    if (evento.target === modal) {
      modal.style.display = "none";
    }
  });