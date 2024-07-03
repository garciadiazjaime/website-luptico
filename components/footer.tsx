export default function Footer() {
  return (
    <footer
      style={{
        background: "#f7f7f7",
        display: "flex",
        justifyContent: "center",
        padding: "40px 12px",
      }}
    >
      © {new Date().getFullYear()} Lúptico | Valle de Guadalupe, Baja
      California, México.
    </footer>
  );
}
