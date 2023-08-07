function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
const numero = 10;
console.log(`El factorial de ${numero} es: ${factorial(numero)}`);
