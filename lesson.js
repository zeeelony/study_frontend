// phoneblock

const phoneInput = document.querySelector("#phone_input")
const phoneButton = document.querySelector("#phone_button")
const phoneSpan = document.querySelector("#phone_result")

const regExp = /^\+996[2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if(regExp.test(phoneInput.value)){
        phoneSpan.innerHTMLe = "мы вам позвоним"
        phoneSpan.style.color = "green"
    }else{
        phoneSpan.innerHTML = "уходите от сюда"
        phoneSpan.style.color = "red"
    }
}

// TAB SLIDER 

const tabContentBlocks = document.querySelectorAll(".tab_content_block")
const tabItems = document.querySelectorAll(".tab_content_item")
const tabParent = document.querySelector(".tab_content_items")

const hideTabContent = () => {
    tabContentBlocks.forEach((item) => {
        item.style.display = "none"
    });
    tabItems.forEach((item) => {
        item.classList.remove("tab_content_item_active")
    })
}

const showTabContent = (index = 0) => {
    tabContentBlocks[index].style.display = "block"
    tabItems[index].classList.add("tab_content_item_active")
}

hideTabContent()
showTabContent()

tabParent.onclick = (event) => {
    if(event.target.classList.contains("tab_content_item")){
        tabItems.forEach((item, index) => {
            if(event.target === item){
                hideTabContent()
                showTabContent(index)
            }
        })
    }
}


const autoSwitchTabs = (currentIndex = 0) => {
    currentIndex++;
    if (currentIndex >= tabContentBlocks.length) {
        currentIndex = 0; 
    }
    hideTabContent();
    showTabContent(currentIndex);
};

hideTabContent();
showTabContent();


const intervalId = setInterval(autoSwitchTabs, 3000);

tabParent.onclick = (event) => {
    if (event.target.classList.contains("tab_content_item")) {
        tabItems.forEach((item, index) => {
            if (event.target === item) {
                currentIndex = index;
                hideTabContent();
                showTabContent(index);
            }
        });
    }
};


//CONVERTER
const somInput = document.querySelector("#som");
const usdInput = document.querySelector("#usd");
const eurInput = document.querySelector("#eur");

const fetchData = async () => {
    try {
        const response = await fetch("../data/convert.json", {
            headers: {
                "Content-type": "application/json"
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
    }
};

const converter = (element, targetElement1, targetElement2) => {
    element.oninput = async () => {
        const data = await fetchData();

        if (data) {
            const somToUsd = data.usd;
            const somToEur = data.eur;

            if (element === somInput) {
                usdInput.value = (element.value / somToUsd).toFixed(2);
                eurInput.value = (element.value / somToEur).toFixed(2);
            } else if (element === usdInput) {
                somInput.value = (element.value * somToUsd).toFixed(2);
                eurInput.value = (element.value * somToUsd / somToEur).toFixed(2);
            } else if (element === eurInput) {
                somInput.value = (element.value * somToEur).toFixed(2);
                usdInput.value = (element.value * somToEur / somToUsd).toFixed(2);
            }
        }
    };
};

converter(somInput, usdInput, eurInput);
converter(usdInput, somInput, eurInput);
converter(eurInput, somInput, usdInput);



// CARD SWITCHER

const cardBlock = document.querySelector(".card")
const btnNext = document.querySelector("#btn-next")
const btnPrev = document.querySelector("#btn-prev")

let cardId = 1


const getAsyncDate = async (id) => {
    try{
            const reponse  = await fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)
            const data = await reponse.json()
            cardBlock.innerHTML= `
                <h4>${data.id}</h4>
                <span>${data.title}</span>
            `
    }catch(e){
        console.error(e);    
    }
   
}
getAsyncDate()

btnNext.onclick = () => {
    if(cardId++ && cardId >= 201){
        cardId = 1
    }
        getAsyncDate()
        
}
btnPrev.onclick = () => {
    if(cardId-- && cardId <= 0){
        cardId= 200
    }
        getAsyncDate()
}





// btnNext.onclick = () => {
//     fetch(`https://jsonplaceholder.typeincode.com/todos/${cardId}`)
//     .then(response => response.json())
//     .then(data => {
//         cardBlock.innerHTML = `
//         <p>${data.tittle}</p>
//         <p style ="color: ${data.completed ?  "green" : "red"}">${data.completed}</p>
//         <span>${data.id}</span>        
//         `
//     })
// }


// WEATHER

// query params - параметры запроса


const citySearchInput =  document.querySelector(".cityName")
const cityName = document.querySelector(".city")
const cityTemp = document.querySelector(".temp")

const API_KEY="e417df62e04d3b1b111abeab19cea714";
const API_URL= "http://api.openweathermap.org/data/2.5/weather"
citySearchInput.oninput = (event) => {
    fetch(`${API_URL}?q=${event.target.value}&appid=${API_KEY}`)
            cityName.innerHTML = data.name || "City is not defined!"
            cityTemp.innerHTML =data.main?.temp ? Math.round( data.main?.temp -273) + "&deg;C" : "///";            
}


// optional chaining - опциональная цепочка - ?.

const address = {
    location :{
        street : "Ibragimova",
        number : 103
    },
    id : 123
}


const getAsyncDateFetch = async () => {
    try{
            const reponse  = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await reponse.json()
            console.log(data);
            
    }catch(e){
        console.error(e);    
    }
   
}
getAsyncDateFetch()