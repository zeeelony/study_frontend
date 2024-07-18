function calculateBMI() {
    // Получаем значения роста и веса из полей ввода
    let height = document.getElementById('height').value / 100; // переводим в метры
    let weight = document.getElementById('weight').value;

    // Рассчитываем BMI
    let bmi = weight / (height * height);

    // Определяем интерпретацию результата
    let interpretation;
    if (bmi < 18.5) {
        interpretation = "Недостаточный вес";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = "Нормальный вес";
    } else {
        interpretation = "Избыточный вес";
    }

    // Выводим результаты на страницу
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Ваш BMI: <strong>${bmi.toFixed(1)}</strong></p><p>${interpretation}</p>`;
}
