const background = document.querySelector('.bg-color-container');
const hexValue = document.querySelector('.hex-value');
const btnColorChanger = document.querySelector('.btn-color-changer');
let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
let previousHexValue = '#FFFFFF';

btnColorChanger.addEventListener('click', () => {
    // This reset a possible value of @randomHexValue variable
    let randomHexValue = '#';
    do {
        // We need 6 values of @hex, so we validate this with a @while
        let length = 1;
        while (length <= 6) {
            // generate a number between 0 and 16, basically the posible values of @hex
            let value = Math.floor(Math.random() * (hex.length - 1)) + 1;
            // we concatenate that value to @randomHexValue
            randomHexValue += hex[value];
            length++;
        }
    } while (randomHexValue === previousHexValue); //this is necesarry to don't repeat a color
    hexValue.innerHTML = randomHexValue;
    background.style.backgroundColor = randomHexValue; //one we have an hex value, we set this color to the bg
    previousHexValue = randomHexValue; //and save this color as a @previousHexValue, also to don't repeat
});