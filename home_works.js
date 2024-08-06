document.getElementById("gmail_button").addEventListener("click", function(){
    let emailInput = document.getElementById("gmail_input").value;
    let messageElement = document.getElementById("gmail_result")
    
    let gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    
    if(gmailRegex.test(emailInput)){
        messageElement.textContent = "Адресс верен";
        messageElement.style.color = "green";
    }else{
        messageElement.textContent = "Адресс не верен";
        messageElement.style.color = "red";
    }
    
})




// block_l1

const parentBlock = document.querySelector(".parent_block");
const childblock = document.querySelector(".child_block");

const offsetWidth = parentBlock.offsetWidth - childblock.offsetWidth
const offsetHeight = parentBlock.offsetHeight - childblock.offsetHeight
let postionX = 0
let postionY = 0

const moveBlock = () => {
        
    if (postionX <  offsetWidth && postionY <= 0) {
        postionX++
        childblock.style.left = `${postionX}px`
        requestAnimationFrame(requestAnimationFrame(moveBlock))
    }else if (postionX >= offsetWidth && postionY < offsetHeight){
        postionY++
        childblock.style.top = `${postionY}px`
        requestAnimationFrame(requestAnimationFrame(moveBlock))
    } 

         if (postionX <=  offsetWidth && postionY == offsetHeight && postionX !=0) {
        postionX--
        childblock.style.left = `${postionX}px`
        requestAnimationFrame(requestAnimationFrame(moveBlock))
    }else if (postionX <= 0 && postionY >= 0){
        postionY--
        childblock.style.top = `${postionY}px`
        requestAnimationFrame(requestAnimationFrame(moveBlock))
    } 
    // moveBlock()
}
moveBlock()