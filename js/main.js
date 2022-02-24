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

    // price update
    const priceTotal = document.getElementById(product + '-price');
    priceTotal.innerText = quantityNumber * price;
    // calling calculate function
    calculateTotal();
}
// input value
function getInputValue(product){
    const input = document.getElementById(product + '-quantity');
    const inputValue = parseInt(input.value);
    return inputValue;
}
// calculate total
function calculateTotal(){
    const phoneTotal = getInputValue('iphone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;

    document.getElementById('subtotal').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;


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
// check out
document.getElementById('check-out').addEventListener('click', function(){
    window.location.href = 'thank.html';
})