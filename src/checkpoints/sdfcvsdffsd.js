import CheckPoint from "../classes/checkPointClass.js"

export const usmodjon = new CheckPoint(
    "Роман Красулин", 
    "КТ №55 - попа пися",
    "ИТ 9.24.3",
    [
        function plus(a,b){
            return a+b-1
        },
        function minus(a,b){
            return a-b
        }
]
)