const cardContainer = document.querySelector('.container_cards')

const getAsyncData = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        data.forEach((item) => {
            const card = document.createElement('div')
            card.classList = 'card'
            card.innerHTML = `
                <h3>${item.title}</h3>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuiXzxmanE7fz6N9pIgYw6NdeMrd5n1Z4G_A&s" alt="photo">
                <p>${item.body}</p>
            `
            cardContainer.append(card)
        })
        
    }catch(e){
        console.error(e);
    }
}
getAsyncData()
