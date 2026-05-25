// nav.js — Header universal do Vila das Flores
// Injeta o menu em todas as páginas e controla login/logout

function criarHeader() {
    let tipoUsuario = localStorage.getItem("tipoUsuario");
    let paginaAtual = window.location.pathname.split("/").pop();

    // Monta os itens do nav
    let linkRelatorio = tipoUsuario === "fornecedor"
        ? `<a href="relatorioFornecedor.html">Relatório</a>`
        : "";

    // Botão de login ou ícone de logado
    let areaLogin = tipoUsuario
        ? `<div class="usuario-logado" id="iconeLogado" title="Logado">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                    <circle cx="12" cy="8" r="4"/>
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                </svg>
           </div>
           <button id="btnSair" onclick="sairNav()">Sair</button>`
        : `<a class="botao-login" href="Login_julia.html">Login</a>`;

    // Botão carrinho (só aparece fora do carrinho)
    let btnCarrinho = paginaAtual !== "carrinho.html"
        ? `<a href="carrinho.html" class="botao-carrinho">🛒 Carrinho</a>`
        : "";

    // Painel fornecedor (só quando logado como fornecedor)
    let painelFornecedor = tipoUsuario === "fornecedor"
        ? `<div id="painelFornecedor" style="display:flex; gap:1rem; padding:0.75rem 2.5rem; background:#f0ebe3; flex-wrap:wrap;">
               <a href="cadastroProdutos.html"><button class="btn-painel">Cadastrar Produto</button></a>
               <a href="meusProdutos.html"><button class="btn-painel">Meus Produtos</button></a>
               <a href="relatorioFornecedor.html"><button class="btn-painel">Relatório</button></a>
           </div>`
        : `<div id="painelFornecedor"></div>`;

    // HTML completo do header
    let headerHTML = `
    <header>
        <div class="logo">
            <div class="logo-circulo">VF</div>
            <h1>Vila das Flores</h1>
        </div>
        <nav>
            <a href="index.html">Início</a>
            <a href="produto_index.html">Produtos</a>
            <a href="index.html#contato" id="btnContato">Contato</a>
            ${linkRelatorio}
        </nav>
        <div style="display:flex; align-items:center; gap:0.75rem;">
            ${btnCarrinho}
            ${areaLogin}
        </div>
    </header>
    ${painelFornecedor}
    `;

    // Injeta no topo do body
    document.body.insertAdjacentHTML("afterbegin", headerHTML);

    // Evento de scroll suave para contato (só na index)
    if (paginaAtual === "index.html" || paginaAtual === "") {
        document.getElementById("btnContato").addEventListener("click", function (e) {
            e.preventDefault();
            let footer = document.getElementById("contato");
            if (footer) {
                footer.scrollIntoView({ behavior: "smooth" });
                setTimeout(function () {
                    let info = document.getElementById("info-contato");
                    if (info) {
                        info.classList.add("brilho-contato");
                        setTimeout(function () { info.classList.remove("brilho-contato"); }, 2000);
                    }
                }, 700);
            }
        });
    }
}

function sairNav() {
    localStorage.removeItem("tipoUsuario");
    localStorage.removeItem("fornecedorLogado");
    window.location.href = "index.html";
}

// Executa ao carregar a página
document.addEventListener("DOMContentLoaded", criarHeader);