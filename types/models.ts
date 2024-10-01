export type UserRole = "super_admin" | "gerant" | "enseignant" | "eleve";
export type SemestreEnum = "1" | "2";

export interface Utilisateur {
  id: number;
  prenom: string;
  nom: string;
  date_naissance: string | null; // ISO string format
  adresse: string;
  role: UserRole;
  gerant?: GerantEtablissement | null;
  eleve?: Eleve | null;
  enseignant?: Enseignant | null;
}

export interface Calendrier {
  id: number;
  annee_academique: string; // Format : YYYY-YYYY
  debut: string; // ISO string format
  fin: string | null; // ISO string format
  etablissement_id: number;
  inscriptions?: Inscription[];
  enseignements?: Enseigner[];
  notes?: Note[];
  appreciations_specifiques?: AppreciationCompetenceSpecifique[];
  appreciations_comportementales?: AppreciationCompetenceComportementale[];
  appreciations_aptitudes?: AppreciationAptitude[];
}

export interface Etablissement {
  id: number;
  nom: string;
  adresse: string;
  calendriers?: Calendrier[];
  gerants?: GerantEtablissement[];
  enseignants?: Enseignant[];
  inscriptions?: Inscription[];
  enseignements?: Enseigner[];
  eleves?: Eleve[];
}

export interface GerantEtablissement {
  id: number;
  prenom: string;
  nom: string;
  date_naissance: string;
  adresse: string;
  email: string;
  etablissement: string | null;
}

export interface Classe {
  id: number;
  libelle: string;
  serie: string;
  inscriptions?: Inscription[];
  enseignements?: Enseigner[];
}

export interface Metier {
  id: number;
  libelle: string;
  eleves?: Eleve[];
  matieres?: MetierMatiere[];
}

export interface Eleve {
  utilisateur_id: number;
  matricule: string;
  metier_id: number;
  etablissement_id: number;
  inscriptions?: Inscription[];
  notes?: Note[];
  interets?: InteretEleve[];
  appreciations_specifiques?: AppreciationCompetenceSpecifique[];
  appreciations_comportementales?: AppreciationCompetenceComportementale[];
  appreciations_aptitudes?: AppreciationAptitude[];
}

export interface Inscription {
  eleve_id: number;
  classe_id: number;
  etablissement_id: number;
  calendrier_id: number;
}

export interface Enseignant {
  utilisateur_id: number;
  matricule: string;
  etablissement_id: number;
  enseignements?: Enseigner[];
}

export interface Matiere {
  id: number;
  libelle: string;
  metiers?: MetierMatiere[];
  enseignements?: Enseigner[];
  notes?: Note[];
  ressources?: Ressource[];
}

export interface MetierMatiere {
  metier_id: number;
  matiere_id: number;
  coefficient: number;
}

export interface Enseigner {
  enseignant_id: number;
  etablissement_id: number;
  matiere_id: number;
  classe_id: number;
  calendrier_id: number;
}

export interface Note {
  eleve_id: number;
  matiere_id: number;
  calendrier_id: number;
  semestre: SemestreEnum;
  note_cc1: number;
  note_cc2: number;
  note_composition: number;
}

export interface AppreciationCompetenceSpecifique {
  id: number;
  eleve_id: number;
  competence_id: number;
  calendrier_id: number;
  semestre: SemestreEnum;
  competence?: CompetenceSpecifique;
}

export interface AppreciationCompetenceComportementale {
  id: number;
  eleve_id: number;
  competence_id: number;
  calendrier_id: number;
  semestre: SemestreEnum;
  competence?: CompetenceComportementale;
}

export interface AppreciationAptitude {
  id: number;
  eleve_id: number;
  aptitude_id: number;
  calendrier_id: number;
  semestre: SemestreEnum;
  aptitude?: Aptitude;
}

export interface InteretEleve {
  id: number;
  eleve_id: number;
  interet_id: number;
  interet?: Interet;
}

export interface Commentaire {
  id: number;
  tag: string;
}

export interface CompetenceSpecifique {
  id: number;
  libelle: string;
}

export interface CompetenceComportementale {
  id: number;
  libelle: string;
}

export interface Aptitude {
  id: number;
  libelle: string;
}

export interface Interet {
  id: number;
  libelle: string;
}

export interface Ressource {
  id: number;
  titre: string;
  url: string;
  matiere_id: number;
}
