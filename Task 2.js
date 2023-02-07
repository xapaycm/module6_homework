function getClassNumber(number) {
    let primeNumber = "Простое число";
    let notPrimeNumber = "Число не простое";
    let notCorrect = "Данные не верны";

    if (number < 2) {
        return notPrimeNumber;
//Простое число - натуральное число отличное от единицы, значит все числа меньше двойки не являются постыми.
    } else if (number > 1000) {
        return notCorrect;
//По условию задачи, если число больше 1000 - "Данные не верны".
    } for(i = 2; i < number; i++){
        if (number % i == 0) {
            return notPrimeNumber;
//Если число делется без остатка на другое натуральное отличное от 1 и самого себя - число не простое.
        }
    }
    return primeNumber;
//В остальных случаях число простое.
}
console.log(getClassNumber(2))

