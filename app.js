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
}

enteredInputElement.addEventListener('input', updateRemainingChar);

//control structures - loops and conditions.
const myName = 'steve';

if(myName == 'steve'){
    console.log('Hello there');
}