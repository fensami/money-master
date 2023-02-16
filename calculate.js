document.getElementById('calculate').addEventListener('click', function(){
    const income = foodRentCloths('income');

    const food = foodRentCloths('food');
    const rent = foodRentCloths('rent');
    const cloths = foodRentCloths('clothes');
   
    
    
    const totalExpanceBalance = food + rent + cloths;

    setTextElementValueById('total-expenses', totalExpanceBalance);


    const totalBalance = income - totalExpanceBalance;
    setTextElementValueById('balance-total', totalBalance);
    


    

    
})

