let fornecedorLogado =
localStorage.getItem("fornecedorLogado");

let produtos =
JSON.parse(localStorage.getItem("produtos")) || [];

/* FILTRA APENAS PRODUTOS DO FORNECEDOR */

let meusProdutos =
produtos.filter(produto =>
    produto.fornecedor === fornecedorLogado
);

/* TOTAL DE PRODUTOS */

document.getElementById("totalProdutos").innerText =
meusProdutos.length;

/* VALOR TOTAL DOS PRODUTOS */

let valorTotal = 0;

meusProdutos.forEach(produto => {

    valorTotal += Number(produto.preco);

});

document.getElementById("valorTotal").innerText =
"R$ " + valorTotal.toFixed(2);

/* TOTAL DE CATEGORIAS */

let categorias = [];

meusProdutos.forEach(produto => {

    if(!categorias.includes(produto.categoria)){

        categorias.push(produto.categoria);

    }

});

document.getElementById("totalCategorias").innerText =
categorias.length;

/* MOSTRAR PRODUTOS NA TELA */

let listaProdutos =
document.getElementById("listaProdutos");

meusProdutos.forEach((produto, index) => {

    listaProdutos.innerHTML += `

    <div class="produto">

        <h3>${produto.nome}</h3>

        <p><strong>Categoria:</strong>
        ${produto.categoria}</p>

        <p><strong>Preço:</strong>
        R$ ${produto.preco}</p>

        <button onclick="removerProduto(${index})">
            Excluir Produto
        </button>

    </div>

    `;
});

/* REMOVER PRODUTO */

function removerProduto(index){

    let produtos =
    JSON.parse(localStorage.getItem("produtos")) || [];

    let meusProdutos =
    produtos.filter(produto =>
        produto.fornecedor === fornecedorLogado
    );

    let produtoRemover =
    meusProdutos[index];

    let novaLista =
    produtos.filter(produto =>
        produto !== produtoRemover
    );

    localStorage.setItem(
        "produtos",
        JSON.stringify(novaLista)
    );

    location.reload();
}