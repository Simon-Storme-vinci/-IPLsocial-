Simon Storme 

simon.storme@student.vinci.be

url du repo github = https://github.com/Simon-Storme-vinci/-IPLsocial-.git

le code contient la fonction de vérification d'un mail et
des tests pour cette fonction. Tous le code à été fais selon le TDD (d'abord les tests puis le code minimal de la fonction )

le fichier yml permet l'execution du pipeline quand il y a un pull ou un pull_request
sur la branche main. Il permet de lancer les tests pour verifier que tout est ok et avant tout ça il 
il installe les dépendance et clone le repo sur la machine pour la préparation 

npm test permet de lancer les tests