// a

ALTER TABLE `Projetos`
DROP COLUMN title

DESCRIBE `Projetos`

// b
ALTER TABLE `Projetos`
CHANGE date dueDate DATE NOT NULL

DESCRIBE `Projetos`


// c

ALTER TABLE `Funcionarios`
MODIFY email VARCHAR(255) UNIQUE NOT NULL

DESCRIBE `Funcionarios`
