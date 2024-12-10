export const checkPointCheckers = {
    "КТ №1. тест" : {
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
    },



    'КТ №2. "Функции"': {
        "Тест 1": {
            weights: {
                "task01": 2, 
                "task02": 2, 
                "task03": 2, 
                "task04": 2, 
                "task05": 2}, 
            prohibitions: {"task04": ["reverse(", "Reversed("]}, 
            correctResults: {
                "task01": false, 
                "task02": [3,6,9,12], 
                "task03": 30, 
                "task04": [4,3,2,1], 
                "task05": true}, 
            params: {
                "task01": [13], 
                "task02": [[1,2,3,4], 3], 
                "task03": [['10','Строка','5g','15','05']], 
                "task04": [[1,2,3,4]], 
                "task05": [[1,2,3,4], (elem) => elem == 3]}
        },
        "Тест 2": {
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
                "task01": [undefined], 
                "task02": [[], 1], 
                "task03": [[3]], 
                "task04": [[]], 
                "task05": [[], () => true]}
        }
        }
    }