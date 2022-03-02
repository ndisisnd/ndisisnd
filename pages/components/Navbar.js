import Link from "next/link";
import { Menu } from "react-feather";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    return setMenuOpen(!menuOpen);
  };

  return (
    // Desktop Nav
    <div className="w-full">
      {/* Mobile */}
      <div className="flex flex-col items-end">
        <nav className="flex flex-row justify-between md:hidden py-8 items-center w-full">
          <Link href="/">
            <a className="uppercase font-bold text-xl">Andy</a>
          </Link>
          <Menu onClick={handleMenuOpen} />
        </nav>
        <section
          className={
            menuOpen
              ? `flex md:hidden p-4 shadow-md border-0 w-full items-end flex-col gap-4 rounded-md mb-12`
              : `hidden`
          }
        >
          <Link href="/">
            <a>Work</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <a href="mailto:ndisisnd@gmail.com" target="_blank" rel="noreferrer">
            Contact
          </a>
        </section>
      </div>
      {/* Desktop */}
      <nav className="hidden md:flex justify-between py-8">
        <Link href="/">
          <a className="uppercase font-bold">Andy</a>
        </Link>
        <section className="flex flex-row items-center gap-6">
          <Link href="/">
            <a className="transition-all hover:underline hover:font-bold active:font-bold active:underline">
              Work
            </a>
          </Link>
          <Link href="/about">
            <a className="transition-all hover:underline hover:font-bold active:font-bold active:underline">
              About
            </a>
          </Link>
          <a
            href="mailto:ndisisnd@gmail.com"
            target="_blank"
            className="transition-all hover:underline hover:font-bold active:font-bold active:underline"
            rel="noreferrer"
          >
            Contact
          </a>
        </section>
      </nav>
    </div>
  );
}
