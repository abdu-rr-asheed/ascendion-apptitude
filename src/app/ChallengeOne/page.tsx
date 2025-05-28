"use client";
import Link from "next/link";
import { useState } from "react";

export default function ChallengeOnePage() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [total, setTotal] = useState("");

  const handleCalculate = () => {
    const num1 = parseFloat(firstNumber) || 0;
    const num2 = parseFloat(secondNumber) || 0;
    setTotal((num1 + num2).toString());
  };
  const handleReset = () => {
    setFirstNumber("");
    setSecondNumber("");
    setTotal("");
  };
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Challenge 1: Simple Calculator</h1>
        <p className="text-gray-600 mb-6">Objective: Create a calculator that adds two numbers.</p>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Simple Calculator</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Number</label>
              <input type="number" value={firstNumber} onChange={(e) => setFirstNumber(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter first number" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Second Number</label>
              <input type="number" value={secondNumber} onChange={(e) => setSecondNumber(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter second number" />
            </div>

            <div className="flex space-x-3">
              <button onClick={handleCalculate} className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200">
                Calculate
              </button>
              <button onClick={handleReset} className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-200">
                Reset
              </button>
            </div>

            <div className="mt-4 p-4 bg-gray-50 rounded-md">
              <p className="text-lg font-medium text-gray-800">
                Total: <span className="text-blue-600 font-bold">{total}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link href="/" className="block text-center text-blue-600 hover:text-blue-800 underline mt-4">Go To Home Page</Link>
    </div>
  );
}
