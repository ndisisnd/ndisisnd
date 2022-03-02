import { ArrowRight } from "react-feather";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-8 py-16">
      <div>
        <Link href="/">
          <a href="">
            <h3 className="text-3xl lg:text-5xl uppercase font-bold">Andy</h3>
          </a>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-gray-400 text-md">Find me</p>
          <section className="flex flex-col">
            <a href="https://www.medium.com/@ndisisnd">Medium</a>
            <a href="https://www.linkedin.com/in/ndisisnd">LinkedIn</a>
            <a
              href="mailto:ndisisnd@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>
          </section>
        </div>
        <div className="flex flex-col gap-4 md:text-right">
          <section className="flex flex-col gap-4">
            <div className="flex flex-col md:items-end">
              <span className="flex flex-row gap-2">
                <a
                  href="mailto:ndisisnd@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Get in touch
                </a>
                <ArrowRight />
              </span>
              <span className="flex flex-row gap-2">
                <a
                  href="https://drive.google.com/file/d/1nCjhodKgGmPqLj856_FNFyyLGGf5jkqS/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Download my resume
                </a>
                <ArrowRight />
              </span>
            </div>
            <div>
              <p className="text-gray-400 font-light text-sm">
                © Andy Chan 2022
              </p>
              <p className="text-sm font-light">
                Built in{" "}
                <a className="underline" href="https://nextjs.org/">
                  NextJS
                </a>{" "}
                ❤️
              </p>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}
