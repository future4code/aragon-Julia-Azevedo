// a

SELECT * 
FROM `Projetos`
ORDER BY dueDate DESC

// b

SELECT name, dueDate
FROM `Projetos`
GROUP BY name
ORDER BY dueDate ASC
LIMIT 2