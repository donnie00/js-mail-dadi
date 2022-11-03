const submitBtnEl = document.getElementById('submit');
const failureEl = document.getElementById('failure');
const successEl = document.getElementById('success');

const mailAllowed = [
	'giovannirossi@mail.it',
	'mariobianchi@mail.it',
	'giginopeluzzo@mail.it',
];

const userMailEl = document.querySelector('[type = email]');

submitBtnEl.addEventListener('click', function () {
	const userMail = userMailEl.value;

	let found = false;

	for (let i = 0; i < mailAllowed.length; i++) {
		const element = mailAllowed[i];

		if (element === userMail) {
			found = true;
		}
	}

	console.log(found);

	if (found) {
		successEl.classList.remove('d-none');
		failureEl.classList.add('d-none');
	} else {
		successEl.classList.add('d-none');
		failureEl.classList.remove('d-none');
	}
});
