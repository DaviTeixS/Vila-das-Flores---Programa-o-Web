
function entrar(){

  let email = document.getElementById('email').value;
  let senha = document.getElementById('senha').value;

  let emailSalvo = localStorage.getItem('email');
  let senhaSalva = localStorage.getItem('senha');

  if(email === emailSalvo && senha === senhaSalva){

    alert('Login realizado!');

  } else {

    alert('Dados incorretos');

  }
}

function irCadastro(){

  
  let tipo = prompt("Digite: cliente ou fornecedor");

  
  tipo = tipo.toLowerCase();

  //cliente
  if(tipo === "cliente"){

    window.location.href = "Cadastro_Cliente_Julia.html";

  }

  // fornecedor
  else if(tipo === "fornecedor"){

    window.location.href = "Cadastro_Fornecedor_julia.html";

  }

  
  else{

    alert("Opção inválida! Digite cliente ou fornecedor.");

  }
}

