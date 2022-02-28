import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div>
        <h4>Andy</h4>
      </div>
      <div>
        <ul>
          <Link href="/">
            <a>
              <li>Work</li>
            </a>
          </Link>
          <Link href="/">
            <a>
              <li>About</li>
            </a>
          </Link>
          <Link href="/">
            <a>
              <li>Contact</li>
            </a>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
