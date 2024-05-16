"use client";

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
    </main>
  );
}
