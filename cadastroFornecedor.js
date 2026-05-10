//Cadasatro de Fornecedor- julia?

function cadastrarFornecedor(){

  let nome = document.getElementById('nome').value;
  let cnpj = document.getElementById('cnpj').value;
  let telefone = document.getElementById('telefone').value;
  let cep = document.getElementById('cep').value;

  let email = document.getElementById('email').value;
  let senha = document.getElementById('senha').value;

  if(!/^[A-Za-zÀ-ÿ\s]+$/.test(nome)){
    alert("Nome inválido! Digite apenas letras.");
    return;
  }
  if(!/^[0-9]+$/.test(cnpj)){
    alert("CNPJ inválido! Digite apenas números.");
    return;
  }
  if(!/^[0-9]+$/.test(telefone)){
    alert("Telefone inválido! Digite apenas números.");
    return;
  }
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

  alert("Fornecedor cadastrado!");

}
