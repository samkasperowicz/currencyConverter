let resultButton = document.querySelector(".result");
let selects = document.querySelectorAll(".options select");
let sel1 = selects[0];
let sel2 = selects[1];
let inputs = document.querySelectorAll(".input input");
let inpt1 = inputs[0];
let inpt2 = inputs[1];

resultButton.addEventListener("click", doConversion);

async function doConversion() {
    if (sel1.value == sel2.value) {
        inpt2.value = inpt1.value;
    }
    else {
        let freq = await fetch("https://api.frankfurter.app/latest?from=" + sel1.value +"&to=" + sel2.value);
        let json = await freq.json();
        let rate = json.rates[sel2.value];
        let result = parseFloat(inpt1.value) * parseFloat(rate);
        inpt2.value = Number.parseFloat(result).toFixed(2);
    }
}

