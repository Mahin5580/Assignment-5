// donation noakhali
document.getElementById('btn-donation-noakhali').addEventListener('click', function () {
    const inputNoakhali = getInputValueById('input-amount-noakhali');
    const balance = getTextFieldValueById('my-balance');
    const donationNoakhali = getTextFieldValueById('donation-noakhali');

    if (isNaN(inputNoakhali) || inputNoakhali <= 0) {
        alert('Invalid Donation Amount');
        return;
    }
    if (balance < inputNoakhali) {
        alert('Not enough Money');
        return;
    }

    const newDonation = donationNoakhali + inputNoakhali;
    document.getElementById('donation-noakhali').innerText = newDonation;
    // console.log(newDonation);


    const newBalance = balance - inputNoakhali;
    document.getElementById('my-balance').innerText = newBalance;
    document.getElementById('input-amount-noakhali').value = "";

    // history section

    const historySection = document.createElement('div');
    historySection.className = "space-y-4 mx-auto w-8/12 border-2 p-3 rounded-lg mb-4";

    historySection.innerHTML = `
    <h2 class="font-bold text-xl">${inputNoakhali} Taka is Donate for Flood at Noakhali, Bangladesh</h2>
    <p class="opacity-70">Date : ${new Date().toLocaleDateString('en-GB')} ${new Date().toLocaleTimeString('en-GB')} GMT +0600 (Bangladesh Standard Time)</p>
    `;
    const historyContainer = document.getElementById('history-container');
    historyContainer.appendChild(historySection);
})


