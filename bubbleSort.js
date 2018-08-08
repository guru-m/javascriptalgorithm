function bubbleSort(array){

for(var i=array.length;i >0 ;i--){

    for(var j=0;j<i;j++){
        if(array[j] > array[j+1]){
          var temp=array[j];
          array[j]=array[j+1];
          array[j+1]=temp;
        }
    }
}
return array;

}

console.log('Bubble sort test case 1 : ' + bubbleSort([5,3,8,2,1,4]));
console.log('Bubble sort test case 2 : '+ bubbleSort([20,20,3,56,1,22,22]));
console.log('Bubble sort test case 3 : '+ bubbleSort([20,-20,3,-56,1,22,-22]));