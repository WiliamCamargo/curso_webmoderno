let a = 7;
let b = 94;
let temp;

console.log("a = " + a);
console.log("b = " + b);

// depois da troca... a = 94 e b = 7
temp = a;
a = b;
b = temp;
console.log("a = " + a);
console.log("b = " + b);

// [a, b] = [b, a] para fazer troca de valor entre as variáveis.
