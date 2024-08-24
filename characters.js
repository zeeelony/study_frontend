let globalCharacters = {};

const charactersJSON = async () => {
    try {
        const response = await fetch("../data/characters.json");
        const data = await response.json();

        globalCharacters = {};

        data.forEach((item, index) => {
            globalCharacters[`character${index + 1}`] = {
                name: item.name,
                age: item.age,
                photo: item.photo
            };
        });

        console.log(globalCharacters);
        LoadChar(); 

    } catch (e) {
        console.error("Ошибка:", e);
    }
};

function LoadChar() {
    const charactersContainer = document.querySelector('.characters');
    charactersContainer.innerHTML = '';

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

document.addEventListener('DOMContentLoaded', charactersJSON);



//Create new char (null)

const CreateChar = document.querySelector("#btnNC-get");

deletjson = () => {
    const deletechar = document.querySelectorAll("li.character");
    deletechar.forEach(element => element.remove());    
};

CreateChar.onclick = () => {
    deletjson()
    openModalChar()
}



/////MODAL NEW CHAR

const modalChar = document.querySelector(".modalChar");
const modalTriggerChar = document.querySelector("#btnNC-get");
const modalCloseButtonChar = document.querySelector(".close");

const openModalChar = () => {
    modalChar.style.display = "block";
    document.body.style.overflow = "hidden";
};

const closeModalChar = () => {
    modalChar.style.display = "none";
    document.body.style.overflow = "";
};

modalTriggerChar.onclick = () => openModalChar()
modalCloseButtonChar.onclick = () => closeModalChar()

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

