//Ex 1


const containsOnlyDigits = (str) => {
    const regExp = /^\d+$/;
    return regExp.test(str);
}

console.log(containsOnlyDigits("12345")); // Выведет true
console.log(containsOnlyDigits("12a45")); // Выведет false
console.log(containsOnlyDigits("12a45a"));
console.log(containsOnlyDigits("a12a45"));

//Ex 2

setInterval(() => {
    console.log("Прошла секунда!");
    
}, 1000);


ex 3 

const count = () => {
    let i = 0;
    const interval = setInterval(() => {
        if(i < 10){
            i++
            console.log(i);
            
        }
    }, 1000); // Правильно продолжите... );
}
count()

ex 4 
const block = document.querySelector(".block");
block.addEventListener("click", function() {
    block.classList.toggle("bg-color");
});



ex 5

data = () => {
    const request = new XMLHttpRequest(); 
    request.open("GET", "data.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    request.onload = function() {
        const data = JSON.parse(request.responseText);
        console.log(data);
        
    }
    
    }
    data()

