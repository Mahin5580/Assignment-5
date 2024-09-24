// donation feni
document.getElementById('btn-donation-feni').addEventListener('click',function(){
    const inputFeni=getInputValueById('input-amount-feni');
    const donationFeni=getTextFieldValueById('donation-feni');

    const balance=getTextFieldValueById('my-balance');

    if(isNaN(inputFeni) || inputFeni<=0){
        alert('Invalid Donation Amount');
        return;
    }
    if(balance<inputFeni){
        alert('Not enough Money');
        return;
    }
    
    const newDonation=donationFeni+inputFeni;
    document.getElementById('donation-feni').innerText=newDonation;
    // console.log(newDonation);

    
    const newBalance=balance-inputFeni;
    document.getElementById('my-balance').innerText=newBalance;
     document.getElementById('input-amount-feni').value="";
    
     // history section

    const historySection = document.createElement('div');
    historySection.className = "space-y-4 mx-auto w-8/12 border-2 p-3 rounded-lg mb-4";

    historySection.innerHTML = `
    <h2 class="font-bold text-xl">${inputFeni} Taka is Donate for Flood Relief in Feni,Bangladesh</h2>
    <p class="opacity-70">Date : ${new Date().toLocaleDateString('en-GB')} ${new Date().toLocaleTimeString('en-GB')} GMT +0600 (Bangladesh Standard Time)</p>
    `;
    const historyContainer = document.getElementById('history-container');
    historyContainer.appendChild(historySection);


})

