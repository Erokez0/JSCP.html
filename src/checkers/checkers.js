const checkPointCheckers = {

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
            },
        },
    'КТ №4. "массивы"': {
        "Тест 1": {
            weights: {
                "task01": 2,
                "task02": 2,
                "task03": 2,
                "task04": 2,
                "task05": 2,

            },
            prohibitions: {}, 

            correctResults: {
                "task01": 700,
                "task02": [ "apple", "watermelon", "qiwi", "lemon" ],
                "task03": "Hello my world!",
                "task04": true,
                "task05": 1
            },

            params: {
                "task01": [[ 
                    { price : 100 }, 
                    { price: 150 }, 
                    { price: 200 }, 
                    { price: 100 },
                    { price: 150 }, 
                ]], 
                "task02": [
                    [ 
                        {id: 1, name: 'apple'}, 
                        {id: 2, name: 'watermelon'}, 
                        {id: 3, name: 'qiwi'}, 
                        {id: 4, name: 'lemon'} 
                    ]
                ],
                "task03": [
                    "Hello", "my", "world!"
                ],
                "task04": [
                    {id: 1, particle: 10}
                ],
                "task05": [
                    [[1], {id: 40}, [100], [300], {part: 10}],  {id: 40}
                ]

            }
        },
    }
}

export {checkPointCheckers}