import Link from "next/link"
export default function Header() {
  return (
    <div
      style={{
        height: 80,
        boxShadow: "rgb(0 0 0 / 8%) 0px 1px 12px",
        marginBottom: 24,
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        fontSize: 30,
      }}
    >
      <h1><Link href="/">Lúptico | Valle de Guadalupe</Link></h1>
    </div>
  );
}
