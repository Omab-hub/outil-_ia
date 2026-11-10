let taches = [];
let idEnModification = null;

const formulaire = document.getElementById("formulaire");
const champTitre = document.getElementById("titre");
const champPriorite = document.getElementById("priorite");
const champCategorie = document.getElementById("categorie");
const champEcheance = document.getElementById("echeance");
const bouton = document.getElementById("bouton");
const erreur = document.getElementById("erreur");
const liste = document.getElementById("liste");
const choixTri = document.getElementById("tri");
const filtreStatut = document.getElementById("filtreStatut");
const filtreCategorie = document.getElementById("filtreCategorie");

function sauvegarder() {
  localStorage.setItem("taches", JSON.stringify(taches));
}

function charger() {
  const donnees = localStorage.getItem("taches");
  taches = donnees ? JSON.parse(donnees) : [];
}

function validerFormulaire(evenement) {
  evenement.preventDefault();

  const titre = champTitre.value.trim();

  if (titre === "") {
    erreur.textContent = "Le titre ne peut pas être vide.";
    return;
  }
  erreur.textContent = "";

  if (idEnModification === null) {
    const tache = {
      id: Date.now(),
      titre: titre,
      priorite: champPriorite.value,
      echeance: champEcheance.value,
      categorie: champCategorie.value,
      statut: "a_faire"
    };
    taches.push(tache);
  } else {
    const tache = taches.find(function (t) {
      return t.id === idEnModification;
    });
    tache.titre = titre;
    tache.priorite = champPriorite.value;
    tache.echeance = champEcheance.value;
    tache.categorie = champCategorie.value;

    idEnModification = null;
    bouton.textContent = "Ajouter";
  }

  formulaire.reset();
  sauvegarder();
  afficher();
}

function changerStatut(id) {
  const tache = taches.find(function (t) {
    return t.id === id;
  });
  tache.statut = tache.statut === "a_faire" ? "terminee" : "a_faire";
  sauvegarder();
  afficher();
}

function supprimer(id) {
  taches = taches.filter(function (t) {
    return t.id !== id;
  });
  sauvegarder();
  afficher();
}

function commencerModification(id) {
  const tache = taches.find(function (t) {
    return t.id === id;
  });
  champTitre.value = tache.titre;
  champPriorite.value = tache.priorite;
  champCategorie.value = tache.categorie;
  champEcheance.value = tache.echeance;

  idEnModification = id;
  bouton.textContent = "Enregistrer";
  champTitre.focus();
}

function obtenirTachesAffichees() {
  let resultat = taches.filter(function (t) {
    const statutOk = filtreStatut.value === "toutes" || t.statut === filtreStatut.value;
    const categorieOk = filtreCategorie.value === "toutes" || t.categorie === filtreCategorie.value;
    return statutOk && categorieOk;
  });

  if (choixTri.value === "priorite") {
    const ordre = { haute: 1, moyenne: 2, basse: 3 };
    resultat.sort(function (a, b) {
      return ordre[a.priorite] - ordre[b.priorite];
    });
  } else if (choixTri.value === "date") {
    resultat.sort(function (a, b) {
      const dateA = a.echeance || "9999-99-99";
      const dateB = b.echeance || "9999-99-99";
      return dateA.localeCompare(dateB);
    });
  }

  return resultat;
}

function afficher() {
  liste.innerHTML = "";

  const aAfficher = obtenirTachesAffichees();

  if (aAfficher.length === 0) {
    liste.textContent = "Aucune tâche à afficher.";
    return;
  }

  aAfficher.forEach(function (tache) {
    const li = document.createElement("li");
    li.className = "tache " + tache.categorie;
    if (tache.statut === "terminee") {
      li.classList.add("terminee");
    }

    const caseACocher = document.createElement("input");
    caseACocher.type = "checkbox";
    caseACocher.checked = tache.statut === "terminee";
    caseACocher.addEventListener("change", function () {
      changerStatut(tache.id);
    });

    const titre = document.createElement("span");
    titre.className = "titre";
    titre.textContent = tache.titre;

    const badge = document.createElement("span");
    badge.className = "badge " + tache.priorite;
    badge.textContent = tache.priorite;

    const date = document.createElement("span");
    date.textContent = tache.echeance ? tache.echeance : "pas de date";

    const boutonModifier = document.createElement("button");
    boutonModifier.className = "petit";
    boutonModifier.textContent = "Modifier";
    boutonModifier.addEventListener("click", function () {
      commencerModification(tache.id);
    });

    const boutonSupprimer = document.createElement("button");
    boutonSupprimer.className = "petit supprimer";
    boutonSupprimer.textContent = "Supprimer";
    boutonSupprimer.addEventListener("click", function () {
      supprimer(tache.id);
    });

    li.append(caseACocher, titre, badge, date, boutonModifier, boutonSupprimer);
    liste.appendChild(li);
  });
}

formulaire.addEventListener("submit", validerFormulaire);
choixTri.addEventListener("change", afficher);
filtreStatut.addEventListener("change", afficher);
filtreCategorie.addEventListener("change", afficher);

charger();
afficher();
