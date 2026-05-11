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