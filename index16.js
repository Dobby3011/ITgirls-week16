const formElement = document.querySelector('.form');
const formInput = formElement.querySelector('.form__input');

let errors = [];

function checkValidity(input) {
    let validity = input.validity;

    if (validity.patternMismatch) {
        errors.push('Неверный формат заполнения');
    }

    if (validity.rangeOverflow) {
        errors.push('Значение превосходит максимально допустимое');
    }

    if (validity.rangeUnderflow) {
        errors.push('Значение меньше минимально допустимого');
    }

    if (validity.valueMissing) {
        errors.push('Необходимо заполнить поле');
    }
}

function checkAll() {
    let inputs = document.querySelectorAll("input");

    for (let input of inputs) {
        checkValidity(input);
    }

    let error = document.querySelector('.error-message');
    error.innerHTML = errors.join('. \n');
}

formElement.addEventListener('submit', function (event) {
    event.preventDefault();
    errors = [];
    checkAll();

});

formInput.addEventListener('input', function (evt) {
    console.log(evt.target.value);
});