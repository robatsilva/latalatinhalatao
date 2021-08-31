const listaMl = [269, 350, 473];

listaMl.forEach(adicionarLata);
escondeLatas();
function selectMudou() {
  escondeLatas();
  calcular();
}

function escondeLatas(){
  listaMl.forEach(verificaSeEscondeLata);
}

function verificaSeEscondeLata(ml){
  let valorMlSelecionado;
  valorMlSelecionado = document.getElementById('valorML').value;
  if (valorMlSelecionado == ml) {
    document.getElementById("lata" + ml).style.display = 'none';
  } else {
    document.getElementById("lata" + ml).style.display = 'flex';
  }
}

function calcular() {
  listaMl.forEach(calcularMl);
}

function calcularMl(ml){
  let valorLata;
  let textoMl;
  let valorML;
  
  valorLata = document.getElementById('valorLata').value;
  valorML = document.getElementById('valorML').value;

  textoMl = document.getElementById('texto' + ml);

  textoMl.innerText = regra3(valorML, ml, valorLata);
}

function regra3(v1G1, v2G1, v1G2) {
  let x;

  x = (v2G1 * v1G2) / v1G1;


  return x.toFixed(2);
}

function adicionarLata(ml){
  const lata = `
                <div class="lata" id='lata${ml}'>
                  <span>${ml} ml</span>
                  <img src="../img/garrafa${ml}.png">
                  <p>R$ <span id="texto${ml}">xx,xx</span></p>
                </div>
                `
  const caixaLatas = document.getElementById('caixa-latas');
  const textoExistente = caixaLatas.innerHTML;
  if(textoExistente.includes(ml + ' ml')){
    alert('a lata ja foi inserida');
    return;
  }
  listaMl.push(ml);
  caixaLatas.innerHTML = textoExistente + lata;
}