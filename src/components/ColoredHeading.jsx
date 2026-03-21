export default function ColoredHeading({ text, className = "", as: Tag = "h1" }) {
  const words = text.split(" ");
  const splitAt = Math.ceil(words.length / 2);
  return (
    <Tag className={`section-heading ${className}`}>
      <span className="heading-dark">{words.slice(0, splitAt).join(" ")}</span>{" "}
      <span className="heading-accent">{words.slice(splitAt).join(" ")}</span>
    </Tag>
  );
}
