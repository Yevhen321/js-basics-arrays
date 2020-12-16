//1. Напишите функцию, которая подсчитавает сумму четных элентов массива

const newArray = [2, 1, 4, 6, 7, 2, 8, 4, 1];
function calcSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i ++) {
        console.log(array[i] % 2);
        if (array[i] % 2 === 0) {
            sum += array[i];
        }
    }
    return sum;
}
console.log(calcSum(newArray));

//2. Напишите функцию, которая возвращает общий массив из двух заданных
const Array1 = [2, 1, 4, 67, 7, 24, 8, 42, 1];
 const Array2 = [11111, 1, 4, 34, 566, 2, 8, 4, 1];

function addArray (arr1, arr2) {
    let Array3 = [];
    Array3 = arr1.concat(arr2);
    return Array3;
}
console.log(addArray(Array1, Array2));


//3*. Напишите функцию перевода строки в верблюжий регистр


//4. Напишите функцию, которая дополняет нулями целое число до оказанной длины. Поработайте вариант с отрицательными числами. Например, fun(-4,6) вернет -000004
/*
const number = prompt('Vvedite chislo');
const countZeros =  prompt('Skolko dobavit nuley');
function addZero(digit, zeros) {
    let zerosString = '';
    for (let i = 0; i < zeros; i ++) {
        zerosString += 0;
    }
    if (digit < 0)  {
        zerosString = '-' + zerosString;
        digit *= -1;
    }
    return  zerosString + digit;
}
console.log('RES ', addZero(number, countZeros))

//5. Создайте и опишите объект worker.  Выведите его в консоль.
/*
const WORKER = {
    firstname: 'Ivan',
    lastname: 'Petrov',
    position: 'engineer',
    workExperience: '10 years',
    salary: '12000 UAH',
    info: function (){
        console.log ("Hello!", this.firstname + ' ' + this.lastname + ' ' + this.position + ' ' + this.workExperience + ' ' + this.salary);
    },
};
WORKER.info();
*/
//5* + добавьте в него функцию(встроенные методы) : вывести ФИО, начислять доплату 5% если выслуга лет больше 5 лет и 10% если выслуга лет больше 8 лет
/*
const MIN_PERCENT = 0.05;
const MAX_PERCENT = 0.1;
const MIN_EXP = 5;
const MAX_EXP = 8;
const WORKER = {
    firstname: 'Ivan',
    lastname: 'Petrov',
    position: 'engineer',
    workExperience: 8,
    salary: 12000,
    currency: 'UAH',
    calcPrize: function () {
        const workExperience = WORKER.workExperience;
        const salary = WORKER.salary;
        let prize = 0;
        if (workExperience >= MIN_EXP) {
            prize = salary * MIN_PERCENT;
        } else if (workExperience >= MAX_EXP) {
            prize = salary * MAX_PERCENT;
        }
        return prize;
    },
};
console.log ("Hello! Salary of your worker is", WORKER.calcPrize() + ' ' + 'UAH');
*/





