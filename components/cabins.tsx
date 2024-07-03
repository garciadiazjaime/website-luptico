import Image from "next/image";
import Link from "next/link";

const items = [
  {
    link: "https://www.airbnb.com/rooms/1108924900868036540",
    image: "/cabins/cabin-1/out-front-2.webp",
    backgroundColor: "#bd196d",
    name: "Cabin #1",
    target: "_blank",
  },
  {
    link: "https://www.airbnb.com/rooms/1108949448591364914",
    image: "/cabins/cabin-2/view.webp",
    backgroundColor: "#bd196d",
    name: "Cabin #2",
    target: "_blank",
  },
  {
    link: "https://www.airbnb.com/rooms/1108951790286233460",
    image: "/cabins/cabin-3/out-front-2.webp",
    backgroundColor: "#bd196d",
    name: "Cabin #3",
    target: "_blank",
  },
];

export default function Cabins() {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-between",
        color: "white",
        gap: 12,
      }}
    >
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          style={{
            fontSize: 24,
            textTransform: "uppercase",
            fontWeight: "bold",
            display: "block",
            marginBottom: 60,
          }}
          target={item.target}
        >
          <Image
            src={item.image}
            alt={item.name}
            width={360}
            height={480}
            style={{ display: "block", width: "100%", maxHeight: "auto" }}
          />
          <div
            style={{
              padding: "20px 10px",
              backgroundColor: "#bd196d",
              color: "white",
            }}
          >
            {item.name}
          </div>
        </Link>
      ))}
    </section>
  );
}
