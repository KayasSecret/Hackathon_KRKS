let Name = document.querySelector("#name");
let Address = document.querySelector("#address");
let Price = document.querySelector("#price");
let Pic = document.querySelector("#homefile");
let Room = document.querySelector("#room");
let cards = document.querySelector(".wrapper");

// creating card

const addCard = ()=> {
    let newCard = document.createElement('div');
    newCard.classList.add("card-s"); 
    cards.append(newCard);

    let data = newCard.innerHTML =`
    <img src= ${URL.createObjectURL(Pic.files[0])} alt="image">
    <div class="info">
        <h1>${Name.value}</h1>
        <p>Rent House Price : ${Price.value}</p>
        <p> <i class="fa-solid fa-location-dot"></i> ${Address.value}</p>
        <p>Room : ${Room.value}</P>
        <a onclick = "createCardInfo();" class="btn">Read More</a>
    </div>`
}

let Email = document.querySelector("#email");
let Conatct = document.querySelector("#contact");
let Floor = document.querySelector("#floor");
let Reg_daete = document.querySelector("#reg_date");
let newBtn = document.querySelector(".new-btn");

// creating Card-info

const createCardInfo = () =>{

    window.open("/Cards-info/card.html");
    let newCardInfo = document.createElement("div");
    newCardInfo.classList.add("card_info");
    document.getElementsByTagName("body").append(newCardInfo);

    let newData = newCardInfo.innerHTML= `
    <div class="more_img">
            <div  class="m_img" style="background-image: url(/images/House-image/k1.jpg);"></div>
            <div class="m_img" style="background-image: url(/images/House-image/k2.jpg);"></div>
            <div class="m_img" style="background-image: url(/images/House-image/k1.jpg);"></div>
            <div class="m_img" style="background-image: url(/images/House-image/k3.jpg);"></div>
        </div>     
        <div class="more_info">
            <p> <i class="fa-solid fa-money-bill"></i> Price: ${Price.value}rs / month</p>
            <p> <i class="fa-regular fa-square"></i> Rooms : ${Room.value}</p> 
            <p> <i class="fa-solid fa-stairs"></i> Floor : ${Floor.value}</p>

            <p> <i class="fa-solid fa-tag"></i> Registered on : ${Reg_daete} </p>
        </div>
    `
}