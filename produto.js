// Recupera carrinho salvo
let carrinho =
    JSON.parse(localStorage.getItem("carrinho")) || [];


// função de compra
function comprar(botao, nome, preco) {

    let quantidade = parseInt(
        botao.previousElementSibling.children[1].textContent
    );

    if (quantidade <= 0) {

        alert("Selecione uma quantidade!");

        return;
    }

    let produtoExistente =
        carrinho.find(
            produto => produto.nome === nome
        );

    if (produtoExistente) {

        produtoExistente.quantidade += quantidade;

    } else {

        carrinho.push({
            nome: nome,
            preco: preco,
            quantidade: quantidade
        });
    }

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    alert(nome + " adicionado ao carrinho!");
}


// função que contabiliza pra mais ao clicar +
function aumentarTemp(botao) {

    let span = botao.parentElement.children[1];

    let valor = parseInt(span.textContent);

    span.textContent = valor + 1;
}


// função que contabiliza pra menos ao clicar -
function diminuirTemp(botao) {

    let span = botao.parentElement.children[1];

    let valor = parseInt(span.textContent);

    if (valor > 0) {

        span.textContent = valor - 1;
    }
}
let produtos =
    JSON.parse(localStorage.getItem("produtos")) || [];

let areaProdutos =
    document.getElementById("produtosDinamicos");

produtos.forEach((produto, index) => {

    areaProdutos.innerHTML += `

   <div class="produto-card">

    <h3>${produto.nome}</h3>

    <p>Categoria: ${produto.categoria}</p>

    <p>Preço: R$ ${produto.preco}</p>

    <p>Fornecedor: ${produto.fornecedor}</p>

    <button onclick="removerProduto(${index})">
        Excluir Produto
    </button>

</div>

       
    `;
    function removerProduto(index){

    let produtos =
    JSON.parse(localStorage.getItem("produtos")) || [];

    produtos.splice(index, 1);

    localStorage.setItem(
        "produtos",
        JSON.stringify(produtos)
    );

    location.reload();
}
});