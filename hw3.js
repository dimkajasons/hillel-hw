// Задание 1
var num = 5;
function isSimple(number){
    var bool = true;
    if(number<=2){
        bool = true;
    } else{
        for(var i=2; i<number; i++){
            if(number%i == 0){
                bool = false;
                break;
            } else {
                bool = true;
            }
        }
    }
    return bool;
}
console.log(isSimple(num));


// Задание 2
var num2 = 54;
function myFunction(number){
    var sum = 0;
    var quontity;
    var str = number.toString().split('');
    for(var i = 0; i < str.length; i++){
        sum += Number(str[i])
    }
    console.log(str.length);
    console.log(sum);
    
}
myFunction((num2));


// Задание 3 и 3а
var arr1 = [1, 3, 4, 9];
var arr2 = [2, 3, 6, 0];
// Сравнение массивов
function comparison(array1, array2) {
    var scoreArr1 = 0;
    var scoreArr2 = 0;
    for(var i=0; i<array1.length; i++){
        if(array1[i] > array2[i]){
            scoreArr1 += 1;
        } else if (array1[i] < array2[i]){
            scoreArr2 += 1;
        }
    }
    console.log('Итоговый счет: ', scoreArr1, ':', scoreArr2)
}
comparison(arr1,arr2);


// обратное сравнение массивов
function comparisonReverse(array1, array2) {
    var scoreArr1 = 0;
    var scoreArr2 = 0;
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] > array2[array2.length - 1 - i]) {
            scoreArr1 += 1;
        } else if (array1[i] < array2[array2.length -1 - i]) {
            scoreArr2 += 1;
        }
    }
    console.log('Итоговый счет: ', scoreArr1, ':', scoreArr2)
}
comparisonReverse(arr1, arr2);


// Задание 4
stringArr = ['One', 'Two', 'Three', 'Four'];
function makeTag(array){
    for(var i=0; i<array.length; i++){
        console.log('<span>' + array[i] + '</span>');
    }
}
makeTag(stringArr);