// phoneblock

const phoneInput = document.querySelector("#phone_input")
const phoneButton = document.querySelector("#phone_button")
const phoneSpan = document.querySelector("#phone_result")

const regExp = /^\+996[2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if(regExp.test(phoneInput.value)){
        phoneSpan.innerHTMLe = "OK"
        phoneSpan.style.color = "green"
    }else{
        phoneSpan.innerHTML = "NOT OK"
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

// Автоматическое переключение табов каждые 3 секунды
const intervalId = setInterval(autoSwitchTabs, 3000);

tabParent.onclick = (event) => {
    if (event.target.classList.contains("tab_content_item")) {
        tabItems.forEach((item, index) => {
            if (event.target === item) {
                currentIndex = index; // обновляем текущий индекс при клике на таб
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

const converter = (element, targetElement1, targetElement2) => {
    element.oninput = () => {
        const request = new XMLHttpRequest();
        request.open("GET", "../data/convert.json");
        request.setRequestHeader("Content-type", "application/json");
        request.send();

        request.onload = () => {
            const data = JSON.parse(request.response);

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
        };
    };
};
converter(somInput, usdInput, eurInput);
converter(usdInput, somInput, eurInput);
converter(eurInput, somInput, usdInput);
