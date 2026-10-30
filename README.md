# TaskFlow

Application web de gestion de tâches en HTML, CSS et JavaScript.

**Binôme :** _salah-eddine Lakehal_ et _Amour Mackenzie_
**Filière :** informatique

## Cahier des charges

L'application permet de :
- ajouter une tâche (titre, priorité, date, catégorie) ;
- voir la liste des tâches ;
- modifier une tâche ;
- cocher une tâche terminée (elle devient barrée) ;
- supprimer une tâche ;
- garder les tâches après fermeture du navigateur (localStorage).

Fonctionnalité filière Informatique :
- trier par priorité ou par date ;
- filtrer : toutes, à faire, terminées ;
- catégories en couleur : cours, perso, projet.

Contraintes : pas de framework, pas de serveur, pas de vraies données personnelles.

## User stories

1. En tant qu'étudiant, je veux ajouter une tâche afin de ne pas l'oublier. Un titre vide est refusé.
2. En tant qu'étudiant, je veux voir toutes mes tâches afin de savoir ce que j'ai à faire.
3. En tant qu'étudiant, je veux modifier une tâche afin de corriger une erreur.
4. En tant qu'étudiant, je veux cocher une tâche terminée afin de voir ce qui est fait.
5. En tant qu'étudiant, je veux supprimer une tâche afin de garder une liste propre.
6. En tant qu'étudiant, je veux retrouver mes tâches en rouvrant le navigateur afin de ne pas tout ressaisir.
7. En tant qu'étudiant, je veux trier mes tâches par priorité ou par date afin de faire l'urgent d'abord.
8. En tant qu'étudiant, je veux filtrer mes tâches par statut et par catégorie afin de me concentrer sur un sujet.

## Structure des fichiers

```
taskflow/
├── index.html
├── style.css
├── app.js
├── README.md
└── PROMPTS.md
```

## Modèle de données d'une tâche

```json
{
  "id": 1,
  "titre": "Réviser le CSS",
  "description": "Flexbox",
  "priorite": "haute",
  "echeance": "2026-11-15",
  "categorie": "cours",
  "statut": "a_faire"
}
```

`categorie` a été ajouté pour la filière Informatique.
