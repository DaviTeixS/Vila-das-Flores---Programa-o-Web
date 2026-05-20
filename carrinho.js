let total = 0;

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

//função que atualiza o carrinho 
function atualizarCarrinho() {

    let lista = document.getElementById("listaCarrinho");
    lista.innerHTML = "";

    total = 0;

if (carrinho.length === 0) {

    lista.innerHTML =
    "<h2>Carrinho vazio</h2>";

    document.getElementById("total")
    .textContent = "0.00";

    return;
}

    carrinho.forEach((produto, index) => {
        let item = document.createElement("div");
        item.classList.add("card");
        item.innerHTML = `

${produto.nome}
<br>
Preço: R$ ${produto.preco.toFixed(2)}       
<br>
<br>
<button onclick="diminuirQuantidade(${index})">-
</button>

${produto.quantidade}
<button onclick="aumentarQuantidade(${index})">+
</button>
<br>

<br>
Subtotal:
R$ ${(produto.preco * produto.quantidade).toFixed(2)}  
<br>

<br>
<button onclick="removerItem(${index})">
Remover
</button>
`;

        lista.appendChild(item);
        total += produto.preco * produto.quantidade;

    });
    document.getElementById("total").textContent =
        total.toFixed(2); //fixa duas casas decimais 
}


// função que aumenta quantidade no carrinho
function aumentarQuantidade(index) {

    carrinho[index].quantidade++;

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    atualizarCarrinho();
}


// função que diminui quantidade no carrinho
function diminuirQuantidade(index) {

    if (carrinho[index].quantidade > 1) {

        carrinho[index].quantidade--;

    } else {

        carrinho.splice(index, 1);
    }

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    atualizarCarrinho();
}

// função que remove item do carrinho
function removerItem(index) {

    carrinho.splice(index, 1);

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    atualizarCarrinho();
}
atualizarCarrinho();

//função que finaliza compra
function finalizarCompra() {

    alert("Compra finalizada com sucesso!");

    carrinho = [];

    localStorage.removeItem("carrinho");

    atualizarCarrinho();
}

