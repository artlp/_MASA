CREATE TABLE auto.companies 
( id INT NOT NULL AUTO_INCREMENT , 
  name VARCHAR(40) NOT NULL , 
  country_id SMALLINT NOT NULL , 
  foundation_year INT NOT NULL , 
  ceo VARCHAR(50) NOT NULL , 
  row_updated TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
  PRIMARY KEY (id));


  CREATE TABLE countries ( id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(30) );
  
  
  INSERT INTO countries
(name) /* list of the columns */
VALUES ('Germany');
INSERT INTO countries
(name) 
VALUES ('Japan');
INSERT INTO countries
(name) 
VALUES ('Korea');
INSERT INTO countries
(name) 
VALUES ('United States');
INSERT INTO countries
(name) 
VALUES ('Russia');

-- 
SELECT * FROM countries /*select all rows from table countries*/
SELECT * FROM countries WHERE id <> 4 AND id >=3


INSERT INTO companies 
(name, foundation_year, ceo, country_id)/* not the same order as in the table */
VALUES ('BMW', 1916 , 'Susan Claten' , 1),
       ('Kia', 1944 , 'Han Vu Park' , 3),
       ('GAZ', 1956 , 'Oleg Deripaska' , 5),
       ('Volkswagen', 1937 , 'Ralf Brandstaetter' , 1),
       ('Tesla', 2003 , 'Elon Musk' , 4),
       ('Nissan', 1933 , 'Makoto Uchida' , 2);
       

DROP TABLE houses --delete table