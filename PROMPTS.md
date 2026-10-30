# Journal de prompts

## Prompt 1 · User stories (Claude)

**Prompt :** Donne-moi des user stories pour une app de tâches.

**Résultat :** 12 user stories, avec comptes utilisateurs, partage et notifications.

**Gardé :** créer, afficher, supprimer.
**Rejeté :** comptes, partage, notifications.
**Pourquoi :** impossible sans serveur. Le prompt était trop vague.

## Prompt 2 · User stories (Claude)

**Prompt :** Tu es un développeur web qui aide des étudiants de 1re année. Nous créons TaskFlow, une app de tâches en HTML, CSS et JavaScript sans framework, avec localStorage. Propose 6 user stories au format « En tant que… je veux… afin de… ». Pas de code.

**Résultat :** 6 user stories correctes.

**Gardé :** les 6.
**Pourquoi :** elles respectent notre cadre. Mais il manque notre filière.

## Prompt 3 · User stories (Claude)

**Prompt :** Ajoute 2 user stories pour notre filière Informatique : tri, filtres et catégories.

**Résultat :** 3 user stories (tri, filtre, glisser-déposer).

**Gardé :** tri et filtre.
**Rejeté :** glisser-déposer.
**Pourquoi :** trop compliqué pour notre niveau.

## Prompt 4 · Modèle de données (Claude)

**Prompt :** Qu'est-ce qui manque à ce modèle de tâche pour notre filière Informatique ?

**Résultat :** ajouter `categorie` et `couleur`.

**Gardé :** `categorie`.
**Rejeté :** `couleur`.
**Pourquoi :** la couleur dépend de la catégorie, on la met dans le CSS.
