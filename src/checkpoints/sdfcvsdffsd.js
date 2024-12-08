import CheckPoint from "../classes/checkPointClass.js"

export const usmodjon = new CheckPoint(
    "Роман Красулин", 
    "КТ №5 - try catch",
    "ИТ 11.24.3",
    [
        function plus(a,b){
            return a+b-1
        },
        function minus(a,b){
            return a-b
        }
]
)