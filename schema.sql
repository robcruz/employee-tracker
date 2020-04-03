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

INSERT INTO department (name) VALUES ('Engineering');
INSERT INTO department (name) VALUES ('Sales');
INSERT INTO department (name) VALUES ('Finance');
INSERT INTO department (name) VALUES ('Legal');
INSERT INTO department (name) VALUES ('Human Resources');

INSERT INTO role (title, salary, department_id) VALUES ('Engineering Director', '200000.00', 1);
INSERT INTO role (title, salary, department_id) VALUES ('Associate Software Developer', '70000.00', 1);
INSERT INTO role (title, salary, department_id) VALUES ('Senior Software Developer', '100000.00', 1);
INSERT INTO role (title, salary, department_id) VALUES ('Marketing Analyst', '50000.00', 1);
INSERT INTO role (title, salary, department_id) VALUES ('Sales Associate', '40000.00', 2);
INSERT INTO role (title, salary, department_id) VALUES ('Finance Analyst', '60000.00', 3);
INSERT INTO role (title, salary, department_id) VALUES ('Business Lawyer', '80000.00', 4);
INSERT INTO role (title, salary, department_id) VALUES ('Accounting Associate', '80000.00', 5);


INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Rob', 'Cruz', 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Raph', 'Nichol', 5, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Lohan', 'Recana', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Meowth', 'Cruz', 3, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Cyrus', 'Cruz', 6, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Lukas', 'Recana', 7, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Bulag', 'Pulot', 8, NULL);




