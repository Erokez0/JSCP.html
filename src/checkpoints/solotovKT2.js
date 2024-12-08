import CheckPoint from "../classes/checkPointClass.js"

function checkElem(num) {
    if (num % 7 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}
function changeElem(array, n) {
    return array.map(element => element * n);
}
function sumElems(array) {
    return array.reduce((sum, element) => {
        const num = Number(element);
        return !isNaN(num) ? sum + num : sum;
    },
0);
}
function reverseIndex(array) {
    let reversedArray = []; 
    for (let i = array.length - 1; i >= 0; i--) {
       reversedArray.push(array[i]); 
    }
}
function checkElem2(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return true; 
        }
    }
    return false; 
}
export const vanyaSolotov = new CheckPoint(
    "Иван Солотов", 
    'КТ №2. "Функции"',
    "ИТ 11.24.1",
    [
        checkElem,
        changeElem,
        sumElems,
        reverseIndex,
        checkElem2
]
)