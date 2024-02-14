-- dataBase for RENTAL PAY--

CREATE DATABASE dbRent;
USE dbRent ;

-- login table
CREATE TABLE newUser (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) not null
);
Select * from newUser;

-- table for new Entry of house 
CREATE TABLE newEntry(
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
Select * from newEntry;