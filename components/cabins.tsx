import Image from "next/image";
import Link from "next/link";

import useViewport from "@/utils/useViewport";

const items = [
  {
    link: "https://www.airbnb.com/rooms/897016284894923633",
    image: "/cabins/cabin-1/original/front.jpg",
    backgroundColor: "#DE3151",
    name: "Cabin #1",
    target: "_blank",
  },
  {
    link: "https://www.airbnb.com/rooms/901621862087069881",
    image: "/cabins/cabin-2/original/front.jpg",
    backgroundColor: "#d93b30",
    name: "Cabin #2",
    target: "_blank",
  },
  {
    link: "https://www.airbnb.com/rooms/901624640241144955",
    image: "/cabins/cabin-3/original/front.jpg",
    backgroundColor: "#bd196d",
    name: "Cabin #3",
    target: "_blank",
  },
];

export default function Cabins() {
  const { width } = useViewport();
  const breakpoint = 620;

  const styles = {
    section:
      width < breakpoint
        ? {
            flexDirection: "column" as "column",
          }
        : {},
    link: width < breakpoint ? { marginBottom: 40 } : {},
    image:
      width < breakpoint
        ? {
            width: "100%",
          }
        : {},
  };

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-between",
        color: "white",
        ...styles.section,
      }}
    >
      {items.map((item) => (
        <Link
          key={item.backgroundColor}
          href={item.link}
          style={{
            backgroundColor: item.backgroundColor,
            fontSize: 24,
            ...styles.link,
          }}
          target={item.target}
        >
          <Image
            src={item.image}
            alt=""
            width={360}
            height={480}
            style={styles.image}
          />
          <div style={{ padding: "20px 10px 40px" }}>{item.name}</div>
        </Link>
      ))}
    </section>
  );
}
