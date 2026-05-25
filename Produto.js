window.onload = function () {

    let tipoUsuario =
    localStorage.getItem("tipoUsuario");

    let painel =
    document.getElementById("painelFornecedor");

    let btnSair =
    document.getElementById("btnSair");

    // começa escondido
    btnSair.style.display = "none";

    // só aparece se tiver login
    if(tipoUsuario){

        btnSair.style.display = "block";
    }

    // painel fornecedor
    if(tipoUsuario === "fornecedor"){

        painel.innerHTML = `
        <a href="cadastroProdutos.html">
            <button>Cadastrar Produto</button>
        </a>

        <a href="meusProdutos.html">
            <button>Meus Produtos</button>
        </a>

        <a href="relatorioFornecedor.html">
            <button>Relatório</button>
        </a>
        `;
    }
}

function sair(){

    localStorage.removeItem("tipoUsuario");
    localStorage.removeItem("fornecedorLogado");

    location.reload();
}













let carrinho =JSON.parse(localStorage.getItem("carrinho")) || [];

function comprar(botao, nome, preco) {

    let span =
    botao.previousElementSibling.children[1];

    let quantidade =
    parseInt(span.textContent);

    if (quantidade <= 0) {
        alert("Selecione uma quantidade");
        return;
    }

    preco = parseFloat(preco);

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

    span.textContent = 0;

    alert(nome + " adicionado ao carrinho!");
}

function aumentarTemp(botao){

    let span =
    botao.parentElement.children[1];

    let valor =
    parseInt(span.textContent);

    span.textContent = valor + 1;
}

function diminuirTemp(botao){

    let span =
    botao.parentElement.children[1];

    let valor =
    parseInt(span.textContent);

    if(valor > 0){

        span.textContent = valor - 1;
    }
}

let produtos =
JSON.parse(localStorage.getItem("produtos")) || [];

let areaProdutos =
document.getElementById("produtosDinamicos");

if(areaProdutos){

    produtos.forEach((produto, index) => {

        areaProdutos.innerHTML += `

        <div class="produto-card">

            <h3>${produto.nome}</h3>

            <p>${produto.categoria}</p>

            <p>R$ ${produto.preco}</p>

        </div>

        `;
    });}

  function pesquisar(){

    let textoBusca =
    document.getElementById("pesquisa")
    .value
    .toLowerCase();

    let produtos =
    document.querySelectorAll(".card-produto");

    produtos.forEach(produto => {

        let nome =
        produto.querySelector("h3")
        .innerText
        .toLowerCase();

        if(nome.includes(textoBusca)){

            produto.style.display = "";

        }else{

            produto.style.display = "none";
        }
    });
}