// kilometerToMeter

function kilometerToMeter(km){
    var meter = km * 1000;
    return meter;
}


// budgetCalculator

function budgetCalculator(numbersOfProduct1){
    var watch = numbersOfProduct1 * 50;
    var phone = numbersOfProduct2 * 100;
    var laptop = numbersOfProduct3 * 500;
    var totalPrice = watch + phone + laptop;
    return totalPrice;
}

var value = budgetCalculator(2);
console.log(value);