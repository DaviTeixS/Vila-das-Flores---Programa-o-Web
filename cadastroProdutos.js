function cadastrarProduto(){

    let nome =
    document.getElementById("nomeProduto").value;

    let preco =
    document.getElementById("precoProduto").value;

    let categoria =
    document.getElementById("categoria").value;

    let tipoUsuario =
    localStorage.getItem("tipoUsuario");

    if(tipoUsuario !== "fornecedor"){

        alert("Apenas fornecedores podem cadastrar produtos!");

        window.location.href = "index.html";

        return;
    }

    if(nome == ""){
        alert("Digite o nome do produto!");
        return;
    }

    if(preco <= 0){
        alert("Preço inválido!");
        return;
    }

    if(categoria == ""){
        alert("Selecione uma categoria!");
        return;
    }

    let fornecedor =
    localStorage.getItem("fornecedorLogado");

    let produtos =
    JSON.parse(localStorage.getItem("produtos")) || [];

     let novoProduto = {
        nome,
        preco,
        categoria,
        fornecedor
    };
    if (
    nome.trim() === "" ||
    categoria.trim() === "" ||
    preco === "" ||
    quantidade === ""
) {
    alert("Preencha todos os campos");
    return;
}

if (isNaN(preco) || preco <= 0) {
    alert("Preço inválido");
    return;
}

if (isNaN(quantidade) || quantidade <= 0) {
    alert("Quantidade inválida");
    return;
}

let produtoExistente = produtos.find(
    produto => produto.nome.toLowerCase() === nome.toLowerCase()
);

if (produtoExistente) {
    alert("Produto já cadastrado");
    return;
}

    produtos.push(novoProduto);

    localStorage.setItem(
        "produtos",
        JSON.stringify(produtos)
    );

    alert("Produto cadastrado com sucesso!");

    document.getElementById("nomeProduto").value = "";
    document.getElementById("precoProduto").value = "";
    document.getElementById("categoria").value = "";
}