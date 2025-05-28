import Link from "next/link";

export default function ChallengeOnePage() {
  return (
    <div>
      <Link href="/">Home 1</Link>
      <div className="challenge challenge-one-container">
        <h1>Challenge 1: Simple Calculator</h1>
        <p>Objective: Create a calculator that adds two numbers.</p>
      </div>
    </div>
  );
}
