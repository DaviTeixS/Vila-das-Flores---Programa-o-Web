
function entrar() {

  let email =
    document.getElementById("email").value;

  let senha =
    document.getElementById("senha").value;

  let usuarios =
    JSON.parse(localStorage.getItem("usuarios")) || [];

  let fornecedores =
    JSON.parse(localStorage.getItem("fornecedores")) || [];

let usuarioEncontrado =
usuarios.find(usuario =>
    usuario.email === email &&
    usuario.senha === senha
);

let fornecedorEncontrado =
fornecedores.find(fornecedor =>
    fornecedor.email === email &&
    fornecedor.senha === senha
);

if(usuarioEncontrado){

    localStorage.setItem(
        "tipoUsuario",
        "cliente"
    );

    alert("Login realizado!");

    window.location.href = "index.html";

}
else if(fornecedorEncontrado){

    localStorage.setItem(
        "tipoUsuario",
        "fornecedor"
    );

    localStorage.setItem(
        "fornecedorLogado",
        fornecedorEncontrado.email
    );

    alert("Login realizado!");

    window.location.href = "index.html";

}
else{ alert("Email ou senha incorretos!");

}

function irCadastro() {


  let tipo = prompt("Digite: cliente ou fornecedor");


  tipo = tipo.toLowerCase();

  //cliente
  if (tipo === "cliente") {

    window.location.href = "Cadastro Cliente_Julia.html";

  }

  // fornecedor
  else if (tipo === "fornecedor") {

    window.location.href = "Cadastro Fornecedor_julia.html";

  }


  else {

    alert("Opção inválida! Digite cliente ou fornecedor.");

  }
}
}
