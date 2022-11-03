const firstNumber = Math.floor(Math.random() * (7 - 1) + 1);
const secondNumber = Math.floor(Math.random() * (7 - 1) + 1);

if (firstNumber < secondNumber) {
	alert('Vince 1');
} else if (firstNumber > secondNumber) {
	alert('Vince 2');
} else alert('Pari');
