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

let resultado = numeroPar(55);
console.log("Resultado é: " + resultado);
