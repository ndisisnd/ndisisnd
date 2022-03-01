import { ArrowRight } from "react-feather";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col px-60 py-8 gap-12 pb-20">
      <div className="w-full">
        <h4 className="uppercase text-4xl">Andy</h4>
      </div>
      <div className="flex flex-row justify-between">
        <div>
          <p className="text-gray-400">Say hi</p>
          <ul className="text-xl">
            <Link href="/">
              <a>
                <li>Medium</li>
              </a>
            </Link>
            <Link href="/">
              <a>
                <li>LinkedIn</li>
              </a>
            </Link>
            <Link href="/">
              <a>
                <li>Contact</li>
              </a>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col items-end gap-4">
          <ul className="text-xl flex flex-col items-end underline">
            <span className="flex items-center gap-2">
              <Link href="/">
                <a>
                  <li>Get in touch</li>
                </a>
              </Link>
              <ArrowRight />
            </span>
            <span className="flex items-center gap-2">
              <Link href="/">
                <a>
                  <li>Download resume</li>
                </a>
              </Link>
              <ArrowRight />
            </span>
          </ul>
          <p className="text-gray-400">© Andy Chan 2022</p>
        </div>
      </div>
    </footer>
  );
}
