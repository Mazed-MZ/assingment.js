// kilometerToMeter

function kilometerToMeter(km){
    var meter = km * 1000;
    return meter;
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