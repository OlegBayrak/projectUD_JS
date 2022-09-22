'user strict'

function returnNeighboringNumbers(numb) {
    let arr=[numb-1,numb,numb+1];
    return(arr);
}
 console.log(returnNeighboringNumbers(5));

 function getMathResult (base, iter) {
    if (typeof(iter) == "number" && iter >= 0) {
        result = base;
        for (let i = 1; i<= iter-1; i++){
           result = result + '---' + base*(i+1);
        } 
    } else {result = base;}
    return result;
 }
 console.log(getMathResult(5,3));
 console.log(getMathResult(3,10));

// Место для первой задачи
function sayHello(name) {
    let result = ("Привет," + name + "!");
  return result;   
}
  console.log(sayHello("Oleh"));