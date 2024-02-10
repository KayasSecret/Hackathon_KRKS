// ======By kayas

// var currentDateTime = new Date();
// var year = currentDateTime.getFullYear();
// var month = (currentDateTime.getMonth() + 1);
// var date = (currentDateTime.getDate() + 1);

// if(date < 10) {
//   date = '0' + date;
// }
// if(month < 10) {
//   month = '0' + month;
// }

// var dateTomorrow = year + "-" + month + "-" + date;
// var checkinElem = document.querySelector("#checkin-date");
// var checkoutElem = document.querySelector("#checkout-date");

// checkinElem.setAttribute("min", dateTomorrow);

// checkinElem.onchange = function () {
//     checkoutElem.setAttribute("min", this.value);
// }


// ===By Sneha 
// Review Add js

let custName = document.querySelector(".custName");
let revDate = document.querySelector(".revDate");
let rev = document.querySelector(".rev");
let revAddBtn = document.querySelector(".revAdd");
let revList = document.querySelector(".revList");

revAddBtn.addEventListener("click", ()=>{
    let newRev = document.createElement('li');
    let revData = newRev.innerText = `${revDate} ${rev.value} ~ ${custName.value}`;
    revList.append(revData);
})