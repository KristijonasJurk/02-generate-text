const button = document.querySelector('button');
const input = document.querySelector('input');
const error = document.querySelector('.error');
const h3 = document.querySelector('.answer');

button.addEventListener("click", function () {

    if (input.value === '') {
        error.style.display = 'block';
    } else {
        h3.innerText = input.value;
    }
    console.log(input.value)
});