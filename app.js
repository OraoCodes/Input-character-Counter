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
let enteredInputElement = document.getElementById('product-name');
let remainingCharElement = document.getElementById('remaining-chars');

let maxAllowedCharacters = enteredInputElement.maxLength;

function updateRemainingChar(event){
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;
    
    let updatedCharElement = maxAllowedCharacters - enteredTextLength;
    remainingCharElement.textContent = updatedCharElement;
}

enteredInputElement.addEventListener('input', updateRemainingChar);