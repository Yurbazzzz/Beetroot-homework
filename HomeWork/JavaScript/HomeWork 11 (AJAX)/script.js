const loadButton = document.querySelector('.list-btn')
loadButton.addEventListener('click', 
    () =>{  fetch('https://jsonplaceholder.typicode.com/users/') 
    .then(response => response.json())  
    .then(data => {    const tag = document.querySelector('.list')
    for (i = 0; i < data.length; i++) {  
        tag.insertAdjacentHTML('afterbegin', `<p>User: ${data[i].name}, Tel: ${data[i].phone}, ADDRESS: ${data[i].address.city}, ${data[i].address.street}</p>`);   
    }
})})