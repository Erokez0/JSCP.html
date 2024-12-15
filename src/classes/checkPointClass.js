export default class CheckPoint {
    constructor(studentName, checkPointName, group, tasks){
        this.studentName = studentName;
        this.checkPointName  = checkPointName;
        this.group = group;
        this.tasks = {};
        for(let ix = 1; ix < tasks.length+1; ix++){
            this.tasks[`task0${ix}`] = tasks[ix-1];
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
        let paramsCopy = copy(params);

        function copy(object) {
            let objectCopy = Array.isArray(object) ? [] : {};
            let value;
            for (const key in object) {
              value = object[key];
              objectCopy[key] = (typeof value === "object") ? copy(value) : value;
            }
            return objectCopy;
        }
        let taskResult;
        try {
            taskResult = this.tasks[taskName](...paramsCopy);
        } catch (e) {
            console.error(e);
            taskResult = `${e}`;
        }
        let assertionResult = JSON.stringify(taskResult) === JSON.stringify(correctResult);
        return {
            status: assertionResult,
            message: assertionResult
                ? "Success!" 
                : `${JSON.stringify(taskResult)} != ${JSON.stringify(correctResult)}`
        }
    }
}