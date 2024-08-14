
function LoadChar() {
    const request = new XMLHttpRequest(); 
    request.open("GET", "../data/characters.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();

    
    request.onload = function() {
        if (request.status >= 200 && request.status < 300) {
            const data = JSON.parse(request.responseText);

            
//XMLHttpRequest запрос

            console.log(data);


            data.forEach(character => {
                const characterDiv = document.createElement('div');
                characterDiv.innerHTML = `
                        <li class="character">
                            <span><img class="photo"src="${character.photo}" alt="${character.name}"></span>
                            <h2 class="name">${character.name}</h2>
                            <p class="age">${character.age}</p>
                        </li> 
                `;
                document.querySelector('.characters').appendChild(characterDiv);
            });
        } else {
            console.error("Error loading characters:", request.status, request.statusText);
        }
    };
}

window.addEventListener('load', LoadChar);


//XMLHttpRequest запрос            

data = () => {
const request = new XMLHttpRequest(); 
request.open("GET", "../data/data.json");
request.setRequestHeader("Content-type", "application/json");
request.send();
request.onload = function() {
    const data = JSON.parse(request.responseText);
    console.log(data);
    
}

}
data()
