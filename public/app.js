let Name = document.querySelector("#name");
let Address = document.querySelector("#address");
let Price = document.querySelector("#price");
let housePic = document.querySelector("#homefile");
let roomPic = document.querySelector("#roomfiles");
let Room = document.querySelector("#room");
let cards = document.querySelector(".wrapper");

// creating card

const addCard = ()=> {
    let newCard = document.createElement('div');
    newCard.classList.add("card-s"); 
    cards.append(newCard);

    let data = newCard.innerHTML =`
    <img src= ${URL.createObjectURL(housePic.files[0])} alt="image">
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
let Reg_date = document.querySelector("#reg_date");
let newBtn = document.querySelector(".new-btn");

// creating Card-info

// const createCardInfo = () =>{

//     var opened = window.open("");
//     opened.document.write(`<html>
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Rent Pay - The rental house</title>
//         <!--Bootstrap Link (CDN)-->
//         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">

//         <!--Normal CSS file-->
//         <link rel="stylesheet" href="/HT-Main-Page/style.css">
//         <link rel="stylesheet" href="/Cards-info/card.css">
        
//         <!--Logo-->
//         <link rel="shortcut icon" href="/images/logo.png" type="image/x-icon">

//         <!--Google Fonts-->
//         <link rel="preconnect" href="https://fonts.googleapis.com">
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//         <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;600;700;800&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">

//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

//     </head>
//     <body>
//         <!--== Navigation Section ==-->
//         <header id="Home"> 
//             <nav class="nav" data-spy="affix">
//                 <div class="head-f1">
//                     Rental Pay
//                 </div>
//                 <div class="head-f2">
//                     <ul class="nav_btn">
//                         <li><a href="/HT-Main-Page/index.html">Home</a></li>
//                         <li><a href="/HT-Main-Page/index.html">About</a></li>
//                         <li><a href="/HT-Main-Page/index.html">Services</a></li>
//                         <li><a href="/HT-Main-Page/index.html">RentHouse</a></li>
//                         <!-- <li><a href="/HT-Main-Page/index.html">Reviews</a></li> -->
//                         <li><a class="btn btn-primary" href="/Login-Page/login.html">Log in/Sign Up</a></li>
//                     </ul>
//                 </div>
//             </nav>
//         </header>
//         <br>
 
//         <!-- Card Rooms -->
     
//         <section class="card-info-c">
//          <h1>House Information</h1>
//             <div class="image-row">
//                 <img src= ${URL.createObjectURL(roomPic.files[0])} alt="">
//                 <img src= ${URL.createObjectURL(roomPic.files[1])} alt="">
//                 <img src= ${URL.createObjectURL(roomPic.files[2])} alt="">
//                 <img src= ${URL.createObjectURL(roomPic.files[3])} alt="">
//                 <img src= ${URL.createObjectURL(roomPic.files[4])} alt="">
//                 <img src= ${URL.createObjectURL(roomPic.files[5])} alt="">
//             </div> 
//         </section>
//         <br>
 
//         <main class="main_cont">
    
//             <!-- Review  {Sneha}-->
//             <aside class="review_box"> 
//                 <h4 >Customer Reviews</h4>
        
//                 <div class="cust_rev">
//                 <ul class="revList">
//                     <li><span>2/02/2024 </span>Lorem ipsum dolor sit amet. <span>~ John </span></li>
//                     <li><span>2/02/2024 </span>Lorem ipsum dolor sit amet.</li>
//                     <li><span>2/02/2024 </span>Lorem ipsum dolor sit amet.</li>
//                 </ul>
//                 </div>
//                 <hr>
//                 <div class="add_rev">
//                 <h5>Add Your Review here</h5>
//                 <input type="date" class="revdate">
//                 <textarea class="rev">Your Review</textarea>
//                 <input class="custName" type="text" placeholder="Your Name">
//                 <button class="revAdd">Add</button>
//                 </div>
//             </aside>
        
//             <!-- Card Rooms Information -->
//             <section class="card-det">
                
//                 <div class="more-info">
//                     <h3>Room Details</h3>
//                     <p> <i class="fa-solid fa-location-dot"></i> Address: ${Address.value}</p>
//                     <p> <i class="fa-solid fa-money-bill"></i> Price: ${Price.value}rs / month</p>
//                     <p> <i class="fa-regular fa-square"></i> Rooms : ${Room.value}</p> 
//                     <p> <i class="fa-solid fa-stairs"></i> Floor : ${Floor.value}</p>
//                     <p> <i class="fa-solid fa-tag"></i> Registered on : ${Reg_date.value} </p>
//                 </div>
//                 <div class="more-info">
//                     <h3>Locality</h3>
//                     <p> <i class="fa-solid fa-hospital"></i> Bus Stand , Satna</p>
//                     <p> <i class="fa-solid fa-school"></i> Price: 2000rs / month</p>
//                     <p> <i class="fa-solid fa-graduation-cap"></i> Rooms : 6</p> 
//                 </div>
            
//             </section> 
//             <br>
        
//             <!-- Contact Form-->
//             <form class="booking-form" action="#" method="post">
//                 <h2>Contact Owner</h2>
//                 <div class="elem-group">
//                     <label for="name">Your Name</label>
//                     <input type="text" id="name" name="visitor_name" placeholder="enter your name" pattern=[A-Z\sa-z]{3,20} required>
//                 </div>
        
//                 <div class="elem-group">
//                     <label for="email">Your E-mail</label>
//                     <input type="email" id="email" name="visitor_email" placeholder="enter your email" required>
//                 </div>
        
//                 <div class="elem-group">
//                     <label for="phone">Your Phone</label>
//                     <input type="tel" id="phone" name="visitor_phone" placeholder="enter your phone number" required>
//                 </div>
        
//                 <hr>
//                 <div class="elem-group inlined">
//                     <label for="adult">Adults</label>
//                     <input type="number" id="adult" name="total_adults" placeholder="1" min="1" required>
//                 </div>
        
//                 <div class="elem-group inlined">
//                     <label for="child">Children</label>
//                     <input type="number" id="child" name="total_children" placeholder="1" min="0" required>
//                 </div>
        
//                 <div class="elem-group">
//                     <label for="room-selection">Your Profession</label>
//                     <select id="room-selection" name="room_preference" required>
//                         <option value="">Choose Profession</option>
//                         <option value="connecting">Engineer</option>
//                         <option value="adjoining">Doctor</option>
//                         <option value="adjacent">Student</option>
//                         <option value="adjacent">Teacher</option>
//                         <option value="adjacent">Other</option>
//                     </select>
//                 </div>
        
//                 <div class="check-k">
//                     <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
//                     <label class="form-check-label" for="flexCheckChecked">
//                     Family
//                     </label>
//                 </div>
//                 <hr>
//                 <div class="elem-group">
//                     <label for="message">If you want to say something</label>
//                     <textarea id="message" name="visitor_message" placeholder="Tell me anything." required></textarea>
//                 </div>
//                 <button type="submit">Book This Room</button>
//             </form>
//             <br>
//         </main>

//         <!-- Footer Section -->
//         <footer class="footer">
//         <div class="foot-container">
//             <div class="row-f">
//                 <div class="foot-col">
//                     <h4>Webiste</h4>
//                     <ul>
//                         <li><a href="#Home">Home</a></li>
//                         <li><a href="#about">About</a></li>
//                         <li><a href="#services">Services</a></li>
//                         <li><a href="#Rent_House">RentHouse</a></li>
//                     </ul>
//                 </div>
//                 <div class="foot-col">
//                     <h4>Get Help</h4>
//                     <ul>
//                         <li><a href="#">Privacy</a></li>
//                         <li><a href="#">Terms & Condition</a></li>
//                         <li><a href="#">Payment Option</a></li>
//                         <li><a href="#">FAQs</a></li>
//                     </ul>
//                 </div>
//                 <div class="foot-col">
//                     <h4>Developers</h4>
//                     <ul>
//                         <li><a href="#">Kayas Mishra</a></li>
//                         <li><a href="#">Sneha Goyal</a></li>
//                         <li><a href="#">Ritik Gupta</a></li>
//                         <li><a href="#">Kajal Gupta</a></li>
//                     </ul>
//                 </div>
//                 <div class="foot-col">
//                     <h4>Follow Us</h4>
//                     <div class="social-link-f">
//                         <a href="#"><i class="fa-brands fa-github"></i></a>
//                         <a href="#"><i class="fa-brands fa-instagram"></i></a>
//                         <a href="#"><i class="fa-brands fa-facebook"></i></a>
//                         <a href="#"><i class="fa-brands fa-discord"></i></a>
//                     </div>
//                     <div class="img-foot">
//                         <!-- <img src="/images/footer.png" alt="footer"> -->
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </footer>

//         <!--== JS (Bootstrap) ==-->
//         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

//         <!-- JS Link -->
//         <script src="/Cards_info/app-card.js"></script>
//     </body>
//     </html>`);
// }