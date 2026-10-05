// Backend : un petit serveur Express qui fournit les personnages via une API
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors"

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors("*"));

// Les données sont maintenant côté serveur
const personnages = [
  {
    id: "reiner",
    personnage: "Reiner",
    transformation: "Beaucoup",
    saison: 1,
    lieuDeVie: "Pas dans l'enceinte des murs",
    nom: "Titan cuirassé",
  },
];

// Route API : la liste de tous les personnages
app.get("/api/personnages", (req, res) => {
  res.json(personnages);
});

// Route API : un seul personnage, par exemple /api/personnages/reiner
app.get("/api/personnages/:id", (req, res) => {
  const perso = personnages.find((p) => p.id === req.params.id);
  if (!perso) {
    return res.status(404).json({ erreur: "Personnage introuvable" });
  }
  res.json(perso);
});

// En production (Docker), le serveur envoie aussi le site React construit
const dist = path.join(__dirname, "dist");
app.use(express.static(dist));
app.use((req, res) => {
  res.sendFile(path.join(dist, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Backend lancé sur http://localhost:${PORT}`);
});
