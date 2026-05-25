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


















// Recupera os produtos salvos no localStorage
// Se não existir nada, cria um array vazio
let carrinho =
    JSON.parse(localStorage.getItem("carrinho")) || [];



// Pega a div do HTML onde os produtos serão mostrados
let divCarrinho =
    document.getElementById("carrinho");



// Variável que guarda o valor total da compra
let total = 0;



/* MOSTRAR CARRINHO */

function atualizarCarrinho() {

    // Limpa o conteúdo da div antes de atualizar
    divCarrinho.innerHTML = "";

    // Reinicia o total da compra
    total = 0;

    // Verifica se o carrinho está vazio
    if (carrinho.length === 0) {

        // Mostra mensagem de carrinho vazio
        divCarrinho.innerHTML += `

        <div class="itemCarrinho">
        <h2>Seu carrinho está vazio</h2></div>
                      `;

        // Limpa texto da quantidade
        document.getElementById("quantidadeItens")
            .innerText = "";

        // Limpa texto do total
        document.getElementById("total")
            .innerText = "";

        // Encerra a função
        return;
    }

    // Percorre todos os produtos do carrinho
    carrinho.forEach((produto, index) => {

        // Soma o valor total da compra
        // preço x quantidade
        total +=
        Number(produto.preco) *
        Number(produto.quantidade);

        // Adiciona os produtos na tela
        divCarrinho.innerHTML += `

        <div class="itemCarrinho">

            <!-- Nome do produto -->
            <h3>${produto.nome}</h3>

            <!-- Preço unitário -->
            <p>
            Preço:
            R$ ${produto.preco.toFixed(2)}
            </p>

            <!-- Quantidade do produto -->
   <div class="quantidade-carrinho">
<button onclick="alterarQuantidade(${index}, -1)">
        -
</button>

    <span>
        ${produto.quantidade}
    </span>

    <button onclick="alterarQuantidade(${index}, 1)">
        +
    </button>

</div>
            <!-- Valor total daquele produto -->
            <p>

            Subtotal:
            R$ ${(produto.preco * produto.quantidade).toFixed(2)}

            </p>

            <!-- Remove o produto do carrinho -->
            <button class="remover" onclick="removerItem(${index})">

                Remover

            </button>

        </div>

        `;
    });

    // Variável para guardar total de itens
    let quantidadeTotal = 0;

    // Soma todas as quantidades dos produtos
    carrinho.forEach(produto => {

        quantidadeTotal += produto.quantidade;

    });

    // Mostra quantidade total de itens
    document.getElementById("quantidadeItens")
        .innerText =
        "Quantidade de itens: " + quantidadeTotal;

    // Mostra valor total da compra
    document.getElementById("total")
        .innerText =
        "Total: R$ " + total.toFixed(2);

}

/* REMOVER ITEM */

function removerItem(index) {

    // Pergunta se deseja remover
    if (!confirm("Deseja remover este item?")) {
        return;
    }

    // Remove item do array
    carrinho.splice(index, 1);

    // Atualiza localStorage
    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    // Atualiza tela do carrinho
    atualizarCarrinho();
}

/* LIMPAR CARRINHO */

function limparCarrinho() {

    // Pergunta confirmação
    if (!confirm("Deseja limpar o carrinho?")) {
        return;
    }

    // Esvazia array
    carrinho = [];

    // Remove dados do localStorage
    localStorage.removeItem("carrinho");

    // Atualiza tela
    atualizarCarrinho();
}

/* ALTERAR QUANTIDADE */

function alterarQuantidade(index, valor){

    // Aumenta ou diminui quantidade
    carrinho[index].quantidade += valor;

    // Se quantidade ficar menor ou igual a 0
    // remove o produto
    if(carrinho[index].quantidade <= 0){

        carrinho.splice(index, 1);

    }

    // Atualiza localStorage
    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    // Atualiza carrinho na tela
    atualizarCarrinho();
}

/* FINALIZAR COMPRA */

function finalizarCompra() {

    // Verifica se carrinho está vazio
    if (carrinho.length === 0) {

        alert("Carrinho vazio!");
        return;
    }

    // Pergunta confirmação da compra
    if (!confirm("Deseja finalizar a compra?")) {
        return;
    }

    // Mostra mensagem de sucesso
    alert("Compra finalizada com sucesso!");

    // Limpa carrinho
    carrinho = [];

    // Remove carrinho do localStorage
    localStorage.removeItem("carrinho");

    // Atualiza tela
    atualizarCarrinho();
}

// Executa função ao abrir a página
atualizarCarrinho();