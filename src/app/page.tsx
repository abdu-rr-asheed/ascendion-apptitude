import Link from "next/link";


export default function Home() {
  return (
    <div>
      <div>
        <Link href="/ChallengeOne">Challenge One</Link>
      </div>
      <div>
        <Link href="/ChallengeTwo">Challenge Two</Link>
      </div>
      <div>
        <Link href="/ChallengeThree">Challenge Three</Link>
      </div>
    </div>
  );
}
