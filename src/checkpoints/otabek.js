import CheckPoint from "../classes/checkPointClass.js"

export const usmodjon = new CheckPoint(
    "Каримов Усмоджон", 
    "КТ №1 - циклы",
    "ИТ 11.24.1",
    [
        function plus(a,b){
            return a+b-1
        },
        function minus(a,b){
            return a-b
        }
]
)