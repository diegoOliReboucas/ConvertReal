const dolar = document.querySelector('.usd');
const euro = document.querySelector('.eur');
const btc = document.querySelector('.btc');
const cad = document.querySelector('.cad');
const rub = document.querySelector('.rub');
const cny = document.querySelector('.cny');
const ars = document.querySelector('.ars');
const gbp = document.querySelector('.gbp');
const input = document.querySelector('input');
const valorConvertido = document.querySelector('.convertido');

function conversaoDolar() {
  const dolarC = fetch('https://economia.awesomeapi.com.br/last/USD-BRL');
  dolarC
    .then((response) => response.json())
    .then((body) => {
      console.log(input.value);
      console.log(+body.USDBRL.ask);
      valorConvertido.innerText =
        'R$ ' +
        input.value +
        ' equivale a $' +
        (input.value / body.USDBRL.ask).toFixed(2);
    });
}
dolar.addEventListener('click', conversaoDolar);

function conversaoEuro() {
  const euroC = fetch('https://economia.awesomeapi.com.br/last/EUR-BRL');
  euroC
    .then((response) => response.json())
    .then((body) => {
      console.log(input.value);
      console.log(+body.EURBRL.ask);
      valorConvertido.innerText =
        'R$ ' +
        input.value +
        ' equivale a €' +
        (input.value / body.EURBRL.ask).toFixed(2);
    });
}
euro.addEventListener('click', conversaoEuro);

function conversaoBcoin() {
  const bitcoinC = fetch('https://economia.awesomeapi.com.br/last/BTC-BRL');
  bitcoinC
    .then((response) => response.json())
    .then((body) => {
      console.log(input.value);
      console.log(+body.BTCBRL.ask);
      valorConvertido.innerText =
        'R$ ' +
        input.value +
        ' equivale a ' +
        (input.value / body.BTCBRL.ask).toFixed(2) +
        ' BTC';
    });
}
btc.addEventListener('click', conversaoBcoin);

function conversaoCad() {
  const cadC = fetch('https://economia.awesomeapi.com.br/last/CAD-BRL');
  cadC
    .then((response) => response.json())
    .then((body) => {
      console.log(input.value);
      console.log(+body.CADBRL.ask);
      valorConvertido.innerText =
        'R$ ' +
        input.value +
        ' equivale a ' +
        (input.value / body.CADBRL.ask).toFixed(2) +
        ' CAD';
    });
}
cad.addEventListener('click', conversaoCad);

function conversaoRub() {
  const rubC = fetch('https://economia.awesomeapi.com.br/last/RUB-BRL');
  rubC
    .then((response) => response.json())
    .then((body) => {
      console.log(input.value);
      console.log(+body.RUBBRL.ask);
      valorConvertido.innerText =
        'R$ ' +
        input.value +
        ' equivale a ' +
        (input.value / body.RUBBRL.ask).toFixed(2) +
        ' RUBBRL';
    });
}
rub.addEventListener('click', conversaoRub);

function conversaoCny() {
  const cnyC = fetch('https://economia.awesomeapi.com.br/last/CNY-BRL');
  cnyC
    .then((response) => response.json())
    .then((body) => {
      console.log(input.value);
      console.log(+body.CNYBRL.ask);
      valorConvertido.innerText =
        'R$ ' +
        input.value +
        ' equivale a ¥' +
        (input.value / body.CNYBRL.ask).toFixed(2);
    });
}
cny.addEventListener('click', conversaoCny);

function conversaoArs() {
  const arsC = fetch('https://economia.awesomeapi.com.br/last/ARS-BRL');
  arsC
    .then((response) => response.json())
    .then((body) => {
      console.log(input.value);
      console.log(+body.ARSBRL.ask);
      valorConvertido.innerText =
        'R$ ' +
        input.value +
        ' equivale a $' +
        (input.value / body.ARSBRL.ask).toFixed(2);
    });
}
ars.addEventListener('click', conversaoArs);

function conversaoGbp() {
  const gbpC = fetch('https://economia.awesomeapi.com.br/last/GBP-BRL');
  gbpC
    .then((response) => response.json())
    .then((body) => {
      console.log(input.value);
      console.log(+body.GBPBRL.ask);
      valorConvertido.innerText =
        'R$ ' +
        input.value +
        ' equivale a £' +
        (input.value / body.GBPBRL.ask).toFixed(2);
    });
}
gbp.addEventListener('click', conversaoGbp);
