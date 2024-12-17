import CheckPoint from "./checkPointClass.js";

export default class Checker {
    /**
     * @param {CheckPoint} checkPoint - Объект класса КТ
     * @param {{taskName: weight}} weights - объект с разбаловкой
     * @param {{taskName: correctResult}} correctResults - объект с указанными правильными ответами
     * @param {{taskName: [prohibition]}} prohibitions - объект с указанными запретными строками
     * @param {{taskName: [param, param]}} params - объект с указанными аргументами
     */
    check(checkPoint, weights, prohibitions={}, correctResults, params){
        let checked = {};
        let points = 0;
        loop: for(let task in checkPoint.tasks){
            const taskFunction = checkPoint.tasks[task]
            checked[task] = {
                points: 0,
                task: {
                    points: 0,
                    reasons: new Array
                }
            }
            let assertTask = null
            try {
                assertTask = checkPoint.assertTask(task, correctResults[task], ...params[task])
            } catch(e){
                checked[task] = {
                    points: 0,
                    reasons: [e]
                }      
            }
            if(assertTask === null) continue loop;
            if(assertTask.status){
                checked[task] = {
                    points: weights[task],
                    reasons: ["Результаты совпали"]
                }      
                points += weights[task];
            } else {
                checked[task] = {
                    points: 0,
                    reasons: [`Результаты не совпали с ожидаемыми: ${assertTask.message}`]
                }      
            }
            //Check for prohibited usage
            if(prohibitions[task]){
                let reasons = [];
                const taskFunctionString = taskFunction.toString();
                for(let prohibition of prohibitions[task]){
                    if(taskFunctionString.includes(prohibition)){
                        if(prohibition.endsWith("(")) {
                            reasons.push(`Использовано "${prohibition})"`)
                        }
                        else {
                            reasons.push(`Использовано "${prohibition}"`)   
                        }
                        points -= weights[task];
                        checked[task] = {
                            points: 0,
                            reasons: reasons
                           
                        }
                    }
                }
                if(reasons && JSON.stringify(reasons) !== JSON.stringify(checked[task].reasons)) {
                    checked[task].reasons.push(...reasons);
                }
            }
        }
        return {
            points: points,
            ...checked
        }

    }
}