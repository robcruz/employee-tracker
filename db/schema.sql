DROP DATABASE IF EXISTS employee_tracker;
CREATE database employee_tracker;

USE employee_tracker;

CREATE TABLE department
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(30) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE role
(
	id int NOT NULL AUTO_INCREMENT,
	title VARCHAR(30) NOT NULL,
	salary decimal NOT NULL,
	department_id int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE manager
(
	id int NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	role_id int NOT NULL,
	FOREIGN KEY (role_id) REFERENCES role(id),
	PRIMARY KEY (id)
);

CREATE TABLE employee (
	id int NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	role_id int NOT NULL,
	manager_id int,
	PRIMARY KEY (id),
	FOREIGN KEY (role_id) REFERENCES role(id),
	FOREIGN KEY (manager_id) REFERENCES role(id)
);




