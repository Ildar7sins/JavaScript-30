const secondHand = document.querySelector('.clock__hand--second');
const minutesHand = document.querySelector('.clock__hand--minute');
const hoursHand = document.querySelector('.clock__hand--hour');

function setDate(){
	const now = new Date();
	const second = now.getSeconds();
	const minutes = now.getMinutes() ;
	const hours = now.getHours() ;
	
	const secondDegrees = (( second / 60) * 360) + 90;
	const minutesDegrees = (( minutes / 60) * 360) + 90;
	const hoursDegrees = (( hours / 60) * 360) + 90;

	secondHand.style.transform= `rotate(${secondDegrees}deg)`;
	minutesHand.style.transform= `rotate(${minutesDegrees}deg)`;
	hoursHand.style.transform= `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);