window.onload = function(){

    let tipoUsuario =
    localStorage.getItem("tipoUsuario");

    let painel =
    document.getElementById("painelFornecedor");

    if(tipoUsuario === "fornecedor"){

        painel.innerHTML = `

        <div class="painel-fornecedor">

            <a href="cadastroProdutos.html">
                <button>Cadastrar Produto</button>
            </a>

            <a href="meusProdutos.html">
                <button>Meus Produtos</button>
            </a>

            <a href="relatorioFornecedor.html">
                <button>Relatório</button>
            </a>

        </div>

        `;
    }

}