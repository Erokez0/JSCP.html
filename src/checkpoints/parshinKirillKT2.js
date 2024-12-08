import CheckPoint from "../classes/checkPointClass.js"

const checkElem = (num) => num % 7 === 0;

function isValidArray(array) {
  try {
    return array.map(Number).every((value) => isFinite(value));
  } catch {
    return false;
  }
}

function changeElem(array, n) {
  if (isValidArray(array)) {
    return array.map((a) => a * n);
  }
  return new Error("Проверьте корректность введённых данных");
}

function sumElems(array) {
  let sum = array
  .map(Number)
  .filter((val) => isFinite(val))
  .reduce((result, currentVal) => result += currentVal)
  return sum;
}

function reverseIndex(array) {
  let r = array.length-1
  for(let l = 0; l < r; l++){
    [array[l], array[r]] = [array[r], array[l]]
    r--
  }
  return array
}

function checkElem2(array, callback) {
  return array.some(callback);
}

export const vanyaSolotov = new CheckPoint(
    "Паршин Кирилл", 
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