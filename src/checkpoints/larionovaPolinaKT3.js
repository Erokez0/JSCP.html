import CheckPoint from "../classes/checkPointClass.js"

function calculateTotal(values) {
    return values.reduce((total, item) => total + item.price, 0)
}
function Names(array) {
    return array.map(item => item.name)
}
function logString(...args) {

    return args.join(" ")
}
function checkObj(obj) {
    return 'particle' in obj
}
function findObject(array, object) {

    for (let i = 0; i < array.length; i++) {
        let item = array[i]

        if (Object.keys(object).length === Object.keys(item).length &&
            Object.keys(object).every(key => object[key] === item[key])) {
            return i
        }
    }
   return null
}

export const cp = new CheckPoint(
    "Ларионова Полина",
    'КТ №4. "массивы"',
    "ИТ 11.24.1",
    [
        calculateTotal,
        Names,
        logString,
        checkObj,
        findObject
    ]
)