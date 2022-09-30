'use strict'

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr, group_num, num_team) {
    arr.sort();
    let itera = Math.floor(arr.length / num_team);
    console.log(itera);
  
    for (let i = 1; i<=itera; i++){
        let index = '';
        index = `${i}';
        arr + "i" = arr.slice(1*i,3*i);
        console.log(arr${i});
    }
}

//console.log(sortStudentsByGroups(students));
sortStudentsByGroups(students, 5, 2);