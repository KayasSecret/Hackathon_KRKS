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

// const details =[
//     {
//         image :'',
//         title :'sneha Goyal',
//         price: 230,
//         add : 'maihr',
//     }
// ]

// const categ = [...new Set (details.map((item)=>{
//     return item
// }))]

// let i=0;
// document.getElementsByClassName(".card-s").innerHTML =details.map((item)=>{
//    var{image , title ,price} = item;
//    return(
//     `<img src="${image} alt="">
//     <h1>${Name.value}</h1>
//     <p>Rent House Price : ${Price.value}</p>
//     <p> <i class="fa-solid fa-location-dot"></i>${Address.value}</p>
//     <a href="/Cards-info/card.html" class="btn">Read More</a>
//     `
//    )
// }).join('')



const addCard = ()=> {
    let newCard = document.createElement('div');
    newCard.classList.add("card-s"); 
    cards.append(newCard);

    let addressVal = Address.value;
    let newdiv = document.createElement('div');
    newdiv.classList.add("info"); 
    newdiv.innerHTML = `
    <h1>${Name.value}</h1>
    <p>Rent House Price : ${Price.value}</p>
    <p> <i class="fa-solid fa-location-dot"></i>${Address.value}</p>
    <a href="/Cards-info/card.html" class="btn">Read More</a>
    `
    cards.append(newdiv);
}


