import Image from "next/image";
import experience from "./lib/experience.json";
import education from "./lib/education.json";
import skills from "./lib/skills.json";
import Head from "next/head";

export default function About() {
  const expArr = experience;
  const eduArr = education;
  const skillArr = skills;

  return (
    <div>
      <Head>
        <title>About Me</title>
      </Head>
      <section className="flex flex-col pb-24 md:pb-48 lg:pb-64 gap-4 md:gap-24 lg:gap-48 md:pt-12 lg:pt-24">
        <h1 className="text-3xl md:text-5xl lg:text-8xl pb-12 md:pb-24 lg:pb-48">
          About Me
        </h1>
        <article className="font-light tracking-wide flex flex-col gap-2 md:text-3xl lg:text-4xl lg:text-right lg:pl-32 xl:pl-84 2xl:pl-128">
          <h3>
            I’m Andy Chan, a UI/UX designer with a penchant for product who
            thrives in designing and building things that make sense. I’m
            currently building product at{" "}
            <a href="https://www.polymerize.io" className="underline">
              Polymerize
            </a>{" "}
            as a product manager.
          </h3>
          <h3>
            I believe in discipline over passion, and that led me to gain a
            wealth of knowledge and expertise by working on a wide variety of
            projects in wildly different verticals, from real estate to material
            sciences. I’m also aiming to be a “full-stack” designer, and I’m
            currently a computer science sophomore at Goldsmiths, University of
            London.
          </h3>
        </article>
        <article className="lg:flex lg:flex-row w-full justify-between items-start">
          <Image
            alt="Profile Picture of Andy"
            src="/assets/profpic.png"
            width={550}
            height={734}
            className="order-last object-scale-down"
          ></Image>
          <section className="flex flex-col order-first">
            <section className="pt-8">
              <div>
                <h3 className="font-bold tracking-wide uppercase pb-4 md:text-2xl">
                  Experience
                </h3>
                {expArr.map((exp) => (
                  <div
                    key={exp.tenure}
                    className="flex flex-row items-center w-full justify-between md:text-lg"
                  >
                    <div className="flex flex-col py-1 md:py-2">
                      <h4 className="tracking-tight text-md md:text-lg">
                        {exp.org}
                      </h4>
                      <div>
                        <p className="font-bold">{exp.title}</p>
                        <p className="text-gray-400 text-sm md:text-lg">
                          {exp.tenure}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section className="pt-8">
              <div>
                <h3 className="font-bold tracking-wide uppercase pb-4 md:text-2xl">
                  Experience
                </h3>
                {eduArr.map((edu) => (
                  <div
                    key={edu.org}
                    className="flex flex-row items-center w-full justify-between md:text-lg"
                  >
                    <div className="flex flex-col py-1 md:py-2">
                      <h4 className="tracking-tight text-md md:text-lg">
                        {edu.org}
                      </h4>
                      <div>
                        <p className="font-bold">{edu.major}</p>
                        <p className="text-gray-400 text-sm md:text-lg">
                          {edu.year}
                        </p>
                        <p className="text-sm md:text-lg">{edu.skills}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section className="pt-8">
              <div>
                <h3 className="font-bold tracking-wide uppercase pb-4 md:text-2xl">
                  Skills & Software
                </h3>
                {skillArr.map((ski) => (
                  <div
                    key={ski.type}
                    className="flex flex-row items-center w-full justify-between md:text-lg"
                  >
                    <div className="flex flex-col py-1 md:py-2">
                      <h4 className="tracking-tight text-md md:text-lg font-bold">
                        {ski.type}
                      </h4>
                      <div>
                        <p className="text-sm md:text-lg">{ski.skills}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </section>
        </article>
      </section>
      {/* <div className="text-4xl md:text-7xl">About Me</div>
      <section className="pt-48 text-xl xl:text-4xl font-light md:text-right flex flex-col gap-4 md:pl-12 lg:pl-20 xl:pl-64">
        <h3>
          I’m Andy Chan, a UI/UX designer with a penchant for product who
          thrives in designing and building things that make sense. I’m
          currently building product at{" "}
          <a href="https://www.polymerize.io" className="underline">
            Polymerize
          </a>{" "}
          as a product manager.
        </h3>
        <h3>
          I believe in discipline over passion, and that led me to gain a wealth
          of knowledge and expertise by working on a wide variety of projects in
          wildly different verticals, from real estate to material sciences. I’m
          also aiming to be a “full-stack” designer, and I’m currently a
          computer science sophomore at Goldsmiths, University of London.
        </h3>
      </section>
      <article className="flex flex-col lg:flex-row justify-between pt-24">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <h3 className="tracking-wide uppercase font-bold text-2xl">
              Experience
            </h3>
            {expArr.map((exp) => (
              <div key={exp.org} className="flex flex-col gap-1">
                <h4 className="tracking-wide uppercase text-xl">{exp.org}</h4>
                <div>
                  <p className="font-bold">{exp.title}</p>
                  <p>{exp.tenure}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="tracking-wide uppercase font-bold text-2xl">
              Education
            </h3>
            {eduArr.map((edu) => (
              <div key={edu.org} className="flex flex-col gap-1">
                <h4 className="tracking-wide uppercase text-xl">{edu.org}</h4>
                <div>
                  <p className="font-bold">{edu.major}</p>
                  <p>{edu.year}</p>
                  <p>{edu.skills}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="tracking-wide uppercase font-bold text-2xl">
              Skills & Software
            </h3>
            {skillArr.map((skill) => (
              <div key={skill.type} className="flex flex-col gap-1">
                <h4 className="tracking-wide uppercase text-xl">
                  {skill.type}
                </h4>
                <div>
                  <p>{skill.skills}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="order-first lg:order-none pb-24 lg:p-0 ">
          <Image
            src="/assets/profpic.png"
            width={550}
            height={734}
            alt="Andy's profile picture."
          ></Image>
        </div>
      </article>
      <div className="w-full flex flex-row gap-2 items-center justify-center py-48 text-2xl lg:text-5xl">
        <a
          href="mailto:ndisisnd@gmail.com"
          className="hover:underline hover:transition-all hover:ease-in ease-in hover:font-bold transition-all hover:tracking-tight"
        >
          <h1 className="tracking-wide">Get in touch</h1>
        </a>
        <ArrowRight className="lg:hidden block" size={24} />
        <ArrowRight className="hidden lg:block" size={48} />
      </div> */}
    </div>
  );
}
