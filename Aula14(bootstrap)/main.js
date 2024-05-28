const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')


  alertPlaceholder.append(wrapper)
}


const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}


const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')


if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}


//=======================================================
let cardContainer = document.querySelector('#cardContainer');


const cards = [
    { title: 'Xodó', text: 'Vira lata caramelho' },
    { title: 'Mel', text: 'Gata tipo Tilapia' },
    { title: 'Stefanni', text: 'Lhasa de 17 anos' }
];


cards.forEach(card => {
    const cardElement = document.createElement('div');


    cardElement.innerHTML = `
    <div class="card" style="width: 300px;">
        <div class="card-body">
            <h5 class="card-title">${card.title}</h5>
            <p class="card-text">${card.text}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    `;


    cardContainer.appendChild(cardElement);
});
