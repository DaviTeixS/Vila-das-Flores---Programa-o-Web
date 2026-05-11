//cadastro CLIENTE JS- julia?


function cadastroClientes(){

  let nome = document.getElementById('nome').value;
  let cpf = document.getElementById('cpf').value;
  let telefone = document.getElementById('telefone').value;
  let cep = document.getElementById('cep').value;

  let email = document.getElementById('email').value;
  let senha = document.getElementById('senha').value;

  // 🔵 VALIDAÇÃO NOME
  if(!/^[A-Za-zÀ-ÿ\s]+$/.test(nome)){
    alert("Nome inválido! Digite apenas letras.");
    return;
  }

  // 🔵 VALIDAÇÃO CPF
  if(!/^[0-9]+$/.test(cpf)){
    alert("CPF inválido! Digite apenas números.");
    return;
  }

  // 🔵 VALIDAÇÃO TELEFONE
  if(!/^[0-9]+$/.test(telefone)){
    alert("Telefone inválido! Digite apenas números.");
    return;
  }

  // 🔵 VALIDAÇÃO CEP
  if(!/^[0-9]+$/.test(cep)){
    alert("CEP inválido! Digite apenas números.");
    return;
  }

  if(!email.includes('@')){
    alert("Email precisa ter @");
    return;
  }

  if(senha.length < 6){
    alert("Senha precisa ter no mínimo 6 caracteres");
    return;
  }
// agora salva vários usuários, antes tava só 1 
let usuarios =
JSON.parse(localStorage.getItem("usuarios")) || [];

let novoUsuario = {
    nome,
    email,
    senha
};

usuarios.push(novoUsuario);

localStorage.setItem(
    "usuarios",
    JSON.stringify(usuarios)
);
//
  alert("Cadastro realizado!");

  window.location.href = "Login_julia.html";
}

