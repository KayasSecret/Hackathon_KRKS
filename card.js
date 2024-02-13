// creating Connection

const express = require("express");
const mysql = require("mysql2");
var bodyParser = require('body-parser');

const app = express();

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sneha@23',
    database :'newCard'
});


app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.static('Cards-info'));
app.use(express.static('images'));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/" , function(req,res){
    res.sendFile(__dirname+'/index.html');
});

app.post('/register', function(req,res){
    // console.log(req.body);
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var address = req.body.address;
    var rooms = req.body.rooms;
    var price = req.body.price;
    var floor = req.body.floor;
    var booking = req.body.booking;
    var himg = req.body.house_img;
    var rimg = req.body.room_img;
    
    db.connect( function(error){
        if(error)throw error;

        var sql = "INSERT INTO newEnt (name , email, phone , address, rooms , price, floor,booking,himg, rimg) VALUES ('"+name+"','"+email+"','"+phone+"','"+address+"','"+rooms+"','"+price+"','"+floor+"','"+booking+"','"+himg+"','"+rimg+"')";
        db.query(sql,function(error,result){
            if(error)throw error;
            // res.send('student Register' + result.insertId);
        });
    });
});

app.get('/newData', function (req,res){
    db.connect(function(error){
        if(error)console.log(error);
        var sql = "SELECT * FROM newEnt";

        db.query (sql, function(error,result){
            if (error) console.log(error);
            console.log(result)
        });
    })
})


app.listen(5500);





