import Link from "next/link";
import { ArrowRight } from "react-feather";
import Image from "next/image";
import work from "./lib/work.json";

export default function Home() {
  return (
    <div className="pb-24 md:pb-48">
      <h1 className="text-3xl font-light md:text-5xl lg:text-8xl md:pt-12 lg:pt-24 pb-20 md:pb-48">
        👋🏻 Hi there, I&apos;m Andy. Currently building product at{" "}
        <a
          href="https://www.polymerize.io"
          target="_blank"
          className="font-medium hover:underline"
          rel="noreferrer"
        >
          Polymerize
        </a>
        .
      </h1>
      <div className="flex flex-col gap-16 text-xl font-bold md:text-4xl transition-all ease-in">
        {work.map((el) => (
          <Link key={el.title} href={el.link} passHref={true}>
            <section className="flex flex-col gap-16 hover:shadow-md hover:cursor-pointer transition-all hover:p-8 ease-in hover:ease-in">
              <Image
                src={el.src}
                width={1600}
                height={900}
                alt=""
                className="object-scale-down"
              ></Image>
              <article className="flex flex-col gap-2">
                <span className="flex flex-row gap-2 items-center">
                  {" "}
                  <a className="hover:underline">
                    <h2>{el.title}</h2>
                  </a>
                  <ArrowRight size={24} className="md:hidden" />
                  <ArrowRight size={48} className="hidden md:block" />
                </span>
                <h2 className="text-gray-500 font-light">{el.desc}</h2>
              </article>
            </section>
          </Link>
        ))}
      </div>
    </div>
  );
}
