export default class CheckPoint {
    constructor(studentName, checkPointName, group, tasks){
        this.studentName = studentName;
        this.checkPointName  = checkPointName;
        this.group = group
        this.tasks = {}
        for(let ix = 1; ix < tasks.length+1; ix++){
            this.tasks[`task0${ix}`] = tasks[ix-1]
        }
    }

    getFullName() {
        return `${this.checkPointName} - ${this.studentName} - ${this.group}`
    }
    /**
     * Выводит в консоль название и результаты функции задания
     * @param {string} taskName - Название/номер задания
     * @param  {...any} params - параметры функции
     */
    logTask(taskName, ...params){
        try  {
            console.group(taskName)
            const taskResult = this.tasks[taskName](...params)
            console.log(taskResult)
            console.groupEnd()
        } catch(e) {
            throw new Error(`${taskName} - ${e}`)
        }
    }

    /**
     * Выводит в консоль названия и результаты всех функций контрольной точки
     * @param  {[...any]} params - массивы параметров для функций заданий
     */
    logTasks(...params){
        console.group(`${this.checkPointName} - ${this.studentName}`)

        let ix = 0;
        for(let taskName in this.tasks){
            this.logTask(
                taskName,
                ...params[ix]
            )
            ix++
        }
    }

    /**
     * 
     * @param {*} taskName - Название/номер задания
     * @param {*} correctResult - Заведомо верный результат функции задачи
     * @param  {...any} params - параметры, при которых правильный результат был получен
     * @returns объект с ключам status и message
     * @example { status: true, message: "Success!" }
     * @example { status: false, message: "12 != 5" }
     */
    assertTask(taskName, correctResult, ...params){
        let paramsCopy = []
        params.forEach(param => {
            if(typeof param != "function" && !!param){
                paramsCopy.push(JSON.parse(JSON.stringify(param)))
            } else if (param === undefined){
                paramsCopy.push(undefined)
            } else {
                paramsCopy.push(param)
            }
        })

        console.log(taskName, paramsCopy)
        let taskResult = this.tasks[taskName](...paramsCopy)
        let assertionResult = JSON.stringify(taskResult) === JSON.stringify(correctResult);
        return {
            status: assertionResult,
            message: assertionResult
                ? "Success!" 
                : `${JSON.stringify(taskResult)} != ${JSON.stringify(correctResult)}`
        }
    }

    assertTasks(correctResults, ...params){
        const result = {}

        let ix = 0
        let correctResult
        let currentParams
        for(let taskName in this.tasks){
            correctResult = correctResults[ix]
            currentParams = params[ix]

            result[taskName] = this.assertTask(
                taskName,
                correctResult,
                ...currentParams
            )
            ix++
        }
        return result
    }
}