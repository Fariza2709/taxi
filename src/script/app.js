function changeColor() {
        const button = document.getElementById('myButton');
        button.classList.add('clicked');
    };

  const mainPage = document.getElementById('mainPage');
  const entry = document.getElementById('entry');
  const disabilityForm = document.getElementById('disabilityForm');
  const feedback = document.getElementById('feedback');
  const productItems = document.getElementById('productItems');
  const entryTable = document.getElementById('entryTable');

  entry.addEventListener('click', function() {
        disabilityForm.style.display = 'block';
        mainPage.style.display = 'none';
        feedback.style.display = 'none';
        productItems.style.display = 'none';
        entry.style.display = 'none';
        entryTable.style.display = 'none';
    });

  const orderDone = document.getElementById('orderDone'); 
  const takeAtaxi = document.getElementById('takeAtaxi');

  takeAtaxi.addEventListener('click', function() {
    orderDone.style.display = 'flex';

    setTimeout(function() {
        orderDone.style.display = "none";
    }, 5000);
  });

const feedbackSend = document.getElementById('feedbackSend');
const send = document.getElementById('send');
  
  send.addEventListener('click', function() {
    feedbackSend.style.display = 'block';
    feedback.style.display = 'none';

 setTimeout(function() {
        feedbackSend.style.display = "none";
    }, 1000);
});




const ChoiceOfDamage = new Map([
  ['damage1', 'Нарушение слуха (глухие, слабослышащие, позднооглохшие)'],
  ['damage2', 'Нарушение зрения (слепые, слабовидящие)'],
  ['damage3', 'Нарушение речи (логопаты)'],
  ['damage4', 'Нарушение опорно-двигательного аппарата'],
  ['damage5', 'Умственная отсталость'],
  ['damage6', 'Задержка психического развития'],
  ['damage7', 'Нарушение поведения и общения']
  ['damage8', 'Комплексные нарушения психофизического развития, с так называемыми сложными дефектами (слепоглухонемые, глухие или слепые дети с умственной отсталостью)']
]);

const damage = ChoiceOfDamage.get('damage1');


const VehicleOfTransport = new Map([
  ['transport1', 'Транспорт с низким полом'],
  ['transport2', 'Транспорт с рампой'],
  ['transport3', 'Помощь в посадке и высадке'],
  ['transport4', 'Климат-контроль для заднего сидения'],
  ['transport5', 'Автомобили с высокой крышей'],
  ['transport6', 'Дополнительные сиденья'],
  ['transport7', 'Подъемный механизм']
  ['transport8', 'Фиксаторы для инвалидных колясок']
]);

const vehicle = VehicleOfTransport.get('transport1');

