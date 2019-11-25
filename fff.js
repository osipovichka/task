//10. Вывести число, которое является зеркальным отображением последовательности цифр заданного числа.


// function getInvertedNumber(number) {
//     let elements = 0; // Кол-во цифр
//     let invertedNum = 0; //складывается перевернутое число
//     let a = number;
//     do {
//         a /= 10;
//         elements++;
//     } while (a >= 1)

//     while (elements !== 0) {
//         let numeral = number % 10;
//         invertedNum += numeral * Math.pow(10, elements - 1);// присваевает разряд последней цифре от первой
//         number = Math.floor(number / 10);
//         elements -= 1;
//     } return invertedNum;
// }
// console.log(getInvertedNumber(584269872354861548796248521379));

function getInvertedNumber(number) {
    let elements = 0; // Кол-во элементов
    let invertedNum = 0; //складывается перевернутое число
    let a = number;
    let b = []; // пробую через массивы

    do {
        a /= 10;
        elements++;
    } while (a >= 1)// кол-во элементов в массиве

    for (i = 0; i <= elements + 1; i++) {
        let numeral = number % 10; 
        b.push(numeral);
        number = Math.floor(number / 10);
        elements -= 1;
    } return b;// в этом варианте задача не доделана т.к. массив складывается из не понятных цифр которые не передаютя в функцию.



}
console.log(getInvertedNumber(584269872354861548796248521379));