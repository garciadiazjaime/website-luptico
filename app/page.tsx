import Image from "next/image";

import Cabins from "@/components/cabins";
import FollowUS from "@/app/FollowUs";
import Crypto from "@/app/Crypto";

export default function Home() {
  return (
    <main>
      <div style={{ margin: "40px auto 0", maxWidth: 1120 }}>
        <Crypto />
        <p
          style={{
            fontSize: 26,
            padding: "40px 12px",
            lineHeight: 2,
          }}
        >
          Welcome to our cozy loft brick cabin in the heart of Valle de
          Guadalupe! less than a mile from the main road, it&apos;s your perfect
          headquarters to explore the valley. Our loft is a great space for 2-4
          guests, with a private full bathroom, thermic walls and roof, and
          ample living space, and privacy. Book now for a laid-back and private
          getaway! You can rent out our three cozy cabins at once and take
          advantage of the BBQ area, and ample spaces for a small get together
        </p>

        <section>
          <Image
            src="/front-three-cabins.webp"
            alt="Lúptico, Valle de Guadalupe"
            width={1120}
            height={840}
          />
        </section>

        <section style={{ marginTop: 100 }}>
          <h2 style={{ padding: "0 12px" }}>Your home, away from home</h2>
          <Cabins />
        </section>

        <section style={{ margin: "80px 0" }}>
          <h2 style={{ padding: "0 12px" }}>Location</h2>
          <a
            href="https://goo.gl/maps/hDkTf1zpzJijVFZG6"
            style={{ display: "flex", justifyContent: "center" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/luptico-map.webp"
              alt="Lúptico, Valle de Guadalupe"
              width={1120}
              height={645}
              style={{ display: "block" }}
            />
          </a>
        </section>

        <FollowUS />
      </div>
    </main>
  );
}
