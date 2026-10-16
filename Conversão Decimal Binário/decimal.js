import LinkedStack from "../stack-class.js";

document.getElementById("form-valor").addEventListener("submit", function (e) {
    e.preventDefault()

    const inputElement = document.getElementById("input-valor");
    const orgNumber = parseInt(inputElement.value, 10);

    let decNumber = orgNumber

    const restoStack = new LinkedStack()
    let resto
    let binaryString = ''
    
    while (decNumber > 0){
        resto = decNumber % 2
        restoStack.push(resto)
        decNumber = Math.floor(decNumber / 2)
        }
    while (!restoStack.isEmpty()){
        binaryString += restoStack.pop().toString()
    }
    document.getElementById('mensagem').innerText = `O número ${orgNumber} em binário é igual a ${binaryString}`;
})