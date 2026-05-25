// produto.js — lógica da página de produtos

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function comprar(botao, nome, preco) {
    let span = botao.previousElementSibling.children[1];
    let quantidade = parseInt(span.textContent);

    if (quantidade <= 0) {
        alert("Selecione uma quantidade");
        return;
    }

    preco = parseFloat(preco);

    let produtoExistente = carrinho.find(produto => produto.nome === nome);

    if (produtoExistente) {
        produtoExistente.quantidade += quantidade;
    } else {
        carrinho.push({ nome: nome, preco: preco, quantidade: quantidade });
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    span.textContent = 0;
    alert(nome + " adicionado ao carrinho!");
}

function aumentarTemp(botao) {
    let span = botao.parentElement.children[1];
    span.textContent = parseInt(span.textContent) + 1;
}

function diminuirTemp(botao) {
    let span = botao.parentElement.children[1];
    let valor = parseInt(span.textContent);
    if (valor > 0) span.textContent = valor - 1;
}

// Produtos dinâmicos cadastrados por fornecedores
let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
let areaProdutos = document.getElementById("produtosDinamicos");

if (areaProdutos && produtos.length > 0) {
    produtos.forEach((produto) => {
        areaProdutos.innerHTML += `
        <div class="card-produto">
            <img src="${produto.imagem || 'images/flor1.jpg.jpeg'}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>R$ ${parseFloat(produto.preco).toFixed(2)}</p>
            <div class="quantidade">
                <button onclick="diminuirTemp(this)">-</button>
                <span>0</span>
                <button onclick="aumentarTemp(this)">+</button>
            </div>
            <button class="comprar" onclick="comprar(this,'${produto.nome}', ${produto.preco})">Comprar</button>
        </div>
        `;
    });
}

function pesquisar() {
    let textoBusca = document.getElementById("pesquisa").value.toLowerCase();
    let cards = document.querySelectorAll(".card-produto");
    cards.forEach(card => {
        let nome = card.querySelector("h3").innerText.toLowerCase();
        card.style.display = nome.includes(textoBusca) ? "" : "none";
    });
}