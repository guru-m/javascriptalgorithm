function isPalindrome(string) {
    string = string.toLowerCase();
    var charecterArray = string.split('');
    var validCharecters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    var letterArray = [];
    charecterArray.forEach(element => {

        if (validCharecters.indexOf(element) > -1) {
            letterArray.push(element);}
        });

        if (letterArray.join('') === letterArray.reverse().join('')) {
            return true;
        }
        else { return false; }
   
}

console.log(isPalindrome("Madam I'm adam"));
console.log(isPalindrome("Race car"));
console.log(isPalindrome("coding javascript"));