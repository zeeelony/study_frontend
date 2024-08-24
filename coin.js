const results = [];

document.getElementById('flipButton').addEventListener('click', () => {
    const coin = document.getElementById('coin');
    const resultDiv = document.getElementById('result');
    
    coin.classList.add('flip');
    
    setTimeout(() => {
        coin.classList.remove('flip');
        
        const isHeads = Math.random() > 0.5;
        
        const result = isHeads ? 'Орел' : 'Решка';
        
        results.push(result);
        
        if (results.length > 7) {
            results.shift();
        }
                coin.textContent = result;
        displayResults(results);
        
    }, 1000);
});
function displayResults(results) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Последние результаты: ' + results.join(', ');
}
