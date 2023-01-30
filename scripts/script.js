// --------------------------------------
// Numbers
// --------------------------------------
const numbersDiv = document.getElementById('numbers');
const numberInput = document.getElementById('number');
const addNumberbutton = document.getElementById('addNumberButton');
let numbers = [];
let result = 0;
const numbersList = document.createElement('p');
numbersDiv.appendChild(numbersList);
const resultPara = document.createElement('p');
numbersDiv.appendChild(resultPara);

addNumberbutton.addEventListener('click', addNumber);

function addNumber(){
    let input = numberInput.value;
    if(validateInputNumber(input)){
        input = Number(input);
        numbers.push(input);
        result += input;
        displayNumbers();
        displayResult();
    } else {
        console.log('Not a number');
    }
    
    
}

function displayNumbers(){
    numbersList.textContent = 'Used numbers: ';
    for (num of numbers) {
        numbersList.textContent += `${num} `;
    }
}

function displayResult(){
    resultPara.textContent = `Result: ${result}`;
}

function validateInputNumber(inputNumber){
    const numberStructure = /[0-9]/;
    if(numberStructure.test(inputNumber)){
        return true;
    } else {
        return false;
    }
}

// --------------------------------------
// Form name and surname operations
// --------------------------------------

const person = {};
const formDiv = document.getElementById('form-wrap');
const formName = document.getElementById('name');
const formSurname = document.getElementById('surname');
const formSubmitButton = document.getElementById('submit');
let formDataArray;
const fullNameParagraph = document.createElement('p');
formDiv.appendChild(fullNameParagraph);

formSubmitButton.addEventListener('click', saveAndDisplayData);

function saveAndDisplayData(){
    fullNameParagraph.classList.remove("red");
    saveFormData();
    if (formName.value && formSurname.value) {
        writeFullName(person.name, person.surname);
    } else {
        alertMissingInputs(formDataArray);
    }
}

function saveFormData(){
    formDataArray = [formName, formSurname];
    person.name = formName.value;
    person.surname = formSurname.value;
}

function writeFullName(name, surname){
    const fullName = `${name} ${surname}`;
    fullNameParagraph.textContent = fullName;
}

function alertMissingInputs(formData){
    let missingData = '';

    for (data of formData){
        if (!data.value){
            missingData += ' ';
            missingData += data.name;
        }
    }

    fullNameParagraph.classList.add("red");
    fullNameParagraph.textContent = `Missing data:${missingData}`;
}

// --------------------------------------
// Adding paragraph on click 
// --------------------------------------

let addParaButton = document.getElementById('addPara');

addParaButton.addEventListener("click", function(){
    let paragraph = document.createElement('p');
    paragraph.textContent = "A new paragraph.";
    document.body.appendChild(paragraph);
})

// --------------------------------------
// Adding circle color on click
// --------------------------------------

let myCircleClass = document.getElementsByClassName('circle');

for (let i = 0; i < myCircleClass.length; i++){
    myCircleClass[i].addEventListener("click", toggleCircleColor)
}

function toggleCircleColor () {
    this.classList.toggle("blue");
    this.classList.toggle("red");
}

// --------------------------------------
// Changing text on click 
// --------------------------------------

let myTitle = document.getElementById("hello");
let myButton = document.getElementById("piratize");

myButton.addEventListener("click", function(){
    if (myTitle.textContent === "Yarr!") {
        normalize();
    } else {
        piratize();
    }
})

function piratize() {
    myTitle.textContent = "Yarr!";
    myButton.textContent = "Normalize";
}

function normalize() {
    myTitle.textContent = "Hello!";
    myButton.textContent = "Pirate time!";
}
