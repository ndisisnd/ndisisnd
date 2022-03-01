import Image from "next/image";
import profilePic from "../public/assets/profpic.png";
import { skills, education, experience } from "./helper/DigitalResumeData";

import { ArrowRight } from "react-feather";

export default function About() {
  return (
    <div className="px-60">
      <div className="text-7xl">About Me</div>
      <section className="pt-48 text-4xl font-light text-right flex flex-col gap-4 pl-64">
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
      <article className="flex flex-row justify-between pt-24">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <h3 className="tracking-wide uppercase font-bold text-2xl">
              Experience
            </h3>
            {experience.map((exp) => (
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
            {education.map((edu) => (
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
            {skills.map((skill) => (
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
        <div>
          <Image
            src={profilePic}
            width={550}
            height={734}
            alt="Andy's profile picture."
          ></Image>
        </div>
      </article>
      <div className="w-full flex flex-row gap-2 items-center justify-center py-48 text-5xl">
        <a
          href="mailto:ndisisnd@gmail.com"
          className="hover:underline hover:transition-all hover:ease-in ease-in hover:font-bold transition-all hover:tracking-tight"
        >
          <h1 className="tracking-wide">Get in touch</h1>
        </a>
        <ArrowRight size={48} />
      </div>
    </div>
  );
}
