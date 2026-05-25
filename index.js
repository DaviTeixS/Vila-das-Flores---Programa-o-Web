window.onload = function () {
    let tipoUsuario = localStorage.getItem("tipoUsuario");
    let painel = document.getElementById("painelFornecedor");
    let btnSair = document.getElementById("btnSair");
    let btnLogin = document.getElementById("btnLogin");
    let iconeLogado = document.getElementById("iconeLogado");
    let linkRelatorio = document.getElementById("linkRelatorio");

    // Esconde tudo por padrão
    btnSair.style.display = "none";
    iconeLogado.style.display = "none";

    if (tipoUsuario) {
        // Está logado: esconde botão login, mostra ícone e botão sair
        btnLogin.style.display = "none";
        iconeLogado.style.display = "flex";
        btnSair.style.display = "block";
    }

    // Relatório só para fornecedor
    if (tipoUsuario === "fornecedor") {
        linkRelatorio.style.display = "inline";

        painel.innerHTML = `
        <div style="display:flex; gap:1rem; padding:1rem 2.5rem; background:#f0ebe3; flex-wrap:wrap;">
            <a href="cadastroProdutos.html"><button class="btn-painel">Cadastrar Produto</button></a>
            <a href="meusProdutos.html"><button class="btn-painel">Meus Produtos</button></a>
            <a href="relatorioFornecedor.html"><button class="btn-painel">Relatório</button></a>
        </div>
        `;
    }
}

function sair() {
    localStorage.removeItem("tipoUsuario");
    localStorage.removeItem("fornecedorLogado");
    location.reload();
}

// PASSO 1: Scroll suave até contato + efeito brilho
document.addEventListener("DOMContentLoaded", function () {
    let btnContato = document.getElementById("btnContato");

    btnContato.addEventListener("click", function (e) {
        e.preventDefault();
        let footer = document.getElementById("contato");
        footer.scrollIntoView({ behavior: "smooth" });

        // Aguarda o scroll terminar e aplica o brilho
        setTimeout(function () {
            let infoContato = document.getElementById("info-contato");
            infoContato.classList.add("brilho-contato");
            setTimeout(function () {
                infoContato.classList.remove("brilho-contato");
            }, 2000);
        }, 700);
    });
});