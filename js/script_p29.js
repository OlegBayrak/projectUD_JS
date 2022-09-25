
function lastnumber(arr){ //функция поиска последнего значения массива
    for (let i = 0; i<= arr.length-1; i++){
        endnumber=arr[i];
    };
    return endnumber;
}
//console.log(lastnumber([1,2,4,5,7,8]));

function getTimeFromMinutes(minutes) {
    if (minutes>0){
    let hours = Math.floor(minutes / 60);
    let ending = "час";
    let array = Array.from(hours.toString(), Number); //перевести число в массив из цифр
    for (let i = 0; i<= array.length-1; i++){
        endnumber=array[i];
    };
    console.log(endnumber === 1);
    if (endnumber === 1) {
        ending = "час"; 
    } else if (endnumber>=3 && endnumber<=4){
        ending = "часа";
    } else if (endnumber >=6 || endnumber == 0) {
        ending ="часов";
    }; 
    let left_minutes = minutes - hours*60;
    var result = "Это " + hours + " " + ending + " и " + left_minutes +" минут";
    return result;} else {return "Ошибка, проверьте данные"};
}
console.log(getTimeFromMinutes(60));
//getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

//getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

//getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

//getTimeFromMinutes(-150) 
//1 час 
// 2 часа 3 часа 4 часа 
// 5 часов 6,7,8,9,10,11,12