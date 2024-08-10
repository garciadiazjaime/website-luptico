"use client";

import Link from "next/link";

import { useIsWeb3 } from "@/app/support";

export default function Crypto() {
  const isWeb3 = useIsWeb3();

  if (!isWeb3) {
    return <></>;
  }

  return (
    <div style={{ textAlign: "center", fontSize: 26 }}>
      <Link
        href={"/collection/brick-100"}
        style={{
          cursor: "pointer",
          color: "#bd196d",
          fontWeight: "bold",
          padding: 20,
          display: "inline-block",
        }}
      >
        get our NFT 😎 {`->`}
      </Link>
    </div>
  );
}
