  escondeLata();
  function selectMudou() {
    escondeLata();
    calcular();
  }

  function escondeLata(){
    let valorML;
    valorML = document.getElementById('valorML').value;

    if (valorML == 269) {
      document.getElementById("lata269").style.display = 'none';
    } else {
      document.getElementById("lata269").style.display = 'flex';

    }
    if (valorML == 350) {
      document.getElementById("lata350").style.display = 'none';
    } else {
      document.getElementById("lata350").style.display = 'flex';

    }
    if (valorML == 473) {
      document.getElementById("lata473").style.display = 'none';
    } else {
      document.getElementById("lata473").style.display = 'flex';

    }
    if (valorML == 600) {
      document.getElementById("lata600").style.display = 'none'
    } else {
      document.getElementById("lata600").style.display = 'flex';

    }
    if (valorML == 1000) {
      document.getElementById("lata1000").style.display = 'none'
    } else {
      document.getElementById("lata1000").style.display = 'flex';

    }
  }
  function calcular() {
    let valorLata;
    let texto269;
    let texto350;
    let texto473;
    let texto600;
    let texto1000;
    let valorML;
    
    valorLata = document.getElementById('valorLata').value;
    valorML = document.getElementById('valorML').value;

    texto269 = document.getElementById('texto269');
    texto350 = document.getElementById('texto350');
    texto473 = document.getElementById('texto473');
    texto600 = document.getElementById('texto600');
    texto1000 = document.getElementById('texto1000');

    texto350.innerText = regra3(valorML, 350, valorLata);
    texto473.innerText = regra3(valorML, 473, valorLata);
    texto269.innerText = regra3(valorML, 269, valorLata);
    texto600.innerText = regra3(valorML, 600, valorLata);
    texto1000.innerText = regra3(valorML, 1000, valorLata);
  }

  function regra3(v1G1, v2G1, v1G2) {
    let x;

    x = (v2G1 * v1G2) / v1G1;


    return x.toFixed(2);
  }