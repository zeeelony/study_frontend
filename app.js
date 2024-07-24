function generateNumbers() {
    let lottoContainer = document.getElementById('lotto-container');
    lottoContainer.innerHTML = '';
    let numbers = generateRandomNumbers(6, 1, 99);

    numbers.forEach(function(number) {
        let ball = document.createElement('div');
        ball.classList.add('lotto-ball');
        ball.textContent = number;
        lottoContainer.appendChild(ball);
    });
}

function generateRandomNumbers(amount, min, max) {
    let numbers = [];
    for (let i = 0; i < amount; i++) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.push(randomNumber);
    }
    return numbers;
}