"use client";

import { useState } from "react";
import Image from "next/image";

import FollowUS from "@/app/FollowUs";
import { useIsWeb3 } from "@/app/support";

export default function Crypto() {
  const [address, setAddress] = useState("");
  const isWeb3 = useIsWeb3();

  const connectHandler = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log({ accounts });
    setAddress(accounts[0]);
  };

  if (!isWeb3) {
    return <></>;
  }

  if (!address) {
    return (
      <div
        style={{
          maxWidth: 800,
          margin: "40px auto",
          textAlign: "center",
          fontSize: 26,
        }}
      >
        {!address && (
          <a
            onClick={connectHandler}
            style={{
              cursor: "pointer",
              backgroundColor: "#2081e2",
              color: "white",
              padding: "20px 40px",
              display: "inline-block",
            }}
          >
            Connect
          </a>
        )}
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "0 auto",
        fontSize: 26,
        padding: "20px 12px",
      }}
    >
      <div style={{ height: 40 }}>
        <strong>Wallet</strong>: {`${address.slice(0, 8)}`}
      </div>

      <div>
        <h2>The Project</h2>
        <p>
          Lúptico is a real estate project in the heart of Valle de Guadalupe,
          Mexico, featuring three cozy loft brick cabins.
        </p>
        <p>
          As an NFT holder, you receive one free weekend stay. Additionally, you
          can resell your NFT, and if it hasn’t been redeemed, the new owner can
          claim the free weekend stay.
        </p>
        <Image
          src="/nfts/nft-bricks-100.png"
          height={400}
          width={400}
          alt="Luptico NFT"
        />
        <br />
        <div style={{ textAlign: "center", margin: "10px 0 40px" }}>
          <a
            href="https://testnets.opensea.io/assets/sepolia/0x8074a9a263fdc2d81d75219a19557c41ae22232d/1"
            target="_blank"
            rel="nofollow"
            style={{
              backgroundColor: "#2081e2",
              color: "white",
              padding: "20px 40px",
            }}
          >
            Buy Now
          </a>
        </div>
      </div>
      <div style={{ marginTop: 60 }}>
        <h2>Claim your stay</h2>
        <p>
          If you already own an NFT, reach out to us to arrange your stay 🤠.
        </p>
        <p>
          <a href="mailto:info@luptico.com">info@luptico.com</a>
        </p>
      </div>

      <FollowUS />
    </div>
  );
}
