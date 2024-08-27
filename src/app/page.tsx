import Link from "next/link";
export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link href="/facebook">facebook</Link>
        </li>
        <li>tiktok</li>
        <li>youtube</li>
      </ul>
    </main>
  );
}
