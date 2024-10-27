function formatarNome() {
  let nomeInput = document.getElementById('nome');
  let palavras = nomeInput.value.toLowerCase().split(" ");
  for (let i = 0; i < palavras.length; i++) {
    palavras[i] = palavras[i].charAt(0).toUpperCase() + palavras[i].slice(1);
  }
  nomeInput.value = palavras.join(" ");
}

function calcularIdade() {
  let dataNasc = document.getElementById('dataNascimento').value;
  let idadeInput = document.getElementById('idade');
  if (dataNasc) {
    let hoje = new Date();
    let nascimento = new Date(dataNasc);

    // Verificar se a data de nascimento é no futuro
    if (nascimento > hoje) {
      alert("Data de nascimento não pode ser no futuro.");
      idadeInput.value = '';
      return;
    }

    let idade = hoje.getFullYear() - nascimento.getFullYear();
    let mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
    idadeInput.value = idade;
  } else {
    idadeInput.value = '';
  }
}

function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, '');
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  return resto === parseInt(cpf.charAt(10));
}

function validarSenha() {
  const senha = document.getElementById("senha").value;
  const confirmacaoSenha = document.getElementById("confirmacaoSenha").value;
  if (senha !== confirmacaoSenha) {
    alert("As senhas não coincidem.");
    return false;
  }
  return true;
}

function mascaraCPF(input) {
  input.value = input.value.replace(/\D/g, '')
                           .replace(/(\d{3})(\d)/, '$1.$2')
                           .replace(/(\d{3})(\d)/, '$1.$2')
                           .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

function mascaraTelefone(input) {
  input.value = input.value.replace(/\D/g, '')
                           .replace(/^(\d{2})(\d)/g, '($1) $2')
                           .replace(/(\d{5})(\d)/, '$1-$2');
}

function validarFormulario() {
  const cpf = document.getElementById("cpf").value;
  if (!validarCPF(cpf)) {
    alert("CPF inválido.");
    return false;
  }
  return validarSenha();
}
