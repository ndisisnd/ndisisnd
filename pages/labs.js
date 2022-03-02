export default function labs() {
  return (
    <div className="flex flex-col gap-8 ">
      <div className="flex flex-col gap-4 md:pb-24">
        {/* Hero */}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl tracking-tight font-bold">Polymerize Labs</h1>
          <h2 className="text-xl text-gray-500 tracking-wide font-light">
            Designing an interface to allow users to generate experiments from
            statistical predictive algorithms.
          </h2>
          <section className="flex flex-col gap-4">
            <div>
              <p className="font-bold">Sector</p>
              <p>SaaS, Materials Science, Labtech</p>
            </div>
            <div>
              <p className="font-bold">Role</p>
              <p>
                Product design and development from research to concept,
                visualisation and testing
              </p>
            </div>
            <div>
              <p className="font-bold">Project Time</p>
              <p>4 weeks</p>
            </div>
          </section>
        </div>
      </div>

      {/* Body */}
      <div className=" md:pl-12 lg:pl-20 flex flex-col gap-16 pb-24 lg:gap-20 xl:gap-28 ">
        {/* Starter */}
        <article className="pb-16">
          <p>
            Design of Experiments (DoE) provides the power of statistical
            prediction of experiment results in a simple, step-by-step process.
          </p>
        </article>

        {/* The Challenge & My Role */}
        <article className="flex flex-col gap-4 md:gap-12 font-regular">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl">The Challenge</h3>
            <p>
              Working on a new material? Don’t have historical data of a certain
              type of projects? Researchers had these issues when working with
              new projects, and needed to find a way to generate experiments
              without having to ideate too much on their own.
            </p>
            <p>
              While most researchers have their own methodologies to generate
              experiments from nothing, they usually involved complex
              mathematical calculations or highly specialised software that they
              don’t have access to.
            </p>
            <p>
              I was part of this proejct to find out what they used, how they
              would use them, and translate those into a simple to use
              interface.
            </p>
            <p className="font-sm italic">
              Information and data found in this case study are omitted,
              obfuscated, and altered to comply with my non-disclosure
              agreement. All information in this case study is my own and does
              not necessarily reflect the views of Polymerize.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl">My Role</h3>
            <p>
              I paired up with a product designer to design the experiment
              between Sep 2022 - Oct 2022, collaborating with the materials team
              to learn about how Design of Experiments worked and its prevalence
              in the academic world. Thereafter, I left the project in the hands
              of the engineering team, who brought it to life.
            </p>
          </div>
        </article>

        {/* Problem Space & Discovery */}
        <article className="flex flex-col gap-4 md:gap-12 font-regular">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl">Problem Space & Discovery</h3>
            <p>
              The truth is that for these researchers, what they truly cared
              about was the end result. How they generated, which algorithm they
              used, and how many iterations they had were out of the question—it
              is the resultant experiments that they had to filter and carefully
              curate so that they conduct experiments that would lead them
              closer to their goal.
            </p>
            <p>
              Before I could even sit down and design, I had to first understand
              how Design of Experiments worked. This proved to be my biggest
              challenge yet as I had to grasp with applied statistics and work
              with my lack of domain knowledge. Hence, I relied heavily on my
              materials team, and validating prototypes with users.
            </p>
            <p>
              To begin defining the architecture of the experience, I had to
              first define the mental model that the user is working with, and
              it is broken into two parts:
            </p>
            {/* Image Here */}
            <h4 className="font-bold">
              Every lab worked so differently from one another, but the
              fundamentals are always the same.
            </h4>
            <p>
              Academia came in very helpful here. Particularly, academic
              research and analysis on ELNs and how they were beneficial to
              university research projects. These research papers gave us
              direct, unbiased perspectives.
            </p>
            <section className="flex flex-col gap-2 py-4">
              <h3 className="text-2xl">When do users use DoE?</h3>
              <ol>
                <li>
                  1. I want to identify which factor(s) are influencing my
                  output
                </li>
                <li>
                  2. I want to identify input/output relationships and develop
                  predictive equations for my what-if analyses
                </li>
              </ol>
              <p>
                During my initial learning of DoE, I thought I misunderstood
                what the project is about: if they only wanted to identify the
                factors or relationships, then shouldn’t it be some sort of
                visual interface that highlights or emphasises data, rather than
                generate new data?
              </p>
              <p>
                I sought out my materials team to understand why do users want
                to use DoE, and how this affects them in real life. This led me
                to define the next part of their mental model:
              </p>
            </section>
            <section className="flex flex-col gap-2 py-4">
              <h3 className="text-2xl">How will I want to use DoE?</h3>
              <ol>
                <li>
                  1. I want to generate experiments based on the results of the
                  analyses and conduct them accordingly
                </li>
                <li>
                  2. I want to generate experiments that are based on
                  algorithmic analyses
                  <li>
                    3. I want to rapidly identify relationships and influencing
                    factors to further refine my experiments
                  </li>
                </li>
              </ol>
              <div>
                {/* Image */}
                <p className="text-sm italic">
                  Key flow of algorithmic gerneration of experiments.
                </p>
              </div>
            </section>
          </div>
        </article>

        {/* The Discovery */}
        <article className="flex flex-col gap-4 font-regular">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl">The Discovery</h3>
            <h2 className="text-3xl font-light">
              Researchers don’t view us as a statistical tool
            </h2>
            <p>
              This was a huge boon to us: we had a clear direction to work with.
              Statistical and data analytics tools are notoriously difficult to
              work with due to the plethora of functions required. After sitting
              with a few of our customers and conducting user research with our
              ideal customer profiles, we concluded that users simply don’t view
              us at the same level.
            </p>
            <p>
              I then conceptualised that researchers wanted something
              frictionless and straightforward—they knew what DoE is. All they
              need is the end result. Hence, we sought to design our interface
              around that concept.
            </p>
            <div>
              {/* Image */}
              <p className="text-sm italic">
                Conceptualised user flow for Design of Experiments.
              </p>
            </div>
          </div>
        </article>
        {/* The Design Solution */}
        <article className="flex flex-col gap-4 font-regular">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl">The Design Solution</h3>
            <h2 className="text-3xl font-light">
              A straightforward linear user experience to generate experiments
            </h2>
            <p>
              DoE is generally done using Excel templates, and researchers
              usually added values to see the results and plot them onto a
              graph. For us, the end result isn’t a graph, but the next step
              after the graph. Hence, we could skip the middle portion, and head
              straight into entering values and generating experiments.
            </p>
          </div>
          <div>
            {/* Image */}
            <p className="text-sm italic">
              Design in collaboration with Audrey Yeo.
            </p>
          </div>
          <p>
            Users simply needed to know what they wanted to generate. I chose to
            respect their agency and only provided information on the algorithm
            that they want to choose, rather than hint them.
          </p>
          <p>
            We started off with a select few. After confirming the technical
            feasibility with the engineering team, I sat with users to learn
            about any other algorithms that they may require, and decided to use
            those as a base.
          </p>
          <div>
            {/* Image */}
            <p className="text-sm italic">Concept design by me.</p>
          </div>
          <p>
            I also then designed a page to store previously generated
            experiments. Users also requested features to manipulate these
            generate experiments, and we were also careful with selecting
            metadata to display. We opted for something more reusable and
            iterable and started building atomic components first.
          </p>
        </article>

        {/* The Impact & Reflection */}
        <article className="flex flex-col gap-4">
          <h3 className="font-bold text-xl">The Impact</h3>
          <h2 className="text-3xl font-light">
            Generating experiments with a few clicks
          </h2>
          <p>
            The feature was well-received and users felt that it was
            frictionless. It was also used as a finisher to clinch a large MNC
            customer.
          </p>
          <article className="flex flex-col gap-4 py-4">
            <h3 className="font-bold text-xl">Reflection</h3>
            <p>
              Overall, the DoE feature really targeted the use cases of our
              users. Give a chance to work on it again, I would definitely
              expand my design journey to include the materials team, and work
              with them on a daily basis rather than only approaching them to
              clear doubts. I would delegate the “knowledge gap filling” task to
              the materials team, rather than try to fill in that gap all by
              myself. Working without domain knowledge is tough, and with my
              previous approach, it was made unnecessarily tougher.
            </p>
            <p>
              I would also involve the machine learning team more rather than
              only understand how the algorithm worked. This would save more
              time. One of the problems that arose from this design was because
              we involved the machine learning team too late, and we had to make
              a lot of edits to how we generate the experiments.
            </p>
            <p className="text-sm italic">
              This case study was made at time of testing. Actual results of the
              product may vary after public launch. All data and research
              findings are either omitted, obfuscated, or altered slightly to
              comply with confidentiality agreements, whilst retaining the
              integrity and essence of the presented data.
            </p>
          </article>
        </article>
      </div>
    </div>
  );
}
