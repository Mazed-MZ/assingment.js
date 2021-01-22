



// kilometerToMeter

function kilometerToMeter(km){
    var meter = km * 1000;
    return meter;
}





// budgetCalculator

function budgetCalculator(numbersOfItems){
    var price = numbersOfItems[0];
    for(var i = 0; i < numbersOfItems.length; i++){
        price = numbersOfItems[i];
        if(numbersOfItems[0]){
            price = numbersOfItems * 50;
        }
        else if(numbersOfItems[1]){
            var mobile = numbersOfItems[0] * 50;
            var remaining = numbersOfItems[0] - numbersOfItems[1];
            var phone = remaining * 100;
            price = mobile + phone;
        }
        else{
            var mobile = numbersOfItems[0] * 50;
            var phone = numbersOfItems[1] * 100;
            var remaining = numbersOfItems[2] - (numbersOfItems[0] + numbersOfItems[1]);
            var laptop = remaining * 500;
            price = mobile + phone + laptop;
        }
    }    
    return price;
}





// hotelCost

function hotelCost(days){
    var amount = 0;
    if(days<=10){
        amount = days * 100;
    }
    else if(days<=20){
        var firstPackage = 10 * 100;
        var remaining = days - 10;
        var secondPackage = remaining * 80;
        amount = firstPackage + secondPackage;
    }
    else{
        var firstPackage = 10 * 100;
        var secondPackage = 10 * 80;
        var remaining = days - 20;
        var thirdPackage = remaining * 50;
        amount = firstPackage + secondPackage + thirdPackage;
    }
    return amount;
}





// megaFriend

function megaFriend(names){
    var maxName = names[0];
    for(var i = 0; i < names.length; i++){
        var element = names[i];
        if(element > maxName){
            maxName = element;
        }
    }
    return maxName;
}