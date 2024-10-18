import Link from "next/link";
export default function Page() {
  return (
    <nav className="p-4">
      {" "}
      <ul className="flex space-x-4">
        {" "}
        <li>
          {" "}
          <Link href="/" aria-label="Go to Home">
            {" "}
            <strong className="text-blue-600 hover:underline">Home</strong>{" "}
          </Link>{" "}
        </li>{" "}
      </ul>{" "}
    </nav>
  );
}