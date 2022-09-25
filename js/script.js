// Место для второй задачи
function getCoupeNumber(ticket_number) {
    if (ticket_number>0 && typeof(ticket_number)=="number" && ticket_number<=36 && ticket_number % 1 == 0){
    let result = Math.ceil(ticket_number/4);
    return result;
    } else if (ticket_number == 0 || ticket_number>36){
        return "Таких мест в вагоне не существует";}
    else if(ticket_number<0 || typeof(ticket_number)!= "number" || ticket_number % 1 !== 0){
        return ("Ошибка. Проверьте правильность введенного номера места");
    }
    
}

console.log(getCoupeNumber(3));
console.log(getCoupeNumber(33));
console.log(getCoupeNumber(0));
console.log(getCoupeNumber(37));
console.log(getCoupeNumber(-25));
console.log(getCoupeNumber(32.5));
//console.log(Math.ceil(2/4));