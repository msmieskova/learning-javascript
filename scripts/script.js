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
    saveFormData();
    if (formName.value && formSurname.value) {
        // saveFormData();
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
    console.log(fullName);
}

function alertMissingInputs(formData){
    let missingData = '';

    for (data of formData){
        if (!data.value){
            missingData += ' ';
            missingData += data.name;
        }
    }

    console.log(`Missing data:${missingData}`);
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
