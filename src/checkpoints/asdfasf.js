import CheckPoint from "../classes/checkPointClass.js"


function plus(a,b){
    return a+b
}
function minus(a,b){
    return a-b
}

export const parshinKirill = new CheckPoint(
    "Паршин Кирилл", 
    "КТ №1 - циклы",
    "ИТ 11.24.1",
    [
        plus,
        minus
]
)
// import Checker from "../CheckerClass.js"
// const checker = new Checker()
// console.log(checker.check(
//     parshinKirill, 
//     {"task01": 5, "task02": 5}, 
//     {"task01": "+"}, 
//     {"task01": 5, "task02": 5}, 
//     {"task01": [2,3], "task02" : [10,5]}))