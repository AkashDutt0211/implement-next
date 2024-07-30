import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (session === null) {
    return <button onClick={() => signIn()}>Sign In</button>;
  }
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
      <button onClick={() => signOut()}>Sign Out</button>
    </>
  );
}
