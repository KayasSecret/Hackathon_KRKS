

CREATE DATABASE newCard;
USE newCARD ;

CREATE TABLE newEnt(
id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone BIGINT NOT NULL,
    address VARCHAR(500),
    rooms VARCHAR(10),
    price DECIMAL(10,2),
    floor VARCHAR(10),
    booking DATETIME
);
Select * from newEnt;