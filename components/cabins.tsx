import Image from "next/image";
import Link from "next/link"

export default function Cabins() {
  const items = [
    {
      link: "https://www.airbnb.com/rooms/897016284894923633",
      image: "/cabins/cabin-1/front.webp",
      backgroundColor: "#DE3151",
      name: "Cabin #1",
      target: "_blank",
    },
    {
      link: "https://www.airbnb.com/rooms/901621862087069881",
      image: "/cabins/cabin-2/bedroom.webp",
      backgroundColor: "#d93b30",
      name: "Cabin #2",
      target: "_blank",
    },
    {
      link: "https://www.airbnb.com/rooms/901624640241144955",
      image: "/cabins/cabin-3/kitchen.webp",
      backgroundColor: "#bd196d",
      name: "Cabin #3",
      target: "_blank",
    },
  ];
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-between",
        color: "white",
      }}
    >
      {items.map((item) => (
        <Link
          key={item.backgroundColor}
          href={item.link}
          style={{ backgroundColor: item.backgroundColor, fontSize: 24 }}
          target={item.target}
        >
          <Image src={item.image} alt="" width={360} height={480} />
          <div style={{ padding: "20px 10px 40px" }}>{item.name}</div>
        </Link>
      ))}
    </section>
  );
}
