//first - catch the elements
let elButton = document.getElementById("TheButton")
let elTipInput = document.getElementById("tipRange")
let elTipOutput = document.getElementById("howToTip")
let elBillAmount = document.getElementById("bill")
let elCurrencySelect = document.getElementById("currency")


//now - eventListeners
elButton.addEventListener('click', () => {
    calculate(elTipInput.value)
})


function calculate(tipPrecentage) {
    let bill = elBillAmount.value
    if (!bill) {
        alert('You must insert bill value')
    }
    let x = tipPrecentage / 100
    let tip = x * bill
    reRender(tip)
}
function reRender(howMuchToTip) {
    elTipOutput.innerText = `${howMuchToTip} ${elCurrencySelect.value}`
}
