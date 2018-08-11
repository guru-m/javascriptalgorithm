var a=2;
var b=5;
var c;
var d=1000;

for(var i=0; i<5;i++){

    if(i >a && i <b){
        c =1000;
    }
    if(i === 3){
        d *=2;
    }
}

console.log(a);
console.log(b);
console.log(c);
console.log(d);

try{
    console.log('inside try');
    TextTrackList;
}catch(err){
    console.log('inside the error blog'+err);
}finally{
    console.log('inside final block to clean up the code');
}

try{

    console.log('second try block');
    // if you want to see it is going to catch block or not see like
    // con.log it will go to error block
}catch(err){
    console.log('second catch block');
    document.getElementById("errorDisplay").innerHTML=err.message;

    document.getElementById("errorDisplay").innerHTML=err.name;
}finally{
    console.log('second finally block');
}

// how to through an error 

function test(){
   var message,inputvalue;
   message=document.getElementById("message");
   message.innerHTML='';

   inputvalue=document.getElementById("example").value ;
//    inputvalue.innerHTML='';

try{
console.log('3rd try block');
if(inputvalue == "" )throw "empty";
if(isNaN(inputvalue)) throw "is not a number";
inputvalue=Number(inputvalue);
if(inputvalue < 5 ) throw "Too Low";
if(inputvalue > 10 ) throw "Too high";
}catch(err){
    console.log('3rd catch block');
    message.innerHTML="Here is the error " + err;
}finally{
    console.log('3rd finally block');
    document.getElementById("finallytest").innerHTML="finally executing here";
}

}

//error handling:

var num=1;
try{
    num.toPrecision(500);
}catch(err){
    document.getElementById('rangeError').innerHTML=err.name;

}


