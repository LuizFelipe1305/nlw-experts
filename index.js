const perguntas = [
    {
        pergunta: "Qual é a palavra-chave utilizada para declarar uma variável em JavaScript?",
        respostas: [
            "var",
            "let",
            "const",
        ],
        correta: 0
    },
    {
        pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
        respostas: [
            "//",
            "/*",
            "#",
        ],
        correta: 0
    },
    {
        pergunta: "O que é o DOM em JavaScript?",
        respostas: [
            "Documento de Objetos Múltiplos",
            "Modelo de Objetos do Documento",
            "Documento de Operações Móveis",
        ],
        correta: 1
    },
    {
        pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
        respostas: [
            "print()",
            "log()",
            "console()",
        ],
        correta: 1
    },
    {
        pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "push()",
            "add()",
            "append()",
        ],
        correta: 0
    },
    {
        pergunta: "O que o operador '===' faz em JavaScript?",
        respostas: [
            "Compara valores",
            "Atribuição",
            "Compara valores e tipos",
        ],
        correta: 2
    },
    {
        pergunta: "Como você verifica o comprimento de uma string em JavaScript?",
        respostas: [
            "lengthOf()",
            "size()",
            "length()",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do método 'parseInt()' em JavaScript?",
        respostas: [
            "Converter uma string em um número inteiro",
            "Arredondar um número decimal",
            "Converter uma string em uma string de números",
        ],
        correta: 0
    },
    {
        pergunta: "O que é o JSON em JavaScript?",
        respostas: [
            "Uma biblioteca de gráficos",
            "JavaScript Object Notation",
            "Um método de ordenação de arrays",
        ],
        correta: 1
    },
    {
        pergunta: "Como você declara uma função em JavaScript?",
        respostas: [
            "function myFunction()",
            "var = function()",
            "declare function myFunction()",
        ],
        correta: 0
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//loop ou laço de repetição
for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true) //vai clonar toda a estrutura a partir da tag TEMPLATE
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            
            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas            
        }



        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
}