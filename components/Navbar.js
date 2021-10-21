import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <h2>Navigation</h2>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/">Home</Link>
      <Link href="/">Home</Link>
    </nav>
  );
}
