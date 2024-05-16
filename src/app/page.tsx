"use client";

import Image from "next/image";
import Profile from "./components/profile";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Send from "./components/send-transaction";

export default function Home() {
  return (
    <main className="flex flex-col justify-between p-8 gap-12 md:gap-32 ">
      <div className="flex justify-end">
        <ConnectButton />
      </div>

      <div>
        <Send />
      </div>

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

      {/* Implement buy donut form to use eth */}

      <Profile />
    </main>
  );
}
