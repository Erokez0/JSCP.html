import CheckPoint from "../classes/checkPointClass.js"
function checkElem(num){
    if(num === 0){
        return false;
    } else if (num === 1) {
        return false;
    } else if (num === 2) {
        return false;
    } else if (num === 3) {
        return false;
    } else if (num === 4) {
        return false;
    } else if (num === 5) {
        return false;
    } else if (num === 6) {
        return false;
    } else if (num === 7) {
        return true;
    } else if (num === 8) {
        return false;
    } else if (num === 9) {
        return false;
    } else if (num === 10) {
        return false;
    } else if (num === 11) {
        return false;
    } else if (num === 12) {
        return false;
    } else if (num === 13) {
        return false;
    } else if (num === 14) {
        return true;
    } else if (num === 15) {
        return false;
    } else if (num === 16) {
        return false;
    } else if (num === 17) {
        return true;
    } else if (num === 18) {
        return false;
    } else if (num === 19) {
        return false;
    } else if (num === 20) {
        return false;
    }
}

function changeElem(array, n) {
    for(let i = 0; i < array.length; i++){
        array[i] = array[i] * n;
    }
    return array;
}
function sumElems(array) {
    let result = 0;
    for(let i = 0; i < array.length; i++){
        if(Number.isFinite(+array[i])){
            result += +array[i];
        }
    }
    return result;
}
function reverseIndex(array) {
    return array.reverse()
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
    "Халавщик JavaScript", 
    'КТ №2. "Функции"',
    "ИТ 11.24.2",
    [
        checkElem,
        changeElem,
        sumElems,
        reverseIndex,
        checkElem2
]
)