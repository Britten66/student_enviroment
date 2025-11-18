export default function Footer() {
  return (
    <footer
      style={{
        padding: "1rem",
        borderTop: "1px solid #ccc",
        marginTop: "2rem",
        fontSize: "0.8rem",
        color: "#555",
      }}
    >
      <p> {new Date().getFullYear()} Student Work Space </p>
    </footer>
  );
}
