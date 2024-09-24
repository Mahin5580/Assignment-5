// donation feni
document.getElementById('btn-donation-feni').addEventListener('click',function(){
    const inputFeni=getInputValueById('input-amount-feni');
    console.log(inputFeni);

    if(isNaN(inputFeni) || inputFeni<=0){
        alert('Invalid Donation Amount');
        return;
    }
    const donationFeni=getTextFieldValueById('donation-feni');
    const newDonation=donationFeni+inputFeni;
    document.getElementById('donation-feni').innerText=newDonation;
    // console.log(newDonation);

    const balance=getTextFieldValueById('my-balance');
    const newBalance=balance-inputFeni;
    document.getElementById('my-balance').innerText=newBalance;
    


})

