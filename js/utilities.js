function getInputValueById(id){
    const inputAmount = document.getElementById(id).value;
    const inputAmountNumber=parseFloat(inputAmount);
    return inputAmountNumber;
}
function getTextFieldValueById(id){
    const donateAmount=document.getElementById(id).innerText;
    const donateAmountNumber=parseFloat(donateAmount);
    return donateAmountNumber;

}


