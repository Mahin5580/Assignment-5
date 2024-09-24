// donation noakhali
document.getElementById('btn-donation-noakhali').addEventListener('click',function(){
    const inputNoakhali=getInputValueById('input-amount-noakhali');
    console.log(inputNoakhali);

    if(isNaN(inputNoakhali) || inputNoakhali<=0){
        alert('Invalid Donation Amount');
        return;
    }
    const donationNoakhali=getTextFieldValueById('donation-noakhali');
    const newDonation=donationNoakhali+inputNoakhali;
    document.getElementById('donation-noakhali').innerText=newDonation;
    // console.log(newDonation);

    const balance=getTextFieldValueById('my-balance');
    const newBalance=balance-inputNoakhali;
    document.getElementById('my-balance').innerText=newBalance;
    


})


