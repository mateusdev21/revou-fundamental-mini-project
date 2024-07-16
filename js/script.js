import { calculateBmi } from './calculate-bmi.js'
import { classifyBmi } from './classify-bmi.js';

const form = document.getElementById('bmi-calculator');
const resetButton = document.getElementById('reset-btn');
const resultColumn = document.getElementById('result-column');

// Reset Form
resetButton.addEventListener('click', () => {
    form.reset();
    resultColumn.classList.add('hidden');
})

// Handle event when form is submitted
form.addEventListener('submit', function (element) {
    element.preventDefault();
    getData(element.target);
});

// Get data from form
function getData(form) {
    let formData = new FormData(form);
    let bmi = calculateBmi(Object.fromEntries(formData));
    let resultData = classifyBmi(bmi);
    showResult(resultData)
};

// Display Result
function showResult(data) {
    resultColumn.classList.remove('hidden');
    resultColumn.querySelector('#result-text').innerHTML = data.text;
    resultColumn.querySelector('#result-value').innerHTML = data.value;
    resultColumn.querySelector('#result-description').innerHTML = data.description;
    resultColumn.querySelector('#result-category').innerHTML = data.category;
    resultColumn.querySelector('#result-advice').innerHTML = data.advice;
    resultColumn.querySelector('#result-solution').innerHTML = data.solution;
};
