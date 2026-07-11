 const productCards = document.querySelectorAll('.card');
 const changeColorCardButton = document.querySelector('#change-color-card-button');
 const changeColorCardsButton = document.querySelector('#change-color-cards-button');
 const greenColorHash = '#00ff00'
 const redColorHash = '#ff4400'
 const productCard = document.querySelector('.card')
 const openGoogleButton = document.querySelector('#open-Google-button')
 const urlGoogle = 'https://google.com';
 const outputTitleConsol = document.querySelector('.title');
 const toggleButton = document.querySelector('#toggle-color-button')


 changeColorCardButton.addEventListener('click', () => {
  productCard.style.backgroundColor = greenColorHash;
})

changeColorCardsButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = redColorHash)
})

openGoogleButton.addEventListener('click', openGoogle);
function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');
  if (answer === true) {
    window.open(urlGoogle)
  }
}
outputTitleConsol.addEventListener('mouseover', () => {
  console.log(outputTitleConsol.textContent)
})
toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('color-toggle-button--active')
})
