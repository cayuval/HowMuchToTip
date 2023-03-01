//first - catch the elements
let elButton = document.getElementById("TheButton")
let elTipInput = document.getElementById("tipRange")
let elTipOutput = document.getElementById("howToTip")
let elBillAmount = document.getElementById("bill")
let elCurrencySelect = document.getElementById("currency")
let elTotal = document.getElementById("total")


//now - eventListeners
elButton.addEventListener('click', () => {
    console.log('yello');
    calculate(elTipInput.value)
})


function calculate(tipPrecentage) {
    let bill = elBillAmount.value
    if (!bill) {
        alert('You must insert bill value')
    } else {

        let x = tipPrecentage / 100
        let tip = x * bill
        if (tip % 1 !== 0) {
            tip = tip.toFixed(2)
        }
        let total = Number(bill) + Number(tip)
        total = total.toFixed(2)
        reRender(tip, total)
    }
}
function reRender(howMuchToTip, total) {
    const finalTip = Number(howMuchToTip).toLocaleString("en-US")
    const finalTotal = Number(total).toLocaleString("en-US")
    elTipOutput.innerText = `${finalTip} ${elCurrencySelect.value}`
    elTotal.innerText = `Total: ${finalTotal}`
}
