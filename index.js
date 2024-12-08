import * as filenames from './filenames.json' with { type: "json" };
async function importCheckPointsAsObject(){
    let checkPoints = []
    let fileNameArray = Object.create(null)
    fileNameArray = filenames['default']
    for(let fileName of fileNameArray){
        let checkPoint = Object.values(await import(`./src/checkpoints/${fileName}`))[0]
        checkPoints.push(checkPoint)
    }
    return checkPoints
}
const checkPoints = await importCheckPointsAsObject()
import Checker from './src/classes/CheckerClass.js'
import CheckPoint from './src/classes/checkPointClass.js';
const checker = new Checker();

const docMain = document.getElementById('main');
const docNavCheckPoints = document.getElementById("navCheckPoints");
const checkPointHeader = document.getElementById("checkPointHeader");
let [docCheckPoints, studentToCheckPoint] = checkPointsToObject(checkPoints)

function checkPointsToObject(checkPoints){
    let docCheckPoints = {}
    let studentToCheckPoint = {}
    for(let checkPoint of checkPoints){
        let checkPointName = checkPoint.checkPointName;
        let group = checkPoint.group;
        let student = checkPoint.studentName;

        studentToCheckPoint[`${student} ${checkPointName}`] = checkPoint
        if(!docCheckPoints[checkPointName]) {
            docCheckPoints[checkPointName] = {[group]: {[student]: checkPoint}};
        }
        if(!docCheckPoints[checkPointName][group]){
            docCheckPoints[checkPointName][group] = {[student]: checkPoint};    
        }
        if(!docCheckPoints[checkPointName][group][student]){
            docCheckPoints[checkPointName][group][student]  = checkPoint ;
        }
    }   
    return [docCheckPoints, studentToCheckPoint]
}

/**
 * 
 * @param {{checkPointName: {groupName: {studentName: CheckPoint}}}} checkPoinstObject 
 */
