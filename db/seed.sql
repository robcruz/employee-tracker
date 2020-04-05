
INSERT INTO department (name) VALUES ('Engineering');
INSERT INTO department (name) VALUES ('Sales');
INSERT INTO department (name) VALUES ('Finance');
INSERT INTO department (name) VALUES ('Legal');
INSERT INTO department (name) VALUES ('Human Resources');

INSERT INTO role (title, salary, department_id) VALUES ('Engineering Director', '200000.00', 1);
INSERT INTO role (title, salary, department_id) VALUES ('QA Director', '200000.00', 1);
INSERT INTO role (title, salary, department_id) VALUES ('Software Developer', '70000.00', 1);
INSERT INTO role (title, salary, department_id) VALUES ('QA Engineer', '100000.00', 1);
INSERT INTO role (title, salary, department_id) VALUES ('Marketing Analyst', '50000.00', 1);
INSERT INTO role (title, salary, department_id) VALUES ('Sales Associate', '40000.00', 2);
INSERT INTO role (title, salary, department_id) VALUES ('Finance Analyst', '60000.00', 3);
INSERT INTO role (title, salary, department_id) VALUES ('Business Lawyer', '80000.00', 4);
INSERT INTO role (title, salary, department_id) VALUES ('Accounting Associate', '80000.00', 5);

INSERT INTO manager (first_name, last_name, role_id) VALUES ('Rob', 'Cruz', 1);
INSERT INTO manager (first_name, last_name, role_id) VALUES ('Super', 'Chichu', 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Rob', 'Cruz', 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Super', 'Chichu', 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Raph', 'Nichol', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Lohan', 'Recana', 4, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Meowth', 'Cruz', 3, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Cyrus', 'Cruz', 6, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Lukas', 'Recana', 7, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Bulag', 'Pulot', 8, NULL);
