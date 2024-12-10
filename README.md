# JSCP.html
Веб-интерфейс для быстрой проверки контрольных точек по дисциплине JavaScript

## Добавление работы студента на проверку
Вид работы студента
```
import CheckPoint from "../classes/checkPointClass.js"
..
export const usmodjon = new CheckPoint(
    "Имя Фамилия", 
    "Название контрольной точки",
    "Номер группы",
    [
    Используемые функции в порядке контрольной точки
]
)
```
Добавить .js файл в папку src/checkpoints

## Запуск
0. Установить возможные зависимости

Node.js

Nodemon
1. Обновить файлы контрольных точек

Ручное обновление файлов
```
npm run reload
```
Автоматическое обновление файлов
```
npm run autoreload
```
2. Развернуть index.html

Можно пользоваться

## Добавление новых проверок
В файле src/checkers/checkers.js в объекте checkPointCheckers добавить ключ с названием КТ
По ключу добавлять объекты с названиями тестов
```
"Тест №": {
            weights: {
                "task01": 2, 
                "task02": 2, 
                "task03": 2, 
                "task04": 2, 
                "task05": 2}, 
            prohibitions: {"task04": ["reverse(", "Reversed("]}, 
            correctResults: {
                "task01": false, 
                "task02": [], 
                "task03": 3, 
                "task04": [], 
                "task05": false}, 
            params: {
                "task01": [ undefined ], 
                "task02": [ [], 1 ], 
                "task03": [ [3] ], 
                "task04": [ [] ], 
                "task05": [ [], () => true ]
            }
}
```
weights - возможное количество баллов за каждую задачу

prohibitions - запретные слова для каждой задачи

correctResults - правильные результаты при заданных параметрах для каждой задачи

params - массив параметров для каждой задачи