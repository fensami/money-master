//  const discountPrice = priceAmountValue - (priceAmountValue * discount/100);

document.getElementById('save').addEventListener('click', function(){
     //  step 1 get the saving value
    const discountInput = foodRentCloths('discount'); 
     // step 2 calculate the total discount from total income amount
   const income = foodRentCloths('income');
   const getDiscount = income * discountInput/ 100;
   //saving input
   const savingAmountSpan = totalExpanceBalance('saving');
   setTextElementValueById('saving', getDiscount)

   //3 items used
   const food = foodRentCloths('food');
    const rent = foodRentCloths('rent');
    const cloths = foodRentCloths('clothes');

    //total expance
    const totalExpance = food + rent + cloths;
    const balance = totalExpanceBalance('balance-total');

    const totalBalance = income - totalExpance;
    // setTextElementValueById('balance-total', totalBalance)

    const remainingBalance = balance - getDiscount;
    
    // const lastBalance = totalExpanceBalance('last-balance')
    setTextElementValueById('last-balance', remainingBalance)


    //update
    // const totalExpanceAmount = totalExpanceBalance('total-expenses');

    //calculate total 
    // const totalBalance = income - totalExpance;
    // const balance = totalExpanceBalance('balance-total');

    // const remainingBalance = balance - getDiscount;
    // const lastBalance = totalExpanceBalance('last-balance');
    // setTextElementValueById('last-balance', remainingBalance);

})
