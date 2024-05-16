"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import SendTransaction from "./components/SendTransaction";
import Image from "next/image";
import { useAccount } from "wagmi";

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <main className="flex flex-col justify-between p-8 gap-12 md:gap-32 ">
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-2">
          <Image
            src="/rainbow.png"
            width={40}
            height={40}
            priority
            alt="logo"
          />
          <span>Web3 | Rainbowkit + Wagmi + Nextjs</span>
        </div>

        <ConnectButton />
      </div>

      {!isConnected ? (
        <div className="flex items-center gap-8 flex-wrap justify-center">
          <div>
            <Image
              className=""
              src="/rainbow.svg"
              alt="Rainbowkit Logo"
              width={60}
              height={60}
              priority
            />
            <span className="text-xl">RainbowKit</span>
          </div>
          <span className="text-4xl"> + </span>
          <div>
            <span className="text-6xl">Wagmi</span>
          </div>

          <span className="text-4xl"> + </span>

          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
      ) : (
        <div>
          <SendTransaction />
        </div>
      )}
    </main>
  );
}
