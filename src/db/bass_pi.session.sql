-- @block
DROP TABLE basses;
DROP TABLE manufacturers;

CREATE TABLE manufacturers(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL UNIQUE,
    founded_year YEAR NOT NULL,
    nationality VARCHAR(2),
    logo VARCHAR(255)
); 

INSERT INTO manufacturers (name, founded_year, nationality)
VALUES 
    ("Fender", 1946, "US"),
    ("Yamaha", 1887, "JP");

CREATE TABLE basses(
    id INT AUTO_INCREMENT,
    manufacturer_id INT NOT NULL,
    name VARCHAR(255) NOT NULL UNIQUE,
    strings TINYINT UNSIGNED,
    launch_year YEAR NOT NULL,
    image VARCHAR(255),
    PRIMARY KEY (id),
    FOREIGN KEY (manufacturer_id) REFERENCES manufacturers(id)
); 

INSERT INTO basses (manufacturer_id, name, strings, launch_year)
VALUES 
    (1, "Precision Bass", 4, 1951),
    (1, "Jazz Bass", 4, 1960),
    (1, "BB-2004", 4, 2002);
