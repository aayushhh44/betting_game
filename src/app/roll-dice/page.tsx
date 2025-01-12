"use client";
import Navbar from "@/components/Navbar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from "react";

const Page = () => {
  const [rolling, setRolling] = useState(false);
  const [rolling2, setRolling2] = useState(false);
  const [diceValue, setDiceValue] = useState(1);
  const [diceValue2, setDiceValue2] = useState(1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setRolling(true);
    setTimeout(() => {
      const newDiceValue = Math.ceil(Math.random() * 6);
      //   const newDiceValue2 = Math.ceil(Math.random() * 6);
      setDiceValue(newDiceValue);
      //   setDiceValue2(newDiceValue2);
      setRolling(false);
    }, 1000);
  };

  const handleSubmit2 = (e: any) => {
    e.preventDefault();

    setRolling2(true);

    setTimeout(() => {
      const newDiceValue2 = Math.ceil(Math.random() * 6);

      setDiceValue2(newDiceValue2);
      setRolling2(false);
    }, 1000);
  };

  const renderDots = (diceValue: number) => {
    const dotPositions = {
      1: [[1, 1]],
      2: [
        [0, 0],
        [2, 2],
      ],
      3: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      4: [
        [0, 0],
        [0, 2],
        [2, 0],
        [2, 2],
      ],
      5: [
        [0, 0],
        [0, 2],
        [1, 1],
        [2, 0],
        [2, 2],
      ],
      6: [
        [0, 0],
        [0, 2],
        [1, 0],
        [1, 2],
        [2, 0],
        [2, 2],
      ],
    };

    return dotPositions[diceValue]?.map(([row, col], index) => (
      <div
        key={index}
        className="w-4 h-4 bg-gray-700 rounded-full"
        style={{
          gridRow: row + 1,
          gridColumn: col + 1,
        }}
      ></div>
    ));
  };

  return (
    <div className="p-4">
      <Navbar />

      <div className="flex justify-end">
        <Dialog>
          <DialogTrigger className="text-white p-2 rounded-md font-bold bg-green-700">
            How to Play?
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>How to Play</DialogTitle>
              <DialogDescription>
                <h3 className="font-bold text-sm">Game Objective</h3>
                <p>
                  Roll the first dice and predict what the sum of both dice will
                  be without rolling the second dice. Once you've made your
                  prediction, roll the second dice and check if you guessed the
                  sum correctly!
                </p>
                <h3>Steps</h3>
                <ol>
                  <li>
                    Click "Roll Dice" to roll the first dice and get its value.
                  </li>
                  <li>
                    Based on the first dice roll, predict the sum of both dice.
                  </li>
                  <li>Click "Roll Dice" again to roll the second dice.</li>
                  <li>
                    Check if your prediction is correct by adding both dice
                    values.
                  </li>
                </ol>
                <h3>Winning Condition</h3>
                <p>
                  If you correctly predict the sum of the two dice, you win!
                  Otherwise, you can try again.
                </p>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <h1 className="font-bold text-xl">Roll Dice</h1>

      {/* Dice */}
      <div className="flex gap-16 items-center">
        <div>
          <div className="my-2">
            <div
              className={`h-28 w-28 bg-white rounded-xl shadow-xl transform grid grid-rows-3 grid-cols-3 gap-6 justify-center items-center transition duration-500 ${
                rolling ? "animate-roll" : ""
              }`}
            >
              {renderDots(diceValue)}
            </div>
          </div>
          <h1>Dice 1</h1>
          Dice Value: {diceValue}
          <br />
          <button
            onClick={handleSubmit}
            className="text-xl my-8 font-bold rounded-md bg-red-400 p-2"
          >
            {rolling ? "Rolling..." : "Roll dice"}
          </button>
        </div>

        <h1 className="text-6xl">+</h1>

        <div className="flex flex-col gap-2">
          <div>
            <div
              className={`h-28 w-28 bg-white rounded-xl shadow-xl transform grid grid-rows-3 grid-cols-3 gap-6 justify-center items-center transition duration-500 ${
                rolling2 ? "animate-roll" : ""
              }`}
            >
              {renderDots(diceValue2)}
            </div>
            <h2>Dice 2</h2>
            Dice Value: {diceValue2}
          </div>

          <button
            onClick={handleSubmit2}
            className="text-xl my-8 font-bold bg-red-400 rounded-md p-2"
          >
            {rolling2 ? "Rolling" : "Roll dice"}
          </button>
        </div>
      </div>
      {/* Form */}
      <div className="flex flex-col">
        {/* <form className="flex flex-col gap-3" onSubmit={handleSubmit}> */}
        <label htmlFor="betAmount">Enter your betting amount</label>
        <input
          className="border border-red-500 p-2 w-36"
          type="number"
          id="betAmount"
        />
        <button
          className={`bg-red-400 p-2 text-white rounded hover:bg-red-500 transition`}
          type="submit"
          disabled={rolling} // Disable button during roll
        >
          Bet
        </button>
      </div>
    </div>
  );
};

export default Page;
