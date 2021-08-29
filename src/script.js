const listaMl = [269, 350, 473];

escondeLata();
function selectMudou() {
  escondeLata();
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
  let valorLata;
  let texto269;
  let texto350;
  let texto473;
  let valorML;
  
  valorLata = document.getElementById('valorLata').value;
  valorML = document.getElementById('valorML').value;

  texto269 = document.getElementById('texto269');
  texto350 = document.getElementById('texto350');
  texto473 = document.getElementById('texto473');

  texto350.innerText = regra3(valorML, 350, valorLata);
  texto473.innerText = regra3(valorML, 473, valorLata);
  texto269.innerText = regra3(valorML, 269, valorLata);
}

function regra3(v1G1, v2G1, v1G2) {
  let x;

  x = (v2G1 * v1G2) / v1G1;


  return x.toFixed(2);
}

function adicionarLata(){
  const lata = `
                <div class="lata" id='lata600'>
                  <span>600 ml</span>
                  <img src="../img/garrafa600.png">
                  <p>R$ <span id="texto600">xx,xx</span></p>
                </div>
                `
  const caixaLatas = document.getElementById('caixa-latas');
  const textoExistente = caixaLatas.innerHTML;
  if(textoExistente.includes('600 ml')){
    alert('a lata ja foi inserida');
    return;

  }

  caixaLatas.innerHTML = textoExistente + lata;
}