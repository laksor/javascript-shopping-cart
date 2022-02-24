function updateNumber(quantityy,isIncreasing){
    const quantity = document.getElementById(quantityy);
    let quantityNumber = quantity.value;

    if(isIncreasing == true){
        quantityNumber = parseInt(quantityNumber) + 1;
    }
    else if(quantityNumber > 0){
        quantityNumber = parseInt(quantityNumber) - 1;
    }
    quantity.value = quantityNumber;
    // phone price
    const phoneTotal = document.getElementById('iphone-price');
    phoneTotal.innerText = quantityNumber * 1219;
    // case price
    const caseTotal = document.getElementById('case-price');
    caseTotal.innerText = quantityNumber * 59;
}

// phone increase
document.getElementById('iphone-increase').addEventListener('click', function(){
    updateNumber('iphone-quantity',true);
})
// phone decrease
document.getElementById('iphone-decrease').addEventListener('click', function(){
    updateNumber('iphone-quantity',false);
})

// case increase
document.getElementById('case-increase').addEventListener('click', function(){
    updateNumber('case-quantity',true);
})
// case decrease
document.getElementById('case-decrease').addEventListener('click', function(){
    updateNumber('case-quantity',false);
})