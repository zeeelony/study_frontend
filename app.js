// #1

function extractNumbers(str) {
    return str.match(/\d+/g).map(Number);
}

console.log(extractNumbers("a1fg5hj6")); // [1, 5, 6]


//#2
function fibonacciWithDelay(a = 0, b = 1) {
    console.log(a);

    if (b > 144) return;

    setTimeout(() => {
        fibonacciWithDelay(b, a + b);
    }, 1000);
}

fibonacciWithDelay();  // Запуск функции


// #3

// const requestAPI = async() => {
//     try{
//         const response = await fetch ("https://fakestoreapi.com/products")
//         const data = await response.json()
//         data.forEach((item) => {
//             console.log(item.title);
             
//         });
//     }catch(e){
//         console.error(e);
        
//     }
// }
// requestAPI()


// #4
let buttonsContainer = document.querySelector(".buttons");

buttonsContainer.onclick = (event) => {
    if (event.target.tagName === 'BUTTON') {
        let color = event.target.textContent;
        document.body.style.backgroundColor = color;
    }
};

// #5

const block = document.querySelector(".block");
const btn= document.getElementById("#btn");

btn.onclick = () => {
    if (block.style.display === 'none') {
        block.style.display = 'block';
    } else {
        block.style.display = 'none';
    }
};

// #6

let count = 0;
const counterElement = document.querySelector(".counter");

const intervalId = setInterval(() => {
    counterElement.textContent = count;
    count++;

    if (count > 100) {
        clearInterval(intervalId);
    }
}, 1);

// #7

const Url = "data.json";
async function fetchJsonData() {
    try {
        const response = await fetch(Url);
        const data = await response.json();
        console.log(data);
    } catch (e) {
        console.error(e);
        
    }
}

document.querySelector(".btnfetch").addEventListener('click', fetchJsonData);