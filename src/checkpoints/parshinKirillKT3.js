import CheckPoint from "../classes/checkPointClass.js"

function getSumOfPrices(values, key) {
    let defaultKey = key || "price"
    return values.reduce((sum, el) => sum += el[defaultKey], 0)
}

function objectValuesToArray(array) {
    let result = [];
    for (const object of array) {
        result.push(object.name);
    }   
    return result;
}

function concatString(...args) {
    return args.join(" ");
}

function сheckObj(obj) {
    return !!obj.particle;
}

function findObject(array, object) {
    return array.findIndex(value => JSON.stringify(value) === JSON.stringify(object))
}

export const cp = new CheckPoint(
    "Паршин Кирилл",
    'КТ №4. "массивы"',
    "ИТ 11.24.1",
    [
        getSumOfPrices,
        objectValuesToArray,
        concatString,
        сheckObj,
        findObject
    ]
)