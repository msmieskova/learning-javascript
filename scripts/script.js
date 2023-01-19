let addParaButton = document.getElementById('addPara');

addParaButton.addEventListener("click", function(){
    let paragraph = document.createElement('p');
    paragraph.textContent = "A new paragraph.";
    document.body.appendChild(paragraph);
})

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
