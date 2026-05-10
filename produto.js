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