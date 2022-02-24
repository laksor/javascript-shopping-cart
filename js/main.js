function updateNumber(product, price, isIncreasing){
    const quantity = document.getElementById(product + '-quantity');
    let quantityNumber = quantity.value;

    if(isIncreasing == true){
        quantityNumber = parseInt(quantityNumber) + 1;
    }
    else if(quantityNumber > 0){
        quantityNumber = parseInt(quantityNumber) - 1;
    }
    quantity.value = quantityNumber;
    // phone price
    const priceTotal = document.getElementById(product + '-price');
    priceTotal.innerText = quantityNumber * price;
}

// phone increase
document.getElementById('iphone-increase').addEventListener('click', function(){
    updateNumber('iphone', 1219, true);
})
// phone decrease
document.getElementById('iphone-decrease').addEventListener('click', function(){
    updateNumber('iphone', 1219, false);
})

// case increase
document.getElementById('case-increase').addEventListener('click', function(){
    updateNumber('case', 59, true);
})
// case decrease
document.getElementById('case-decrease').addEventListener('click', function(){
    updateNumber('case', 59, false);
})