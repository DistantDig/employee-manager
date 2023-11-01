INSERT INTO department (department_name)
VALUES ("Sales"),
       ("Accounting"),
       ("Human Resources"),
       ("Customer Service");

INSERT INTO role (title, salary, department_id)
VALUES ("Salesman", 60000, 1),
       ("Accountant", 50000, 2),
       ("Head of Human Resources", 50000, 3),
       ("Receptionist", 25000, 4),
       ("Regional Manager", 70000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Michael", "Scott", 5, null),
       ("Jim", "Halpert", 1, 1),
       ("Dwight", "Schrute", 1, 1),
       ("Phyllis", "Lapin-Vance", 1, 1),
       ("Stanley", "Hudson", 1, 1),
       ("Oscar", "Martinez", 2, 1),
       ("Kevin", "Malone", 2, 1),
       ("Angela", "Martin", 2, 1),
       ("Toby", "Flenderson", 3, null),
       ("Pam", "Beesly", 4, 1);