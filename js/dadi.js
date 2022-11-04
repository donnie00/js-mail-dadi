const firstDiceEl = document.getElementById('firstDice');
const secondDiceEl = document.getElementById('secondDice');
const playBtnEl = document.getElementById('playBtn');
const playerOneNumber = document.getElementById('playerOneNumber');
const playerTwoNumber = document.getElementById('playerTwoNumber');
const playerOneScoreEl = document.getElementById('playerOneScore');
const playerTwoScoreEl = document.getElementById('playerTwoScore');

const firstDice = document.createElement('img');
const secondDice = document.createElement('img');

firstDiceEl.append(firstDice);
secondDiceEl.append(secondDice);

firstDice.src = `dice-img/rolling-dice.png`;
secondDice.src = `dice-img/rolling-dice.png`;

let playerOneScore = 0;
let playerTwoScore = 0;

playBtnEl.addEventListener('click', function () {
	const firstNumber = Math.floor(Math.random() * (7 - 1) + 1);
	const secondNumber = Math.floor(Math.random() * (7 - 1) + 1);

	playerOneNumber.classList.remove(
		'text-primary',
		'text-success',
		'text-warning'
	);
	playerTwoNumber.classList.remove(
		'text-primary',
		'text-success',
		'text-warning'
	);

	firstDice.src = `dice-img/${firstNumber}-dice.png`;
	secondDice.src = `dice-img/${secondNumber}-dice.png`;

	if (firstNumber > secondNumber) {
		console.log('Vince 1');

		playerOneNumber.classList.add('text-success');

		playerOneScore += 1;
	} else if (firstNumber < secondNumber) {
		console.log('Vince 2');

		playerTwoNumber.classList.add('text-success');

		playerTwoScore += 1;
	} else {
		console.log('Draw');

		playerOneNumber.classList.add('text-warning');
		playerTwoNumber.classList.add('text-warning');
	}

	playBtnEl.innerText = 'Replay';
	playerOneNumber.innerText = firstNumber;
	playerOneScoreEl.innerText = playerOneScore;

	playerTwoNumber.innerText = secondNumber;
	playerTwoScoreEl.innerText = playerTwoScore;

	playerOneScoreEl.classList.remove(
		'table-success',
		'table-danger',
		'table-warning'
	);
	playerTwoScoreEl.classList.remove(
		'table-success',
		'table-danger',
		'table-warning'
	);

	if (playerOneScore > playerTwoScore) {
		playerOneScoreEl.classList.add('table-success');
		playerTwoScoreEl.classList.add('table-danger');
	} else if (playerOneScore < playerTwoScore) {
		playerOneScoreEl.classList.add('table-danger');
		playerTwoScoreEl.classList.add('table-success');
	} else {
		playerOneScoreEl.classList.add('table-warning');
		playerTwoScoreEl.classList.add('table-warning');
	}
});
