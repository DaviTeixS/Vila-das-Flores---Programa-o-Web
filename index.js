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