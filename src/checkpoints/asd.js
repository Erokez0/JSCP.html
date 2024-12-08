import CheckPoint from "../classes/checkPointClass.js"

export const usmodjon = new CheckPoint(
    "Боков Роман", 
    "КТ №1. тест",
    "ИТ 11.24.1",
    [
        function plus(a,b){
            return a+b
        },
        function minus(a,b){
            return a-b
        }
]
)