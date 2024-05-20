import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Next JS - Home</h1>
      <ul>
        <li>
          <Link href={`/Blog`}>Blog Page</Link>
        </li>
        <li>
          <Link href={`/About`}>About Page</Link>
        </li>
      </ul>
    </>
  );
}
