import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex flex-row px-60 py-8">
      <div className="w-full">
        <Link href="/">
          <a className="uppercase font-bold hover:underline transition-all ease-in">
            Andy
          </a>
        </Link>
      </div>
      <div>
        <ul className="flex flex-row gap-8">
          <Link href="/">
            <a>
              <li className="hover:underline transition-all ease-in hover:font-bold">
                Work
              </li>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <li className="hover:underline transition-all ease-in hover:font-bold">
                About
              </li>
            </a>
          </Link>
          <Link href="/">
            <a href="mailto:ndisisnd@gmail.com">
              <li className="hover:underline transition-all ease-in hover:font-bold">
                Contact
              </li>
            </a>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
