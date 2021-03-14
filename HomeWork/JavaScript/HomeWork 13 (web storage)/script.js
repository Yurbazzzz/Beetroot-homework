const loadButton = document.querySelector('.list-btn')
const favoriteButton = document.querySelector('.fav-btn')
loadButton.addEventListener('click', () =>{  fetch('https://jsonplaceholder.typicode.com/users/')  
    .then(response => response.json())  
    .then(data => {    const tag = document.querySelector('.list')
    for (i = 0; i < data.length; i++) { 
        tag.insertAdjacentHTML('afterbegin', `<p>Id:${i},User: ${data[i].name},
        Tel: ${data[i].phone}, 
        ADDRESS: ${data[i].address.city}, ${data[i].address.street} <button class="fav-btn" id="${i}" onclick="addLocal(this)">Add to favorite</button></p>`);   
    } 
})})

function addLocal(obj) {
    localStorage.setItem('id', obj.id);
};

console.log(localStorage);

// localStorage.clear()
