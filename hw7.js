var deepArray = [
    [1, 2],
    [3, 4],
    { '1': 'hi'},
    [5, [4, 5]],
]

// var deepArray2 = deepArray.slice();
// deepArray2[0][0] = 2; // перезапизывает значение в deepArray 🙁

//Необходимо написать функцию глубого клонирования массива, предплогая 
//что элементами массива являются приметивы или массив
//для проверки массив ли это исользовать метод  Array.isArray;
//Дополнительное задание* - написать такую же функцию, но в данном случае элементами массив могут быть еще и объекты


function arrayClone(arr) {
    let subArr;
    if (Array.isArray(arr)) {
        subArr = arr.slice(0);
        for (let i = 0; i < subArr.length; i++) {
            subArr[i] = arrayClone(subArr[i]);
        }
        return subArr;
    } else if (typeof(arr) === 'object'){
        let copy = {};
        for(let key in arr) {
            copy[key] = arr[key];
        }
        return copy;
    } else return arr;
}

var test = arrayClone(deepArray);
test[2][1] = 20;
test[3][1][0] = 'bye';
console.log(deepArray);
console.log(test);