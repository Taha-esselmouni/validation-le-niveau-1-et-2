const AIGUILLE_DHEURE = document.querySelector('#hour');
const AIGUILLE_DE_MINUTE = document.querySelector('#minute');
const AIGUILLE_DE_SECONDE = document.querySelector('#second');


let seconds_turns = 0;
let minutes_turns = 0;
let hours_turns = 0;

function demarrerLaMontre() {
	

	let date_instance = new Date();

	
	let seconds_number = date_instance.getSeconds() / 60;
	let minutes_number = (date_instance.getMinutes() + seconds_number) / 60;
	let hours_number = (date_instance.getHours() + minutes_number) / 12;

	
	let seconds_degree = seconds_number * 360;
	let minutes_degree = minutes_number * 360;
	let hours_degree = hours_number * 360;

	if (seconds_degree == 0) seconds_turns += 1;
	if (minutes_degree == 0) minutes_turns += 1;
	if (hours_degree == 0) hours_turns += 1;


	AIGUILLE_DHEURE.style.transform = `rotate(${hours_degree + 360 * hours_turns}deg)`;
	AIGUILLE_DE_MINUTE.style.transform = `rotate(${minutes_degree + 360 * minutes_turns}deg)`;
	AIGUILLE_DE_SECONDE.style.transform = `rotate(${seconds_degree + 360 * seconds_turns}deg)`;
}

const interval = setInterval(demarrerLaMontre, 1000);