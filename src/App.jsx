import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import CharacterTable from "./components/CharacterTable.jsx";
import Footer from "./components/Footer.jsx";
import { colonnes } from "./data/personnages.js";

const IMAGE_URL =
  "https://th.bing.com/th/id/R.fed3ca1cf0771f697758b2c872c66bb0?rik=enzGROPdxrrxtw&riu=http%3a%2f%2ffr.web.img6.acsta.net%2fr_1280_720%2fnewsv7%2f19%2f06%2f24%2f14%2f16%2f37319880.jpg&ehk=OkNGG4scfOpEsVjLX9hlyZG5wOwOVDOU2TLaGBZ5ZtE%3d&risl=&pid=ImgRaw&r=0";

export default function App() {
  const [personnages, setPersonnages] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  // Au chargement de la page, on demande les personnages au backend
  useEffect(() => {
    fetch("http://localhost:3001/api/personnages")
      .then((res) => {
        if (!res.ok) throw new Error(`Erreur ${res.status}`);
        return res.json();
      })
      .then((data) => setPersonnages(data))
      .catch(() =>
        setErreur("Impossible de joindre le backend. Vérifie que le serveur est lancé.")
      )
      .finally(() => setChargement(false));
  }, []);

  return (
    <div className="page">
      <Header titre="L'Attaque des Titans" />
      <main>
        <Hero src={IMAGE_URL} alt="Titan cuirassé" />
        <section>
          <h2>Personnages</h2>
          {chargement && <p>Chargement des personnages…</p>}
          {erreur && <p className="erreur">{erreur}</p>}
          {!chargement && !erreur && (
            <CharacterTable
              colonnes={colonnes}
              lignes={personnages}
              legende="Infos sur Reiner"
            />
          )}
        </section>
      </main>
      <Footer
        lien="https://fr.wikipedia.org/wiki/L%27Attaque_des_Titans"
        texte="En savoir plus sur Wikipédia"
      />
    </div>
  );
}
