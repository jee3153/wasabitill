CREATE DATABASE bank;

CREATE TABLE staff(
    staff_id BIGSERIAL PRIMARY KEY,
    permission VARCHAR(30),
    password VARCHAR(4) DEFAULT '0000',
    branch_id INT REFERENCES branch (branch_id),
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL
);

CREATE TABLE transaction(
    transaction_id BIGSERIAL PRIMARY KEY,
    amount NUMERIC(19, 2) NOT NULL,
    method VARCHAR(30) NOT NULL,
    card_number VARCHAR(16) NOT NULL,
    branch_id INT REFERENCES branch (branch_id)
);

CREATE TABLE branch(
    branch_id SERIAL PRIMARY KEY,
    branch_name VARCHAR(30)
);

CREATE TABLE category(
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE product(
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    price NUMERIC(19, 2) NOT NULL,
    category_id INT REFERENCES category (category_id)
);

CREATE TABLE transaction_item(
    item_id SERIAL PRIMARY KEY,
    price INT,
    transaction_id BIGINT REFERENCES transaction (transaction_id),
    category_id INT REFERENCES category (category_id)
);