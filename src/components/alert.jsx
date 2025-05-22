export default function Alert({ text, textColor, bgColor }) {
  return (
    <div
      className="alert"
      style={{
        color: textColor || "red",
        backgroundColor: bgColor || "rgb(124, 63, 63)",
      }}
    >
      <p>{text || <></>}</p>
    </div>
  );
}
