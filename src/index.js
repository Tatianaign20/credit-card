import './pages/index.css';
import { createCard } from './components/card.js';

const cardNumber = document.querySelector('.card__view__content__number');
const cardName = document.querySelector('.card__view__content__info__name');
const inputNumber = document.querySelector('.form__input_type_card-number');
const inputName = document.querySelector('.form__input_type_card-username');
const inputCVV = document.querySelector('.form__input_type_card-cvv');
const cardDateMonth = document.querySelector('.card__view__content__info__date-month');
const cardDateYear = document.querySelector('.card__view__content__info__date-year');
const monthsSelect = document.getElementById('month');
const yearsSelect = document.getElementById('year');
const form = document.forms.card_form;

cardNumber.addEventListener('click', () => {
    inputNumber.focus();
});

cardName.addEventListener('click', () => {
    inputName.focus();
});

cardDateMonth.addEventListener('click', () => {
    monthsSelect.focus();
});

cardDateYear.addEventListener('click', () => {
    yearsSelect.focus();
});

const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
];

// Добавляем начальную опцию
let defaultOption = document.createElement('option');
defaultOption.value = '';
monthsSelect.appendChild(defaultOption);

// Заполняем месяцами
months.forEach((month, index) => {
    let option = document.createElement('option');
    option.textContent = month;
    option.value = index + 1; // Значение начинается с 1
    monthsSelect.appendChild(option);
});

const years = [
    '2020',
    '2021',
    '2022',
    '2023',
    '2024',
    '2025',
    '2026',
    '2027',
    '2028',
    '2029',
    '2030'
];

// Добавляем начальную опцию
let defaultOptionYear = document.createElement('option');
defaultOptionYear.value = '';
yearsSelect.appendChild(defaultOptionYear);

// Заполняем годами
years.forEach((year) => {
    let option = document.createElement('option');
    option.textContent = year;
    option.value = year;
    yearsSelect.appendChild(option);
})

form.addEventListener('submit', function(evt) {
    evt.preventDefault(); // Отменяем стандартное поведение формы

    const cardFormNumber = form['card-number'];
    const cardFormHolder = form['card-username'];
    const monthForm = form['card-month'];
    const yearForm = form['card-year']; 
    const cvvForm = form['card-cvv'];

    console.log(cardFormNumber.value);
    console.log(cardFormHolder.value);
    console.log(monthForm.value);
    console.log(yearForm.value);
    console.log(cvvForm.value);

    const newCard = createCard({
        cardNumber: cardFormNumber.value,
        cardHolder: cardFormHolder.value,
        month: monthForm.value,
        year: yearForm.value,
        cvv: cvvForm.value
    });
    console.log(createCard({
        cardNumber: cardFormNumber.value,
        cardHolder: cardFormHolder.value,
        month: monthForm.value,
        year: yearForm.value,
        cvv: cvvForm.value
    }));

    const cardsList = document.querySelector('.section__card__list__items');

    cardsList.appendChild(newCard);
});

inputNumber.addEventListener("input", function(event) {
    if (/^[0-9]+$/.test(inputNumber.value) && inputNumber.value.length <= 16) {
        console.log(inputNumber.value.length);
    } 
    else {
        inputNumber.value = '';
        alert("Ошибка: разрешено вводить только 16 цифр");
    }
});

inputName.addEventListener("input", function(event) {
    if (/^[a-zA-Zа-яА-Я\s]+$/.test(inputName.value)) {
    } else {
        inputName.value = '';
        alert("Ошибка: разрешено вводить только буквы");
    }
});

inputCVV.addEventListener("input", function(event) {
    if (/^[0-9]+$/.test(inputCVV.value) && inputCVV.value.length <= 3) {
    } else {
        inputCVV.value = '';
        alert("Ошибка: разрешено вводить только 3 цифры");
    }
});