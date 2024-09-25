// donation quota
document.getElementById('btn-donation-quota').addEventListener('click',function(){
    const inputQuota=getInputValueById('input-amount-quota');
    const donationQuota=getTextFieldValueById('donation-quota');
    const balance=getTextFieldValueById('my-balance');

    if(isNaN(inputQuota) || inputQuota<=0){
        alert('Invalid Donation Amount');
        return;
    }
    if(balance<inputQuota){
        alert('Not enough Money');
        return;
    }
    else{
        document.getElementById('my_modal_5').showModal();
    }
    
    const newDonation=donationQuota+inputQuota;
    document.getElementById('donation-quota').innerText=newDonation;
    // console.log(newDonation);

    
    const newBalance=balance-inputQuota;
    document.getElementById('my-balance').innerText=newBalance;
     document.getElementById('input-amount-quota').value="";

     // history section

    const historySection = document.createElement('div');
    historySection.className = "space-y-4 mx-auto w-8/12 border-2 p-3 rounded-lg mb-4";

    historySection.innerHTML = `
    <h2 class="font-bold text-xl">${inputQuota} Taka is Donated for Aid for Injured in the Quota Movement</h2>
    <p class="opacity-70">Date : ${new Date().toLocaleDateString('en-GB')} ${new Date().toLocaleTimeString('en-GB')} GMT +0600 (Bangladesh Standard Time)</p>
    `;
    const historyContainer = document.getElementById('history-container');
    historyContainer.appendChild(historySection);
    


})


