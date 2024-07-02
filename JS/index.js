
var qty = 0, tc

function getValue() {
    qty = parseInt(document.getElementById("qty-display").textContent)
}

function disableButton(){
    if (qty < 1) {
        console.log(`Qty is ${qty}. Disabling buttons.`)
        document.getElementById("qty-decrease").disabled = true
        document.getElementById("add-to-cart").disabled = true
    }
    if (qty != 0){
        console.log(`Qty is ${qty}.Enabling button.`);
        document.getElementById("qty-decrease").disabled = false
        document.getElementById("add-to-cart").disabled = false
    }
}

document.addEventListener("DOMContentLoaded", function(){
    disableButton()
})

document.getElementById("qty-decrease").addEventListener("click", function () {
    getValue()
    if (qty != 0) {
        qty -= 1
        document.getElementById("qty-display").textContent = qty
        tc = qty * 12000
        document.getElementById("total-cost").textContent = tc
    }
    disableButton()
})

document.getElementById("qty-increase").addEventListener("click", function () {
    getValue()
    qty += 1
    document.getElementById("qty-display").textContent = qty
    tc = qty * 12000
    document.getElementById("total-cost").textContent = tc
    disableButton()
})