
document.getElementById('confirm-btn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = document.getElementById('num2').value; 
    const operacao = document.getElementById('operacao').value;

    let resultado;

    switch (operacao) {
        case 'adicao':
            resultado = adicao(num1, parseFloat(num2));
            break;
        case 'subtracao':
            resultado = subtracao(num1, parseFloat(num2));
            break;
        case 'multiplicacao':
            resultado = multiplicacao(num1, parseFloat(num2));
            break;
        case 'divisao':
            resultado = divisao(num1, parseFloat(num2));
            break;
        case 'numeroPar':
            resultado = numeroPar(num1);
            break;
        case 'somaIntervalo':
            resultado = somaIntervalo(num1, parseFloat(num2));
            break;
        case 'fatorial':
            resultado = fatorial(num1);
            break;
        case 'contarVogais':
            resultado = contarVogais(num2);
            break;
        default:
            resultado = "Operação inválida!";
            break;
    }

    document.getElementById('result').textContent = resultado;
});

function adicao(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Erro: Divisão por zero!";
    }
    return a / b;
}

function numeroPar(a) {
    return a % 2 === 0 ? "É par" : "Não é par";
}

function somaIntervalo(start, end) {
    let soma = 0;
    for (let i = start; i <= end; i++) {
        soma += i;
    }
    return soma;
}

function fatorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * fatorial(n - 1);
}

function contarVogais(str) {
    let vogais = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    str = str.toLowerCase();
    
    for (let i = 0; i < str.length; i++) {
        if (vogais.includes(str[i])) {
            count++;
        }
    }
    
    return count;
}

let activeInput = 'num1'; 

document.getElementById('num1').addEventListener('focus', function() {
    activeInput = 'num1';
});

document.getElementById('num2').addEventListener('focus', function() {
    activeInput = 'num2';
});

const numButtons = document.querySelectorAll('.num-btn');
numButtons.forEach(button => {
    button.addEventListener('click', () => {
        const input = document.getElementById(activeInput); 
        const value = button.value;
        
        if (value === '+/-') {
            input.value = parseFloat(input.value) * -1;
        } else if (value === ',') {
            if (!input.value.includes('.')) {
                input.value += '.';
            }
        } else {
            input.value += value;
        }
    });
});
