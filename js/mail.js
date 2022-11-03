const mailAllowed = [
	'giovannirossi@mail.it',
	'mariobianchi@mail.it',
	'giginopeluzzo@mail.it',
];

const userMail = prompt('Inserisci la tua email');

let found = false;

for (let i = 0; i < mailAllowed.length; i++) {
	const element = mailAllowed[i];

	if (element === userMail) {
		found = true;
	}
}

if (found) {
	alert('Utente autorizzato. Benvenuto.');
} else {
	alert('Utente non autorizzato.');
}
