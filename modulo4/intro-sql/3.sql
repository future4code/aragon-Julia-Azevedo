// a
SELECT * FROM `Funcionarios`

// b
SELECT id AS identifier, nome FROM `Funcionarios`

// c
SELECT * FROM `Funcionarios`
WHERE id = "003"

// d
SELECT * FROM `Funcionarios`
WHERE nome LIKE "%a";

// e
SELECT * FROM `Funcionarios`
WHERE nome NOT LIKE "%r%" AND email LIKE "%u%";