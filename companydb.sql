DROP DATABASE IF EXISTS company_db;

CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department (
id INT AUTO_INCREMENT PRIMARY KEY,
 departmentName VARCHAR(30) NOT NULL

);

CREATE TABLE role (

id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30) NOT NULL,
salary DECIMAL(20, 2),
department_id  INT
);


CREATE TABLE employee (

id INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NULL,
manager_id INT NULL,
FOREIGN KEY (role_id) REFERENCES role (id)
);

INSERT INTO department (departmentName)
VALUES ("Sales"), ("Marketing"), ("Tech"), ("HR"), ("Operations");

INSERT INTO role (title, salary)
VALUES ("Actor", 100000), ("Server", 30000), ("Doctor", 150000),("Chef", 90000),("Processor", 90000),("Musician", 30000);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Joey","Tribiani",1), ("Monica","Geller",4), ("Ross","Geller",3), ("Phoebe","Buffey",6), ("Chandler","Bing",5), ("Rachel","Green",2);