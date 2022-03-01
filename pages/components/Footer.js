import { ArrowRight } from "react-feather";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col px-60 py-8 gap-12 pb-20">
      <div className="w-full">
        <h4 className="uppercase text-4xl">Andy</h4>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-gray-400">Say hi</p>
          <ul className="text-xl">
            <a href="https://medium.com/@ndisisnd">
              <li>Medium</li>
            </a>
            <a href="https://www.linkedin.com/in/ndisisnd">
              <li>LinkedIn</li>
            </a>
            <a href="mail:ndisisnd@gmail.com">
              <li>Contact</li>
            </a>
          </ul>
        </div>
        <div className="flex flex-col items-end gap-4 justify-between">
          <ul className="text-xl flex flex-col items-end underline">
            <span className="flex items-center gap-2">
              <Link href="mailto:ndisisnd@gmail.com" target="_blank">
                <a>
                  <li>Get in touch</li>
                </a>
              </Link>
              <ArrowRight />
            </span>
            <span className="flex items-center gap-2">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1nCjhodKgGmPqLj856_FNFyyLGGf5jkqS/view?usp=sharing"
                rel="noreferrer"
              >
                <li>Download resume</li>
              </a>
              <ArrowRight />
            </span>
          </ul>
          <p className="text-gray-400 text-sm">© Andy Chan 2022</p>
        </div>
      </div>
    </footer>
  );
}
