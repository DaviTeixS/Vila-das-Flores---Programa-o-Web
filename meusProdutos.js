// =========================
// PRODUTOS
// =========================

let produtos =
    JSON.parse(localStorage.getItem("produtos")) || [];

// =========================
// ELEMENTOS
// =========================

const lista =
    document.getElementById("listaProdutos");

// =========================
// RENDERIZAR PRODUTOS
// =========================

function renderizarProdutos(){

    lista.innerHTML = "";

    // Nenhum produto
    if(produtos.length === 0){

        lista.innerHTML = `

        <div class="produto">

            <div class="produto-info">

                <h3>
                    Nenhum produto cadastrado
                </h3>

                <p>
                    Adicione produtos para começar.
                </p>

            </div>

        </div>

        `;

        return;
    }

    // Mostrar produtos
    produtos.forEach((produto, index) => {

        lista.innerHTML += `

        <div class="produto">

            <img
                src="${produto.imagem}"
                alt="${produto.nome}"
            >

            <div class="produto-info">

                <h3>
                    ${produto.nome}
                </h3>

                <p>
                    Categoria:
                    ${produto.categoria || "Sem categoria"}
                </p>

                <p class="preco">
                    R$ ${Number(produto.preco).toFixed(2)}
                </p>

                <p>
                    Estoque:
                    ${produto.estoque || 0}
                </p>

                <div class="botoes">

                    <button
                        class="btn-editar"
                        onclick="editarProduto(${index})"
                    >
                        Editar Produto
                    </button>

                    <button
                        class="btn-remover"
                        onclick="removerProduto(${index})"
                    >
                        Excluir Produto
                    </button>

                </div>

            </div>

        </div>

        `;

    });

}

// =========================
// REMOVER
// =========================

function removerProduto(index){

    const confirmar =
        confirm(
            "Deseja excluir este produto?"
        );

    if(!confirmar){
        return;
    }

    produtos.splice(index, 1);

    localStorage.setItem(
        "produtos",
        JSON.stringify(produtos)
    );

    renderizarProdutos();

}

// =========================
// EDITAR
// =========================

function editarProduto(index){

    const produto = produtos[index];

    const novoNome =
        prompt(
            "Novo nome:",
            produto.nome
        );

    if(novoNome === null){
        return;
    }

    const novoPreco =
        prompt(
            "Novo preço:",
            produto.preco
        );

    if(novoPreco === null){
        return;
    }

    const novoEstoque =
        prompt(
            "Novo estoque:",
            produto.estoque
        );

    if(novoEstoque === null){
        return;
    }

    produto.nome = novoNome;
    produto.preco = novoPreco;
    produto.estoque = novoEstoque;

    localStorage.setItem(
        "produtos",
        JSON.stringify(produtos)
    );

    renderizarProdutos();

}

// =========================
// INICIAR
// =========================

renderizarProdutos();