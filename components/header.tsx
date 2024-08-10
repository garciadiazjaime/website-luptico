import Link from "next/link";
export default function Header() {
  return (
    <div
      style={{
        borderBottom: "1px solid #bd196d",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        fontSize: 28,
        padding: "0 12px",
      }}
    >
      <h1>
        <Link href="/" style={{ color: "#bd196d" }}>
          Lúptico | Valle de Guadalupe
        </Link>
      </h1>
    </div>
  );
}
