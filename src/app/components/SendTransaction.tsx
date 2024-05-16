import React from "react";
import {
  type BaseError,
  useAccount,
  useSendTransaction,
  useWaitForTransactionReceipt,
} from "wagmi";
import { parseEther } from "viem";

const SendTransaction = () => {
  const { isConnected } = useAccount();
  const {
    data: hash,
    sendTransaction,
    isPending,
    error,
  } = useSendTransaction();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const to = formData.get("address") as `0x${string}`;
    const value = formData.get("value") as string;
    sendTransaction({ to, value: parseEther(value) });
  };

  return (
    <div className="flex justify-center">
      {isConnected && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 flex-1 max-w-80"
        >
          <label>
            <div className="mb-2">Adress:</div>
            <input
              name="address"
              placeholder="0x1234...5678"
              required
              className="input"
            />
          </label>
          <label>
            <div className="mb-2">Amount (ETH):</div>
            <input name="value" placeholder="0.05" required className="input" />
          </label>
          <button type="submit" className="btn" disabled={isPending}>
            Send ETH
          </button>
          {hash && <div>Transaction Hash: {hash}</div>}

          {isConfirming && <div>Waiting for confirmation...</div>}
          {isConfirmed && <div>Transaction confirmed.</div>}
          {error && (
            <div>
              Error: {(error as BaseError).shortMessage || error.message}
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default SendTransaction;
