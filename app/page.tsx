"use client";

import Image from "next/image";

import Cabins from "@/components/cabins";
import Offer from "@/components/offer"

export default function Home() {
  return (
    <main>
      <div style={{ margin: "40px auto 0", maxWidth: 1120 }}>
        <Cabins />

        <Offer />

        <a
          href="https://goo.gl/maps/hDkTf1zpzJijVFZG6"
          style={{ display: "flex", justifyContent: "center", marginTop: 100 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/luptico-map.webp"
            alt="Lúptico, Valle de Guadalupe"
            width={1120}
            height={400}
          />
        </a>
      </div>
    </main>
  );
}
