// 1.строка наоборот
var str1 = 'string';
var newStr1 = str1.split('').reverse().join('');
console.log(newStr1);

// 2.
var str2 = 'this is my test string';

//первый пример через regExp
var regEx = /string/;
console.log(str2.match(regEx)[0]);

//а для остальных примеров написал функцию
function cutWord(fullString, part){
    var partOfString = part;
    var startChar = fullString.search(part);

    var arrPart = part.split('');
    var length = arrPart.length;

    var newString = fullString.substr(startChar, length);

    return newString;
}
console.log(cutWord(str2, 'this'));
console.log(cutWord(str2, 'this is'));
console.log(cutWord(str2, 'in'));

// 3.
var str3 = 'this is my test string';
function largestWord(x){
    var lengthWord = 0;
    var word = '';
    var arrWords = x.split(' ');
    for (var i=0; i<arrWords.length; i++){
        if (arrWords[i].split('').length > lengthWord){
            lengthWord = arrWords[i].split('').length;
            word = arrWords[i];
        }
    }
    console.log(word);
}
largestWord(str3);


// 1.
function PositiveOrNegative(){
    var num = 15;
    if (num > 0){
        console.log(num + ' - положительное')
    } else if (num == 0){
        console.log(num)
    } else {
        console.log(num + ' - отрицательное')
    }
}
PositiveOrNegative();

// 2.
function evenOrOdd(){
    var num2 = 15;
    if(num2 == 0){
        console.log(num2);
    } else if (num2 % 2 == 0) {
        console.log(num2 + '- четное');
    } else {
        console.log(num2 + '- нечетное');
    }
}
evenOrOdd();

// Задача 3 (про скидки)
var price = 5;
function discount(x){
    var result;
    if(x>4){
        result = x * 0.9;
        console.log(result);
    } else if(x <= 4 && x >0){
        result = x * 0.75;
        console.log(result);
    } else {
        console.log('wrong value')
    }
}
discount(price);



//Statements

var myArr = ['Back', 'Back', 'Forward', 'Left', 'Right', 'Right'];
var myArrLong = ['Back', 'Back', 'Left', 'Right', 'Back', 'Back']; // для проверки ограничения
function moving(arr) {

    function checkEdge() {
        if (coordinates[0] >= 3 || coordinates[1] >= 3 || coordinates[0] <= -3 || coordinates[1] <= -3){
            return false;
        } else{
            return true;
        }
    }

    var coordinates = [0, 0];
    var follow = '';
    console.log('Начало', coordinates); //без квадратных скобок (не забыть спросить!!!!)
    for(var i = 0; i<arr.length; i++){
        if(!checkEdge()){
            break;
        }
        follow = arr[i];
        switch (follow) {
            case 'Forward':
                coordinates[0] += 1;
                console.log(coordinates);
                break;
            case 'Back':
                coordinates[0] -= 1;
                console.log(coordinates);
                break;
            case 'Right':
                coordinates[1] +=1;
                console.log(coordinates);
                break;
            case 'Left':
                coordinates[1] -=1;
                console.log(coordinates);
                break;
            default:
                console.log('here is an error')
                break;
        }
    }
    console.log('Конец', coordinates);
}

moving(myArrLong);
