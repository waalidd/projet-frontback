export default function CharacterTable({ colonnes, lignes, legende }) {
  return (
    <div className="table-wrapper">
      <table className="table">
        <caption>{legende}</caption>
        <thead>
          <tr>
            {colonnes.map((col) => (
              <th key={col.cle} scope="col">{col.titre}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {lignes.map((ligne) => (
            <tr key={ligne.id}>
              {colonnes.map((col) => (
                <td key={col.cle}>{ligne[col.cle]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
