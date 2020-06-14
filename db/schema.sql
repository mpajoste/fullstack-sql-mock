DROP DATABASE IF EXISTS ebid;

CREATE DATABASE ebid;

USE ebid;

CREATE TABLE products (
    id int NOT NULL AUTO_INCREMENT,
    item VARCHAR(255) NOT NULL, 
    min_cost FLOAT NOT NULL,
    curr_bid FLOAT NOT NULL,
    ends_in int NOT NULL,
    image VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
