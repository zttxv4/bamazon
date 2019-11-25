DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2)  NOT NULL,
    stock_quantity INT(100) NOT NULL,
    PRIMARY KEY (item_id)

);

SELECT * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (00111, "Laptop", "Electronics", 599.99, 70),
        (00198, "Smartphone", "Electronics", 499.99, 40),
        (00285, "Baseball Glove", "Sports", 129.99, 50),
        (00298, "Basketball Shoes", "Sports", 89.99, 80),
        (00339, "Microwave", "Appliances", 75.00, 55),
        (00398, "Refrigerator", "Appliances", 899.99, 30),
        (00493, "Jeans", "Clothing", 39.99, 80),
        (00422, "Scarf", "Clothing", 12.99, 100),
        (00487, "Sock", "Clothing", 5.99, 200),
        (00456, "Sweatshirt", "Clothing", 46.99, 90)