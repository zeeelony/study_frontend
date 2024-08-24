let globalCharacters = {}; // Глобальный объект для хранения персонажей

// Загрузка данных из JSON
const charactersJSON = async () => {
    try {
        const response = await fetch("../data/characters.json");
        const data = await response.json();

        globalCharacters = {}; // Очистка глобального объекта перед заполнением

        data.forEach((item, index) => {
            globalCharacters[`character${index + 1}`] = {
                name: item.name,
                age: item.age,
                photo: item.photo
            };
        });

        console.log(globalCharacters);
        LoadChar(); // Отображаем персонажей

    } catch (e) {
        console.error("Ошибка:", e);
    }
};

// Функция для загрузки и отображения персонажей
function LoadChar() {
    const charactersContainer = document.querySelector('.characters');
    charactersContainer.innerHTML = ''; // Очистка контейнера перед добавлением новых элементов

    for (let key in globalCharacters) {
        if (globalCharacters.hasOwnProperty(key)) {
            const character = globalCharacters[key];
            const characterDiv = document.createElement('div');
            characterDiv.innerHTML = `
                <li class="character">
                    <span><img class="photo" src="${character.photo}" alt="${character.name}"></span>
                    <span class="text">
                        <h2 class="name">${character.name}</h2>
                        <h3 class="age">${character.age}</h3>
                    </span>
                </li>
            `;
            charactersContainer.appendChild(characterDiv);
        }
    }
}

// Обработчик для удаления всех персонажей
const deleteAllCharacters = () => {
    const deletechar = document.querySelectorAll("li.character");
    deletechar.forEach(element => element.remove());
};

// Функция для добавления нового персонажа
function addCharacter(name, age, photo) {
    const index = Object.keys(globalCharacters).length + 1;
    globalCharacters[`character${index}`] = { name, age, photo };
    LoadChar(); // Обновляем отображение
}

// Обработка отправки формы
document.getElementById('characterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const photo = document.getElementById('photo').value;

    addCharacter(name, age, photo); // Добавляем нового персонажа

    closeModalChar(); // Закрываем модальное окно
});

// Открытие и закрытие модального окна
const modalChar = document.querySelector(".modalChar");
const modalTriggerChar = document.querySelector("#btnNC-get");
const modalCloseButtonChar = document.querySelector(".closeNC");

const openModalChar = () => {
    modalChar.style.display = "block";
    document.body.style.overflow = "hidden";
};

const closeModalChar = () => {
    modalChar.style.display = "none";
    document.body.style.overflow = "";
};

modalTriggerChar.onclick = () => openModalChar();
modalCloseButtonChar.onclick = () => closeModalChar();

// Удаление всех персонажей и открытие модального окна при нажатии на кнопку
modalTriggerChar.onclick = () => {
    deleteAllCharacters();
    openModalChar();
};

// Инициализация данных при загрузке страницы
document.addEventListener('DOMContentLoaded', charactersJSON);


//XMLHttpRequest запрос            

// data = () => {
// const request = new XMLHttpRequest(); 
// request.open("GET", "../data/data.json");
// request.setRequestHeader("Content-type", "application/json");
// request.send();
// request.onload = function() {
//     const data = JSON.parse(request.responseText);
//     console.log(data);
    
// }

// }
// data()

