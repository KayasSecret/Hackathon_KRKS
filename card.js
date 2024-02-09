let Name = document.querySelector("#name");
let Address = document.querySelector("#address");
let Price = document.querySelector("#price");
let Pic = document.querySelector("#file");
let Room = document.querySelector("#room");
let cards = document.querySelector(".wrapper");

const addCard = ()=> {
    let newCard = document.createElement('div');
    newCard.classList.add("card-s"); 
    cards.append(newCard);

    let data = newCard.innerHTML =`
    <img src= ${File.value} alt="image">
    <div class="info">
        <h1>${Name.value}</h1>
        <p>Rent House Price : ${Price.value}</p>
        <p> <i class="fa-solid fa-location-dot"></i> ${Address.value}</p>
        <p>Room : ${Room.value}</P>
        <a href="/Cards-info/card.html" class="btn">Read More</a>
    </div>`
    newCard.innerHTML = data;
}

// let Email = document.querySelector("#email");
// let Conatct = document.querySelector("#contact");
// let Floor = document.querySelector("#floor");
// let Reg_daete = document.querySelector("#reg_date");
// let newBtn = document.querySelector(".new-btn");