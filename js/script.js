const numberInput = document.querySelector('#number-input');
const cardNumber = document.querySelector('#number');
const monthInput = document.querySelector('#month-input');
const month = document.querySelector('#month');
const yearInput = document.querySelector('#year-input');
const year = document.querySelector('#year');
const cvcInput = document.querySelector('#cvc-input');
const cvcCode = document.querySelector('#cvc-code');
const nameInput = document.querySelector('#name-input');
const nameCard = document.querySelector('#name');
const confirmButton = document.querySelector('.confirm-button');
const confirmError = document.querySelector('.confirm-error');

numberInput.addEventListener('input', function () {
    numberInput.value = numberInput.value
      .replace(/(\d{4})(?!\s|$)/gm, `$1 `)
      .match(/(?:\d{4} ?){0,3}(?:\d{0,4})?/)
    cardNumber.textContent = numberInput.value;
});

monthInput.addEventListener('input', function () {
    this.value = this.value;
    this.value = this.value.replace(/[^\d]/g,'');
    month.textContent = this.value;
});

yearInput.addEventListener('input', function () {
    this.value = this.value;
    this.value = this.value.replace(/[^\d]/g,'');
    year.textContent = this.value;
});

cvcInput.addEventListener('input', function () {
    this.value = this.value;
    this.value = this.value.replace(/[^\d]/g,'');
    cvcCode.textContent = this.value;
});

nameInput.addEventListener('input', function () {
    this.value = this.value;
    this.value = this.value.replace(/\d/g, "");
    nameCard.textContent = this.value;
});

confirmButton.addEventListener('click', function() {
    let arr = Array(monthInput, yearInput, numberInput, cvcInput, nameInput)
    arr.forEach(name => {
        let maxLength = name.maxLength;
        if (name.value.length < maxLength | name.value == '') {
            name.style.border = '1px solid red';
            confirmError.style.visibility = 'visible';
        }
        if (name.value.length >= maxLength & name.value != '') {
            name.style.border = '1px solid #c9c9c9';
        }
        if (arr.every(name => name.value.length >= name.maxLength && nameInput.value != '') == true) {
            confirmError.style.visibility = 'hidden';
            document.querySelector('.input-box').style.display = 'none';
            document.querySelector('.complete-box').style.display = 'block';
        }
    });
});