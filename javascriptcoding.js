function factorial(num) {
    if (num === 1) {
        return num;
    } else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(4));

function binarySearch(numArray, key) {
    var middleInd = Math.floor(numArray.length / 2);
    var middleElm = numArray[middleInd];
    if (middleElm === key) { 
        return true;
     }
    else if (middleElm < key && numArray.length > 1) {
        return binarySearch(numArray.splice(middleInd, numArray.length), key);
    }
    else if (middleElm > key && numArray.length > 1) {
        return binarySearch(numArray.splice(0, middleInd), key);
    }
    else return false;
}

console.log(binarySearch([5,7,12,16,36,39,42,56,71],56));


// splice method

var pets=['rat','mouse','dog','elephant','tiger','lion'];
pets.splice(2,2,'fox','wolfes');
console.log(pets);

var pet=['rat','mouse','dog','elephant','tiger','lion'];
pet.splice(2,1,'fox','wolfes');
console.log(pet);

var pets1 = ["Cat", "Mouse", "Rat", "Cactus"];
    pets1.splice(0, 3, "Llama", "Horse", "Chipmunk");
    console.log('one '+pets1);

    var pets2 = ["Cat", "Mouse", "Rat", "Cactus"];
    pets2.splice(3, 0, "Llama");
    console.log('two' + pets2);

//slice method:

var carArray =['Mercedes-Benz', 'BMW', 'Audi'];
var modelArray = carArray.slice(0, 2);
console.log(modelArray);


