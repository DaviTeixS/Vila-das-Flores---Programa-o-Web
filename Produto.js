let carrinho =
JSON.parse(localStorage.getItem("carrinho")) || [];

let produtos =
JSON.parse(localStorage.getItem("produtos")) || [];

let areaProdutos =
document.getElementById("produtosDinamicos");



//comprar produto

function comprar(botao, nome, preco) {

let span =
 botao.previousElementSibling.children[1];

 let quantidade =
 parseInt(span.textContent);

if (quantidade <= 0) {

 mostrarMensagem( "Selecione uma quantidade" );
return;
    }

 preco = parseFloat(preco);

    // procura produto no sistema
    let produtoAtual =
    produtos.find(produto =>
        produto.nome === nome
    );

// valida estoque
    if(
    quantidade >
    produtoAtual.estoque
    ){

    mostrarMensagem("Estoque insuficiente!");
    return;
    }
 
    // verificar se existe no carrinho
    let produtoExistente =
    carrinho.find(
    produto => produto.nome === nome
    );

    if (produtoExistente) {
produtoExistente.quantidade += quantidade;
    } else {

    
carrinho.push({
 nome: nome,
 preco: preco,
  quantidade: quantidade  });
    }

    // salva carrinho
    localStorage.setItem(
     "carrinho",
     JSON.stringify(carrinho)
    );
    // reseta contador visual
    span.textContent = 0;

    mostrarMensagem(

        nome + " adicionado ao carrinho!"

    );
}
//a mensagem visual
function mostrarMensagem(texto){
let mensagem =
document.getElementById("mensagem");
mensagem.innerText = texto;
setTimeout(() => {
 mensagem.innerText = "";
}, 2000);
}

// aumentar a quantidade 
function aumentarTemp(botao){

let span =
botao.parentElement.children[1];

 let valor =
parseInt(span.textContent);

span.textContent = valor + 1;
}

//diminuir a quantidade

function diminuirTemp(botao){

    let span =
    botao.parentElement.children[1];

    let valor =
    parseInt(span.textContent);

    if(valor > 0){

        span.textContent = valor - 1;
    }
}

//renderizar produtos = atualizar a tela com os produtos disponiveis
if(areaProdutos){

    renderizarProdutos(produtos);
}

function renderizarProdutos(listaProdutos){
 areaProdutos.innerHTML = "";
 
 listaProdutos.forEach((produto) => {

    areaProdutos.innerHTML += `
     <div class="produto-card card">
     <h3>${produto.nome}</h3>
     <p>${produto.categoria}</p>
     <p>
        R$ ${produto.preco.toFixed(2)}
     </p>

      <p> Estoque: ${produto.estoque}
      </p>

    <div class="controle-quantidade">
     <button onclick="diminuirTemp(this)">
      -
     </button>

      <span>0</span>
      <button onclick="aumentarTemp(this)">
      +
      </button>

    </div>
      <button onclick="
     comprar(
     this,
    '${produto.nome}',
      ${produto.preco}
         )
     ">

      Comprar
      </button>
     </div>
    `;
    });
}

//buscar o produto pelo nome
function buscarProduto(){
 let textoBusca =
 document.getElementById(
"buscarProduto")
.value
 .toLowerCase();
let produtosFiltrados =
produtos.filter(produto =>

 produto.nome
.toLowerCase()
.includes(textoBusca)
);
renderizarProdutos(produtosFiltrados);
}

//filtrar por categoria

function filtrarCategoria(){
let categoria =

document.getElementById(
 "filtroCategoria")

.value;

let filtrados;
if(categoria === "todos"){
 filtrados = produtos;
 }else{
filtrados = produtos.filter(
 produto =>
produto.categoria === categoria);
}
renderizarProdutos(filtrados);
}

// ordenar produtos

function ordenarProdutos(){
let tipo =
document.getElementById(
"ordenarProdutos")

.value;
let produtosOrdenados =
[...produtos];

// menor preço
if(tipo === "menor"){
 produtosOrdenados.sort(
     (a,b) =>
      a.preco - b.preco);
    }

// maior preço
  if(tipo === "maior"){
   produtosOrdenados.sort(
     (a,b) =>
      b.preco - a.preco);
    }


// ordem alfabética
  if(tipo === "nome"){
      produtosOrdenados.sort(
     (a,b) =>
      a.nome.localeCompare(b.nome));
    }
      renderizarProdutos(produtosOrdenados);
}