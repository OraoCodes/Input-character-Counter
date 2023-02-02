// let productNameInputElement = document.getElementById('product-name');
// let remainingCharsElement = document.getElementById('remaining-chars');

// let maxAllowedChars = productNameInputElement.maxLength;

// function updateRemainingCharacters(event){
//     let enteredValue = event.target.value;
//     let enteredTextLength = enteredValue.length;

//     let remainingChars = maxAllowedChars - enteredTextLength;
//     remainingCharsElement.textContent = remainingChars;
// }

// productNameInputElement.addEventListener('input',updateRemainingCharacters)


//step 1
const enteredInputElement = document.getElementById('product-name');
const remainingCharElement = document.getElementById('remaining-chars');

const maxAllowedCharacters = enteredInputElement.maxLength;

function updateRemainingChar(event){
    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;
    
    let updatedCharElement = maxAllowedCharacters - enteredTextLength;
    remainingCharElement.textContent = updatedCharElement;

    if(updatedCharElement <= 10 ){
        remainingCharElement.classList.add('warning');
        enteredInputElement.classList.add('warning');
    }else{
        remainingCharElement.classList.remove('warning');
        enteredInputElement.classList.remove('warning');
    }
}

enteredInputElement.addEventListener('input', updateRemainingChar);

//control structures - loops and conditions.
//we are using this to set the code to be executed when certain conditions are met, such as the the remaining characters going below 10
//this is executed from line 30 - the css classes are assumed.

// LOOPS
//for 

for(let i = 0; i < 20; i = i + 8){
    console.log(i);
}

//for of
const users = ['Margai', 'James', 'Wycliffe'];

for(const user of users){
    console.log(user);
}

//for in, loops
const loggedInUser = {
    name: 'James',
    age: 32,
    isAdmin: true
}

for (propertyName in loggedInUser){
    console.log(propertyName);
    console.log(loggedInUser[propertyName]);
}

let isFinished = false;

while (!isFinished) {
   isFinished = confirm('Would you love to quit?');
}

console.log('Done!');