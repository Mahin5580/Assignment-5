function getElementValueById(id){
    const inputAmount = document.getElementById(id).value;
    const inputAmountNumber=parseFloat(inputAmount).toFixed(2);
    return inputAmountNumber;
}
function getTextFieldValueById(id){
    const donateAmount=document.getElementById(id).innerText;
    const donateAmountNumber=parseFloat(donateAmount).toFixed(2);
    return donateAmountNumber;

}