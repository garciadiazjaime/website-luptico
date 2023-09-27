"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { getNFTs } from "./alchemy";

declare global {
  interface Window {
    ethereum?: any;
  }
}

interface OwnedNft {
  image: string;
  name: string;
}

const getEthereumObject = () => window.ethereum;

export default function NFT() {
  const [isWeb3, setIsWeb3] = useState(false);
  const [ownedNft, setOwnedNft] = useState<OwnedNft>();

  const confirmHandler = async () => {
    const ethereum = getEthereumObject();
    const accounts = await ethereum
      .request({ method: "eth_requestAccounts" })
      .catch(() => []);

    if (!accounts.length) {
      alert("error, please connect your wallet");
      return;
    }

    const contract = process.env.contract as string;
    const owner = accounts[0];
    const nfts = await getNFTs(owner, contract);

    if (!nfts.length) {
      alert("you do not own any NFT yet");
      return;
    }

    setOwnedNft({
      image: nfts[0].metadata.animation_url || nfts[0].metadata.image,
      name: nfts[0].metadata.name,
    });
  };

  useEffect(() => {
    const ethereum = getEthereumObject();
    if (ethereum) {
      setIsWeb3(true);
    }
  }, []);

  if (!isWeb3) {
    return (
      <div
        style={{
          width: "100%",
          background: "white",
          padding: "20px 0",
          fontSize: 48,
          textAlign: "center",
          margin: "20px 0",
          border: "2px solid black",
        }}
      >
        <a href="https://metamask.io/download/" target="_blank" rel="nofollow">
          install metamask
        </a>
      </div>
    );
  }

  if (ownedNft) {
    return (
      <div
        style={{
          width: "100%",
          background: "black",
          color: "white",
          padding: "20px 0",
          textAlign: "center",
          margin: "20px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2 style={{ padding: "12px 0" }}>{ownedNft.name}</h2>
        <Image
          src={ownedNft.image}
          width={200}
          height={200}
          alt={ownedNft.name}
        />
        <p style={{ padding: "12px 0" }}>You owned an NFT 🎉</p>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        background: "black",
        color: "white",
        padding: "20px 0",
        fontSize: 48,
        textAlign: "center",
        margin: "20px 0",
      }}
      onClick={confirmHandler}
    >
      Confirm your NFT
    </div>
  );
}
