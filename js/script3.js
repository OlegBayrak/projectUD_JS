//Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
//Должен получиться точно такой же массив

// Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    //console.log(arr.length);
    let masslength = arr.length;
    console.log(masslength);
    for (let i = 0; i<= masslength-1; i++){
        result[i]=arr[i];
    }
  //  console.log(result);
    // Не трогаем
    return result;
}

// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    let masslength2 = data.length;
    for (let i = 0; i < masslength2; i++){
        if (typeof(data[i]) == 'number') {
            data[i] = data[i] * 2;
           // console.log(data[i]);
        } else{
            data[i] = data[i] + " - done";
          //  console.log(data[i]);
        }
    }
console.log(data);
    // Пишем решение вот тут
    
 
    // Не трогаем
    return data;
}

// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    let masslength3 = data.length; 
   // console.log(masslength3);
    // Пишем решение вот тут
    for(let i = 1; i <= masslength3; i++){
        result[i-1] = data[masslength3-i];
      //  console.log(result[i-1]);
    }
    //console.log(result);
    // Не трогаем
    return result;
}