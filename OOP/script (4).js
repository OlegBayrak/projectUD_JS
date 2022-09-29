const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000,
}

function GetShopSquare (arr){
    let square = 0;
    let volume = 0;
    arr.shops.forEach(shop => {
    square += shop.length * shop.width;
   });
    return square;
}
//console.log(GetShopSquare(shoppingMallData));

function isBudgetEnough(data) {
    let volume = 0;
    let required_budget = 0;
    let square = GetShopSquare(data);
    let result = "";
    const {shops, height, moneyPer1m3, budget} = data;
    volume = height * square;
    required_budget = volume * moneyPer1m3;
    if (required_budget<=budget) {
        result = "Бюджета достаточно";
    } else {result="Бюджета недостаточно"};
    return result;
};

console.log(isBudgetEnough(shoppingMallData));