import LinkedStack from "../stack-class.js";

const textArea = document.getElementById('input-valor')

const textStack = new LinkedStack()
textArea.addEventListener('input', function (e) {
    e.preventDefault()

    const texto = textArea.value

    textStack.push(texto)

})


document.getElementById('form-valor').addEventListener('submit', function (e) {
    e.preventDefault()
    
    if (textStack.isEmpty()) {
        return document.getElementById('mensagem').innerText = `Digite algo antes de voltar`
    }

    textStack.pop()
    textArea.value = textStack.peek()
})
