// alert('inside reverse word');

function reverseWord(string){

    var wordsArray=string.split(' ');
    var reverseWordArray=[];

    wordsArray.forEach(element => {
        var reverseWord='';
        for(var i=element.length-1; i >=0; i --){
            reverseWord += element[i];
        }
        reverseWordArray.push(reverseWord);
    });

return reverseWordArray.join(' ');
}

console.log('Reverse word senario : ' + reverseWord('This is a string of words'));
console.log('Reverse word : ' + reverseWord('javascript coding'));