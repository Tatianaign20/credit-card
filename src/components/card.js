// Темплейт карты
const cardTemplate = document.querySelector('#card-template').content; 

// Функция создания карты
export function createCard (card) {
    const cardElement = cardTemplate.querySelector('.card__item').cloneNode(true) 
    cardElement.querySelector('.card__number').textContent = card.cardNumber;
    cardElement.querySelector('.card__name').textContent = card.cardHolder;
    cardElement.querySelector('.card__month').textContent = card.month;
    cardElement.querySelector('.card__year').textContent = card.year;
    cardElement.querySelector('.card__cvv').textContent = card.cvv;
    
    cardElement.querySelector('.card__delete-button').addEventListener('click', () => {
        cardElement.remove();
    }); 

    return cardElement; 
}

