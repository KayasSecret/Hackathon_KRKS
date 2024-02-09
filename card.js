let Name = document.querySelector("#name");
let Email = document.querySelector("#email");
let Conatct = document.querySelector("#contact");
let Address = document.querySelector("#address");
let Room = document.querySelector("#room");
let Price = document.querySelector("#price");
let Floor = document.querySelector("#floor");
let Reg_daete = document.querySelector("#reg_date");
let Pic = document.querySelector("#file");
let newBtn = document.querySelector(".new-btn");

let cards = document.querySelector(".wrapper");

const addCard = ()=> {
    let newCard = document.createElement('div');
    newCard.classList.add("card-s"); 
    cards.append(newCard);

    let addressVal = Address.value;
    newCard.innerHTML 
}


