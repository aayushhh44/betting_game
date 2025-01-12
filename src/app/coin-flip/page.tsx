"use client";
import Navbar from "@/components/Navbar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToastAction } from "@/components/ui/toast";
import { UsePrice } from "@/context/PriceContext";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function CoinFlip() {
  const [flipping, setFlipping] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [betPriceCoin, setBetPriceCoin] = useState<number | null>(null);
  const [select, setSelect] = useState<string>("");
  const { price, setPrice } = UsePrice();
  const { toast } = useToast();

  const handleSelect = (value: string) => {
    setSelect(value);
    setResult(null); 
  };

  const startFlip = () => {
    if (!select || betPriceCoin === null || betPriceCoin <= 0) {
      alert("Please enter a valid amount and selection.");
      return;
    }

    if (betPriceCoin > price) {
      toast({
        title: "You don't have enough balance.",
        variant: "destructive",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return;
    }

    setFlipping(true);
    setResult(null);

    setTimeout(() => {
      const flipResult = Math.random() < 0.5 ? "Heads" : "Tails";
      setResult(flipResult);
      handleBalance(flipResult);
      setFlipping(false);
    }, 3000);
  };

  const handleBalance = (flipResult: string) => {
    if (flipResult === select) {
      setPrice((prev) => prev + (betPriceCoin ?? 0));
    } else {
      setPrice((prev) => prev - (betPriceCoin ?? 0));
    }
  };

  const handleBetChange = (value: string) => {
    setBetPriceCoin(Number(value));
    setResult(null);
  };

  return (
    <div className="p-4">
      <Navbar />
      <div className="text-2xl text-center">MAKE A CHOICE</div>
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-32 h-32">
          <div
            className={`absolute w-full h-full rounded-full border-4 border-yellow-500 bg-gradient-to-br from-yellow-400 to-yellow-300 flex items-center justify-center text-xl font-bold text-gray-800 ${
              flipping ? "animate-flip" : ""
            }`}
          >
            {result || "Heads"}
          </div>
        </div>
        {result === null && !flipping ? (
          <h1>Choose Heads or Tails</h1>
        ) : flipping ? (
          <h1>Flipping...</h1>
        ) : result === select ? (
          <h1>🎉 Congratulations, you won!</h1>
        ) : result !== null ? (
          <h1>🥹 Sorry, try again later!</h1>
        ) : null}
        <div className="my-16">
          <Select onValueChange={handleSelect}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Head or Tail?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Heads">Heads</SelectItem>
              <SelectItem value="Tails">Tails</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <p>Enter your betting amount</p>
          <input
            onChange={(e) => handleBetChange(e.target.value)}
            type="number"
            className={`border border-black ${
              betPriceCoin > price ? "border-red-500" : ""
            }`}
          />
          {betPriceCoin > price && (
            <p className="text-sm text-red-500">
              You don't have that amount of money in your wallet.
            </p>
          )}
        </div>

        <button
          onClick={startFlip}
          className="mt-8 px-4 py-2 bg-black text-white font-bold rounded-md hover:bg-gray-700 transition"
          disabled={flipping}
        >
          {flipping ? "Flipping..." : "Start Flip"}
        </button>
      </div>
    </div>
  );
}
