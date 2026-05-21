let carrinho =
JSON.parse(localStorage.getItem("carrinho")) || [];

let divCarrinho =
document.getElementById("carrinho");

let total = 0;

/* MOSTRAR CARRINHO */

function atualizarCarrinho(){

    divCarrinho.innerHTML = "";

    total = 0;

    if(carrinho.length === 0){

        divCarrinho.innerHTML += `

     

<div class="itemCarrinho">

...

            <h2>Seu carrinho está vazio</h2>

        </div>

        `;

        document.getElementById("quantidadeItens")
        .innerText = "";

        document.getElementById("total")
        .innerText = "";

        return;
    }

    carrinho.forEach((produto, index) => {

        total += produto.preco * produto.quantidade;

        divCarrinho.innerHTML += `

        <div class="card">

            <h3>${produto.nome}</h3>

            <p>
            Preço:
            R$ ${produto.preco.toFixed(2)}
            </p>

            <p>
            Quantidade:
            ${produto.quantidade}
            </p>

            <p>

            Subtotal:
            R$ ${(produto.preco * produto.quantidade).toFixed(2)}

            </p>

            <button onclick="removerItem(${index})">

                Remover

            </button>

        </div>

        `;
    });

    document.getElementById("quantidadeItens")
    .innerText =
    "Quantidade de itens: " + carrinho.length;

    document.getElementById("total")
    .innerText =
    "Total: R$ " + total.toFixed(2);

}

/* REMOVER ITEM */

function removerItem(index){

    if(!confirm("Deseja remover este item?")){
        return;
    }

    carrinho.splice(index, 1);

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    atualizarCarrinho();
}

/* LIMPAR CARRINHO */

function limparCarrinho(){

    if(!confirm("Deseja limpar o carrinho?")){
        return;
    }

    carrinho = [];

    localStorage.removeItem("carrinho");

    atualizarCarrinho();
}

/* FINALIZAR COMPRA */

function finalizarCompra(){

    if(carrinho.length === 0){

        alert("Carrinho vazio!");
        return;
    }

    if(!confirm("Deseja finalizar a compra?")){
        return;
    }

    alert("Compra finalizada com sucesso!");

    carrinho = [];

    localStorage.removeItem("carrinho");

    atualizarCarrinho();
}

atualizarCarrinho();