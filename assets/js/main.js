// Global Variable used to store the quotes  
// fetched from the API 

var data;
let front = true;

// Getting the front and back author boxes 
const authors = document.querySelectorAll(".author");

// Getting the front and back texts
const texts = document.querySelectorAll(".text");

// Getting the body 
const body = document.getElementById("body");

// Getting the buttons 
const button = document.querySelectorAll(".new-quote");

const blockFront = document.querySelector(".block__front");
const blockBack = document.querySelector(".block__back");

const authorFront = authors[0];
const authorBack = authors[1];

const textFront = texts[0];
const textBack = texts[1];

const buttonFront = button[0];
const buttonBack = button[1];


// An arrow function used to get a quote randomly 
const displayQuote = () => {

    // Generates a random number between 0 and the length of the dataset.

    let index = Math.floor(Math.random() * data.length);


    // Stores the quote present at the randomly generated index 
    let quote = data[index].text;

    // Stores the author of the respective quote 
    let author = data[index].author;


    // If no author is present assign the author anonymous  

    if (!author) {
        author = "Anonymous"
    }


    // Replacing the current quote and author with a new one 

    if (front) {
        // Changing the front if back-side is displayed 
        textFront.innerHTML = quote;
        authorFront.innerHTML = author;
    }
    else {
        // Changing the back if front-side is displayed
        textBack.innerHTML = quote;
        authorBack.innerHTML = author;
    }

    front = !front;

}

// Fetching the quotes from the type.fit API using promises 

fetch("https://type.fit/api/quotes")
    .then((response) => {
        return response.json()
    }) // Getting the raw JSON data
    .then((data) => {

        // Storing the quotes internally upon  
        // successful completion of request
        this.data = data;

        // Displaying the quote When the Webpage loads 
        displayQuote();
    });


// Adding an onclick listener for the button 
let newQuote = () => {

    // Rotating the Quote Box 
    blockBack.classList.toggle("rotateB");
    blockFront.classList.toggle("rotateF");

    // Displaying a new quote when the webpage loads 
    displayQuote();
}