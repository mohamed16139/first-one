const decreaseButton = document.getElementById('decrease');
const increaseButton = document.getElementById('increase');
const countElement = document.getElementById('count');

let count = 0;

function updateCount() {
    countElement.textContent = count;
}

decreaseButton.addEventListener('click', () => {
    count--;
    updateCount();
});

increaseButton.addEventListener('click', () => {
    count++;
    updateCount();
});

updateCount();
