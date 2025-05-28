"use client";

import Link from "next/link";
import { useState } from "react";

// Two Sum function with proper TypeScript typing
function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1]; // Return 1-indexed positions
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}

export default function ChallengeThreePage() {
  const [numbersInput, setNumbersInput] = useState("");
  const [target, setTarget] = useState("");
  const [result, setResult] = useState<number[]>([]);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      // Parse the comma-separated numbers
      const numbers = numbersInput
        .split(",")
        .map((num) => parseInt(num.trim()))
        .filter((num) => !isNaN(num));

      if (numbers.length === 0) {
        setError("Please enter valid numbers");
        return;
      }

      // Parse target value
      const targetNumber = parseInt(target);
      if (isNaN(targetNumber)) {
        setError("Please enter a valid target number");
        return;
      }

      // Check if array is sorted and has no duplicates
      const isSorted = numbers.every((num, i) => {
        if (i === 0) return true;
        return numbers[i - 1] < num; // Using strict less than to ensure no duplicates
      });
      if (!isSorted) {
        setError("Numbers array must be sorted in ascending order with no duplicate values");
        return;
      }

      // Find two sum
      const indices = twoSum(numbers, targetNumber);
      setResult(indices);
    } catch {
      setError("Error processing input");
    }
  };

  return (
    <>
      <div className="p-5 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6">Two Sum Challenge</h1>

        {/* Input Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Numbers Array (comma-separated, must be sorted in ascending order)</label>
            <input type="text" value={numbersInput} onChange={(e) => setNumbersInput(e.target.value)} placeholder="e.g., 2,7,11,15" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Target Sum</label>
            <input type="number" value={target} onChange={(e) => setTarget(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <button type="submit" className="px-5 py-2.5 bg-blue-600 text-white border-0 rounded-md cursor-pointer hover:bg-blue-700 transition-colors w-full">
            Find Two Sum
          </button>
        </form>

        {/* Results */}
        {error && <div className="mt-5 text-red-600">Error: {error}</div>}

        {result.length > 0 && (
          <div className="mt-5 text-green-600">
            <strong>Result:</strong> Index {result[0]} and Index {result[1]}
          </div>
        )}

        {result.length === 0 && !error && numbersInput && <div className="mt-5 text-orange-500">No two numbers sum to the target value.</div>}
      </div>
      <Link href="/" className="block text-center text-blue-600 hover:text-blue-800 underline mt-3">
        Go To Home Page
      </Link>
    </>
  );
}
