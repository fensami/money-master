function foodRentCloths(element){
    const foodField = document.getElementById(element);
    const foodFieldString = foodField.value;
    const food = parseFloat(foodFieldString);
    // foodField.value = '';
    return food;
    
}
function totalExpanceBalance(balance){
    const totalExpance = document.getElementById(balance);
    const totalExpanceString = totalExpance.innerText;
    const total = parseFloat(totalExpanceString);
    return total;
}

//
function setTextElementValueById(elementId, value){
    const textElement = document.getElementById(elementId);
    textElement.innerText = value;
}