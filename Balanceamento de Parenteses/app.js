import LinkedStack from "../stack-class.js"

document.getElementById('form-valor').addEventListener('submit', function (e) {
    e.preventDefault()

    const expressao = document.getElementById('input-valor').value

    const expStack = new LinkedStack()
    let parenteses 

    for ( parenteses of expressao) {

        if (parenteses === "(") {
            expStack.push('(')
        } else if (parenteses === ")") {
            if (expStack.isEmpty()) {
                return document.getElementById('mensagem').innerText = `Expressão Inválida`
            } else {
                expStack.pop()
            }
        }
    }

    if (expStack.isEmpty()){
        document.getElementById('mensagem').innerText = `Expressão Válida`
    } else {
        document.getElementById('mensagem').innerText = `Expressão Inválida`
    }
})