function checkPointsObjectToHtml(checkPoinstObject){
    for(let checkPoint in checkPoinstObject){
        const details = document.createElement("details")
        docNavCheckPoints.appendChild(details)
        const cpSummary = document.createElement("summary")
        cpSummary.className = "сheckPoint"
        details.className = "сheckPointDetails"
        cpSummary.innerText = checkPoint
        details.appendChild(cpSummary)
        
        

        for(let group in checkPoinstObject[checkPoint]){
            const groupDetails = document.createElement("details")
            details.appendChild(groupDetails)
            const groupSummary = document.createElement("summary")
            groupSummary.innerText = group
            groupDetails.className = "groupDetails"
            groupSummary.className = "group"
            groupDetails.appendChild(groupSummary)
            const groupUl = document.createElement("ul")
            groupDetails.appendChild(groupUl)

            for(let student in checkPoinstObject[checkPoint][group]){
                const studentLi = document.createElement("li")
                studentLi.innerText = student
                studentLi.className = "student"
                groupUl.appendChild(studentLi)
            }
        }
    }
}
checkPointsObjectToHtml(docCheckPoints)
const checkPointCheckers = {
    "КТ №1 - циклы" : {
        "Тест 1": {
            weights: {"task01": 5, "task02": 5}, 
            prohibitions: {}, 
            correctResults: {"task01": 5, "task02": 5}, 
            params: {"task01": [2,3], "task02" : [10,5]}},
        "Тест 2": {
            weights: {"task01": 5, "task02": 5}, 
            prohibitions: {}, 
            correctResults: {"task01": 10, "task02": 10}, 
            params: {"task01": [7,3], "task02" : [10,0]}}
    }
}
function openCheckPoint(checkPoint) {
    if(!Object.keys(checkPointCheckers).includes(checkPoint.checkPointName)){
        const checkPointHeader = document.getElementById("checkPointHeader");
        const name = document.createElement("p");
        name.innerText = `Проверка на "${checkPoint.checkPointName}" не найдена`
        name.className = "taskStatusError"
        name.style.fontSize = "48px"
        checkPointHeader.appendChild(name)
        return
    }
    const checkPointHeader = document.getElementById("checkPointHeader");
    const allPoints = document.createElement("p");
    const name = document.createElement("p");
    name.innerText = checkPoint.studentName

    checkPointHeader.appendChild(name)
    let testResults = {}
    for(let test in checkPointCheckers[checkPoint.checkPointName]){

        let weights = checkPointCheckers[checkPoint.checkPointName][test]["weights"]
        let prohibitions = checkPointCheckers[checkPoint.checkPointName][test]["prohibitions"]
        let correctResults = checkPointCheckers[checkPoint.checkPointName][test]["correctResults"]
        let params = checkPointCheckers[checkPoint.checkPointName][test]["params"]

        let testResult = checker.check(
            checkPoint, 
            weights,
            prohibitions,
            correctResults,
            params)
        
        testResults[test] = testResult
    }
    const tasks = Object.keys(checkPoint.tasks)
    let testPoints = [];
    for(let test in testResults){
        testPoints.push(testResults[test]["points"])
    }
    let maxPoints = Object.values(checkPointCheckers[checkPoint.checkPointName]["Тест 1"]["weights"]).reduce((sum, el) => sum + el, 0)
    let gotPoints = Math.min(...testPoints)

    allPoints.innerText = `Результат: ${gotPoints}/${maxPoints}`
    checkPointHeader.appendChild(allPoints)

    
    for(let task in tasks){
        const taskDiv = document.createElement("div")
        taskDiv.className = "task"
        let taskName = `task0${+task+1}`
        const taskHeader = document.createElement("div")
        taskHeader.className = "taskHeader"
        taskHeader.innerText = `Задание ${+task+1}`

        taskDiv.appendChild(taskHeader)
        docMain.appendChild(taskDiv)
        
        const taskCode = document.createElement("details")
        taskCode.className = "taskCode"
        const taskCodeSummary = document.createElement("summary")
        taskCodeSummary.innerText = "Код"
        taskCode.appendChild(taskCodeSummary)
        const taskCodePre = document.createElement("pre")
        taskCodePre.innerText = checkPoint["tasks"][taskName].toString()
        taskCode.appendChild(taskCodePre)

        taskDiv.appendChild(taskCode)

        for(let test in testResults){
            let taskTestResult = testResults[test][taskName]
            if(JSON.stringify(taskTestResult.reasons) === JSON.stringify(["Результаты совпали"])){
                const taskTest = document.createElement("div")
                taskTest.className = "taskTestSuccess"

                const taskTestName = document.createElement("p")
                taskTestName.innerText = `${test}`
                const taskTestStatus = document.createElement("p")
                taskTestStatus.innerText = "Правильно"
                taskTestStatus.className = "taskStatusSuccess"
                taskTest.appendChild(taskTestName)
                taskTest.appendChild(taskTestStatus)


                taskDiv.appendChild(taskTest)
            } else {
                const taskTest = document.createElement("details")
                taskTest.className = "taskTestError" 

                const summary = document.createElement("summary")
                const div = document.createElement("div")
                taskTest.appendChild(summary)
                summary.appendChild(div)

                const taskTestName = document.createElement("p")
                taskTestName.innerText = `${test}`
                const taskTestStatus = document.createElement("p")
                taskTestStatus.innerText = "Ошибка"
                taskTestStatus.className = "taskStatusError"

                const pre = document.createElement("pre")
                pre.innerText = taskTestResult.reasons.join(", ")

                taskTest.appendChild(pre)
                div.appendChild(taskTestName)
                div.appendChild(taskTestStatus)

                taskDiv.appendChild(taskTest)
            }
        }
    }
}

const students = document.getElementsByClassName("student")
for(let student of students){
    student.onclick = () => {
        let checkPointName = student.parentElement.parentElement.parentElement.innerText.split("\n")[0]
        docMain.replaceChildren(checkPointHeader);
        checkPointHeader.innerHTML = '';
        let chosenStudent = studentToCheckPoint[`${student.innerText} ${checkPointName}`]
        openCheckPoint(chosenStudent)
    }
}