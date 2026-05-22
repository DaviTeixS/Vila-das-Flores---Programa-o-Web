function cadastrarProduto() {
    let nome = document.getElementById("nomeProduto").value.trim();
    let preco = parseFloat(document.getElementById("precoProduto").value);
    let categoria = document.getElementById("categoria").value;
    let quantidade = parseInt(document.getElementById("quantidadeProduto").value);
    let imagem = document.getElementById("imagemProduto").value.trim();

    let tipoUsuario = localStorage.getItem("tipoUsuario");

    if (tipoUsuario !== "fornecedor") {
        alert("Apenas fornecedores podem cadastrar produtos!");
        window.location.href = "index.html";
        return;
    }

    if (nome === "" || categoria === "" || isNaN(preco) || isNaN(quantidade)) {
        alert("Preencha todos os campos obrigatórios!");
        return;
    }

    if (preco <= 0) {
        alert("Preço inválido!");
        return;
    }

    if (quantidade <= 0) {
        alert("Quantidade inválida!");
        return;
    }

    let fornecedor = localStorage.getItem("fornecedorLogado");
    let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

    let produtoEditando = localStorage.getItem("produtoEditando");

    if (produtoEditando !== null) {
        let index = parseInt(produtoEditando);

        produtos[index] = {
            ...produtos[index],
            nome,
            preco,
            categoria,
            quantidade,
            imagem,
            fornecedor
        };

        localStorage.removeItem("produtoEditando");
        alert("Produto editado com sucesso!");
    } else {
        let produtoExistente = produtos.find(produto =>
            produto.nome.toLowerCase() === nome.toLowerCase() &&
            produto.fornecedor === fornecedor
        );

        if (produtoExistente) {
            alert("Produto já cadastrado!");
            return;
        }

        let novoProduto = {
            nome,
            preco,
            categoria,
            quantidade,
            imagem,
            fornecedor
        };

        produtos.push(novoProduto);
        alert("Produto cadastrado com sucesso!");
    }

    localStorage.setItem("produtos", JSON.stringify(produtos));

    document.getElementById("nomeProduto").value = "";
    document.getElementById("precoProduto").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("quantidadeProduto").value = "";
    document.getElementById("imagemProduto").value = "";

    window.location.href = "meusProdutos.html";
}

window.onload = function () {
    let produtoEditando = localStorage.getItem("produtoEditando");

    if (produtoEditando !== null) {
        let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
        let produto = produtos[parseInt(produtoEditando)];

        if (produto) {
            document.getElementById("nomeProduto").value = produto.nome;
            document.getElementById("precoProduto").value = produto.preco;
            document.getElementById("categoria").value = produto.categoria;
            document.getElementById("quantidadeProduto").value = produto.quantidade;
            document.getElementById("imagemProduto").value = produto.imagem || "";
        }
    }
};