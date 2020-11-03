CREATE DATABASE FREEU;

USE FREEU;

CREATE TABLE USER(
ID int unsigned auto_increment not null,
NOME varchar (45) not null,
EMAIL varchar(25) not null,
ZAP varchar(14) not null,
BIO varchar (200) not null,
PRIMARY KEY (ID)
);

