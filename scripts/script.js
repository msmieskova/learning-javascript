let myTitle = document.querySelector("h1");
let myButton = document.querySelector("button");

myButton.addEventListener("click", function(){
    if (myTitle.textContent === "Yarr!") {
        myTitle.textContent = "Hello!";
        myButton.textContent = "Pirate time!";
    } else {
        myTitle.textContent = "Yarr!";
        myButton.textContent = "Normalize";
    }
    
})