export default function Footer({ lien, texte }) {
  return (
    <footer className="footer">
      <a href={lien} target="_blank" rel="noopener noreferrer">{texte}</a>
    </footer>
  );
}
