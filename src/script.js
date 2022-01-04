const listaLata = [
  {
    ml: 269,
    imagem: "../img/lata269.png",
  },
  {
    ml: 350,
    imagem: "../img/lata.png",
  },
  {
    ml: 473,
    imagem: "../img/lata473.png",
  },
  {
    ml: 600,
    imagem: "../img/garrafa600.png",
  },
];

listaLata.forEach(adicionarLata);

escondeLataSelecionada();

function selectMudou() {
  escondeLataSelecionada();
  calcular();
}

function escondeLataSelecionada() {
  listaLata.forEach(verificaSeEscondeLata);
}

function verificaSeEscondeLata(lata) {
  let valorMlSelecionado;
  valorMlSelecionado = document.getElementById("valorML").value;
  if (valorMlSelecionado == lata.ml) {
    document.getElementById("lata" + lata.ml).style.display = "none";
  } else {
    document.getElementById("lata" + lata.ml).style.display = "flex";
  }
}

function calcular() {
  listaLata.forEach(calcularMl);
}

function calcularMl(lata) {
  let valorLata;
  let textoMl;
  let valorML;

  valorLata = document.getElementById("valorLata").value;
  
  valorML = document.getElementById("valorML").value;

  textoMl = document.getElementById("texto" + lata.ml);

  textoMl.innerText = regra3(valorML, lata.ml, valorLata);
}

function regra3(v1G1, v2G1, v1G2) {
  let x;

  x = (v2G1 * v1G2) / v1G1;

  return x.toFixed(2);
}

function adicionarLata(lata) {
  const lataHtml = `
                <div class="lata" id='lata${lata.ml}'>
                  <span>${lata.ml} ml</span>
                  <img src="${lata.imagem}">
                  <p>R$ <span id="texto${lata.ml}">xx,xx</span></p>
                  
                  <button onclick="excluirgarrafa()"class="deletar"> x </button>
                </div>
                `;
  const caixaLatas = document.getElementById("caixa-latas");
  const textoExistente = caixaLatas.innerHTML;
  if (textoExistente.includes(lata.ml + " ml")) {
    alert("a lata ja foi inserida");
    return;
  }
  listaLata.push(lata);
  caixaLatas.innerHTML = textoExistente + lataHtml;
  adicionarOptionNoSelect(lata.ml)
  fecharModal();
}

function adicionarOptionNoSelect(ml){
  const option = document.createElement('option');
  option.value = ml;
  option.innerHTML = ml + ' ml';
  const select = document.getElementById("valorML");
  select.add(option);
}

function adicionarNovaLata(){
  const valorDigitadoNaTela = document.getElementById('valor-novo-ml').value;
  const novaLata = {
    ml: valorDigitadoNaTela,
    imagem: "../img/lata269.png",
  };
  adicionarLata(novaLata);
}

function exibirModal() {
  document.getElementById('caixa-novo-ml').style.display = 'block';
  document.getElementById('valor-novo-ml').value = '';
}


function fecharModal() {
  document.getElementById('caixa-novo-ml').style.display = 'none';
  
}
 

function fechar() {

  document.getElementById('excluirgarrafa').style.display = 'none' ;
}