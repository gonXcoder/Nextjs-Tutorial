import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>Ooops!</h1>
      <h3>Page cannot be found</h3>
      <Link href="/">Go Back to Homepage</Link>
    </div>
  );
}
