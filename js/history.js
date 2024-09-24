const donationTab=document.getElementById('btn-donation');
const historyTab=document.getElementById('btn-history');

// toggle button

historyTab.addEventListener('click',function(){
    historyTab.classList.add('bg-lime-400', 'hover:bg-lime-300')
    donationTab.classList.remove('bg-lime-400', 'hover:bg-lime-300')
    donationTab.classList.add('hover:bg-gray-100', 'bg-gray-200')
    document.getElementById('donation-part').classList.add('hidden')
    document.getElementById('history-container').classList.remove("hidden");
})
donationTab.addEventListener('click',function(){
    historyTab.classList.add('bg-gray-200', 'hover:bg-gray-100')
    historyTab.classList.remove('bg-lime-400', 'hover:bg-lime-300')
    donationTab.classList.add('bg-lime-400', 'hover:bg-lime-300')
    document.getElementById('donation-part').classList.remove('hidden')
    document.getElementById('history-container').classList.add("hidden");
    
})

