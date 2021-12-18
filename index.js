const currentDate = new Date();

const $mouth = document.querySelector('#mouth');
const $day = document.querySelector('#day');

$mouth.innerHTML = currentDate.toLocaleString('en-US', { month: 'short' });
$day.innerHTML = currentDate.toLocaleString('en-US', { day: 'numeric' });