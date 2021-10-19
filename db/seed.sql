INSERT INTO departments (department_id, department_name)
VALUES
(1, 'Marketing'),
(2, 'Graphic Design'),
(3, 'Digital'),
(4, 'IT'),
(5, 'Sales');
(6, 'Supply Chain');

INSERT INTO roles (role_id, title, salary, department_id)
VALUES
(1, 'Director', 180000, 1),
(2, 'Senior Manager', 150000, 2),
(3, 'Manager', 120000, 3),
(4, 'Associate', 60000, 3),
(5, 'Coordinator', 40000, 4),
(6, 'Intern', 25000, 5),


INSERT INTO employees (employee_id, first_name, last_name, role_id, manager_id)
VALUES
(1, 'Lydia', "Williamson", 1, NULL),
(2, 'Rob', "Meier", 2, 1),
(3, 'Christie', "Hooper", 3, NULL),
(4, 'Fern', "Azarian", 4, NULL),
(5, 'Drew', "VanLeeuwen", 5, 1);
(6, 'Ron', "Kaylor", 5, 4);
(7, 'Laura', "High", 6, 4);
(8, 'Christina', "Jackson", 1, 1);
(9, 'Sandeep', "Jain", 6, 4);
(10, 'Charisel', "Davis", 5, 4);