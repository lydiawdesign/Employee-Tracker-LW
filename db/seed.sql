INSERT INTO departments (department_name)
VALUES
("Marketing"),
("Graphic Design"),
("Digital"),
("IT"),
("Sales"),
("Supply Chain");

INSERT INTO roles (title, salary, department_id)
VALUES
("Director", 180000, 1),
("Senior Manager", 150000, 2),
("Manager", 120000, 3),
("Associate", 60000, 3),
("Coordinator", 40000, 4),
("Intern", 25000, 5);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
("Lydia", "Williamson", 1, NULL),
("Rob", "Meier", 2, 1),
("Christie", "Hooper", 3, NULL),
("Fern", "Azarian", 4, NULL),
("Drew", "VanLeeuwen", 5, 1),
("Ron", "Kaylor", 5, 4),
("Laura", "High", 6, 4),
("Christina", "Jackson", 1, 1),
("Sandeep", "Jain", 6, 4),
("Charisel", "Davis", 5, 4);