const io = require('./io');
const math = require('./math');

async function main() {
  const operation = await io.ask('Qual operação deseja realizar (+, -, *, /)? ');
  const num1 = parseFloat(await io.ask('Digite o primeiro número: '));
  const num2 = parseFloat(await io.ask('Digite o segundo número: '));

  let result;
  switch (operation) {
    case '+':
      result = math.add(num1, num2);
      break;
    case '-':
      result = math.subtract(num1, num2);
      break;
    case '*':
      result = math.multiply(num1, num2);
      break;
    case '/':
      result = math.divide(num1, num2);
      break;
    default:
      io.print('Operação inválida');
      io.close();
      return;
  }

  io.print(`O resultado é: ${result}`);
  io.close();
}

main();