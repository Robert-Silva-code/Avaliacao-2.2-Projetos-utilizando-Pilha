import LinkedStack from "../stack-class.js"

document.getElementById('form-valor').addEventListener('submit', function (e) {
    e.preventDefault()

    const expressao = document.getElementById('input-valor').value

    const expStack = new LinkedStack()
    let parenteses 

    for ( parenteses in expressao) {

        if (parenteses === "(") {
            expStack.push("(")
            console.log("Push" + expStack.peek())
        }
        
        if (expStack.isEmpty()) {
            console.log(expStack.peek())
            document.getElementById('mensagem').innerText = `Expressão Inválida`
        } else {
            expStack.pop()
        }
    }

    if (expStack.isEmpty()){
        document.getElementById('mensagem').innerText = `Expressão Válida`
    }    
})