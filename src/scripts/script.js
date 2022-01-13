let mlSelecionado = 269;
const listaLata = [
  {
    ml: 269,
    imagem: '../img/lata269.png',
    tipo: 'Latinha',
  },
  {
    ml: 350,
    imagem: '../img/lata.png',
    tipo: 'Lata',
  },
  {
    ml: 473,
    imagem: '../img/lata473.png',
    tipo: 'Latão',
  },
  {
    ml: 600,
    imagem: '../img/garrafa600.png',
    tipo: 'Garrafa',
  },
];

definirFoco('valorLata');

for (let lata of listaLata) {
  adicionarLata(lata);
  adicionarBotao(lata);
}

selecionarLata(mlSelecionado);

escondeLataSelecionada();