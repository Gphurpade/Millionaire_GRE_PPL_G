import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white shadow-md relative">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">

        {/* Logo */}
        <Link href="/" className="text-4xl font-bold">
          Millionaire-GRE
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-6 text-xl mx-auto">
          <Link onClick={() => {
            const section = document.getElementById("free-tests");
            section?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
            href="/#free-tests">Tests</Link>
          <Link className="" href="/about">About</Link>
          <Link className="" href="/contact">Contact</Link>
        </div>

        {/* Login Button */}
        <Link
          href="/admin/login"
          className="absolute right-6 top-4 bg-white text-purple-600 px-4 py-1.5 rounded-md font-semibold"
        >
          Login
        </Link>

      </div>
    </nav>
  );
}
