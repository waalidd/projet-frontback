export default function Hero({ src, alt }) {
  return (
    <figure className="hero">
      <img src={src} alt={alt} />
      <figcaption>{alt}</figcaption>
    </figure>
  );
}
