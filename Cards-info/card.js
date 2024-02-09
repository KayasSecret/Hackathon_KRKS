let Name = document.querySelector("#name");
let Email = document.querySelector("#email");
let Conatct = document.querySelector("#contact");
let Address = document.querySelector("#address");
let Room = document.querySelector("#room");
let Price = document.querySelector("#price");
let Floor = document.querySelector("#floor");
let Reg_daete = document.querySelector("#reg_date");
let Pic = document.querySelector("#file");
let newBtn = document.querySelector(".newEnt-btn");

let cards = document.querySelector(".wrapper")

newBtn.addEventListener("click", (evt)=>{
    evt.preventDefault();
});

newBtn.addEventListener("click",()=>{
    let addressVal = Address.value;
    let priceVal = Price.value;
    creatCard(addressVal,priceVal);
    // console.log(fileVal);
})

const creatCard = (addressVal,priceVal) => {for (let card in cards){
    let newCard = document.createElement("div");
    card.append(newCard);
    newCard.classList.add("card-s"); 
    newData(addressVal,priceVal);

    function newData(addressVal,priceVal) {
        // let newArray = obj.articles;
        // console.log(newsArray);
        // console.log(typeof newsArray);
        newCard.innerHTML = 
            `<img src="/images/House-image/k1.jpg" alt="">
             <div class="info">
                <h1>Kayas Home</h1>
                <p>Rent House Price :${priceVal}</p>
                <p> <i class="fa-solid fa-location-dot"></i>${addressVal}</p>
                <a href="/Cards-info/card.html" class="btn">Read More</a>
            </div>`;
    }

  }
}



/* <button id = "btnMore" onclick= "getElementById('moreInfo').innerHTML='author: ${news.author}<br> news title: ${news.title}<br> news description ${news.description}  '" >  More Details </button> */