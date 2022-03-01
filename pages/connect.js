import { ArrowRight } from "react-feather";

export default function connect() {
  return (
    <div className="flex flex-col gap-8 ">
      {/* Hero */}
      <div className="flex flex-col gap-4 pb-12 md:pb-24">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl tracking-tight font-bold">
            Polymerize Connect
          </h1>
          <h2 className="text-xl text-gray-500 tracking-wide font-light">
            Building a modular, customisable lab management system so that any
            chemical company can map their physical workflow into a digital
            platform.
          </h2>
        </div>
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
            <p>6 weeks</p>
          </div>
        </section>
      </div>
      {/* Body */}
      <div className=" md:pl-12 lg:pl-20 flex flex-col gap-4 md:gap-12 lg:gap-16 xl:gap-24 ">
        {/* Starter */}
        <article className="pb-16">
          <p>
            Polymerize Connect is a spin-off from Polymerize’s flagship product
            that focuses on being an interconnected Electronic Lab Notebook
            (ELN) and Lab Inventory Management System (LIMS). It is built to
            focus on facilitating the digitisation of chemical companies and
            their transition into data-driven experimentation.
          </p>
        </article>
        {/* Challenge & My Role*/}
        <article className="flex flex-col gap-4 font-regular">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl">The Challenge</h3>
            <p>
              In 2020, Polymerize launched Polymerize Labs, a web application
              that takes research data and results to generate recommendations
              for the next steps using machine learning. However, Labs was
              limited: the machine learning model can be customised, but how we
              ingested data, referenced data, and formatted data was not. There
              were too many nuances and soon, it became a bottleneck.
            </p>
            <p>
              Besides being a bottleneck, Labs was huge, cumbersome, and rigid.
              There were highly specific customer requests that resulted in
              strange combinations of input fields and user flows. This led us
              to designing and building a completely modular and customisable
              platform.
            </p>
            <p>
              I was part of an ambitious project to ideate, conceptualise, and
              design a product from the ground up to address those needs.
            </p>
            <p className="text-sm font-light italic">
              Information and data found in this case study are omitted,
              obfuscated, and altered to comply with my non-disclosure
              agreement. All information in this case study is my own and does
              not necessarily reflect the views of Polymerize.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl">My Role</h3>
            <p>
              I led the design and product management team to design the lab
              management experience betweem Jan 2022 - Feb 2022, collaborating
              with the Engineering and Leadership team on other core features
              that demanded some level of domain knowledge. In addition, I
              worked alongside a Materials Engineer, who provided much needed
              perspective as a former scientist.
            </p>
            <p>
              Thereafter, I was only responsible for coordinating the delivery
              of the project, as well as planning for subsequent iterations and
              distribution.
            </p>
            <p>
              Polymerize Connect is in an alpha version, which is launched on
              Feb 28, 2022.
            </p>
          </div>
        </article>
        {/* Problem Space */}
        <article className="">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl">Problem Space & Discovery</h3>
            <p>
              We were intending to redefine our information architecture, and
              that meant we needed users, proxy users, and data to tell us what
              are some of their key flows. Secondary data and academia came in
              very handy to fill in the gaps and build stronger bases for our
              assumptions.
            </p>
            <p>
              As part of product development, I dove into the problem space to
              define core workflows, key jobs to be done, and critical product
              experiences.
            </p>
            <p>
              Polymerize Connect is in an alpha version, which is launched on
              Feb 28, 2022.
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
            <section className="flex flex-col gap-4 lg:flex-row lg:py-4">
              <div className="flex flex-col gap-4">
                {/* Image Here */}
                <h4 className="font-bold">
                  Not everyone did “B” after “A”—some did “C” or even “A.1”
                </h4>
                <p className="text-sm">
                  Researchers were annoyed that they had to request for a
                  specific stage in their sequential lab workflow. Some of them
                  had branching workflows that could not be reflected with our
                  limited customisation options.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {/* Image Here */}
                <h4 className="font-bold">
                  Frequent exiting of the platform to perform calculations
                </h4>
                <p className="text-sm">
                  Researchers felt like they had to double work to perform
                  simple and complex calculations with their data. Researchers
                  expected Polymerize to do the work, or to allow them to
                  perform those calculations natively.
                </p>
              </div>
            </section>
          </div>
        </article>
        {/* The Discovery */}
        <article className="flex flex-col gap-2">
          <h3 className="font-bold text-xl">The Discovery</h3>
          <h2 className="text-3xl font-light">
            Researchers equated us to Microsoft Office on steroids.
          </h2>
          <p>
            This was unsurprising: researchers are a particularly less fussy
            bunch. There are labs that deal with complex formulations and
            delicate processes, but still store their data haphazardly on Google
            Docs. It felt unfair—how could we match up to the Microsoft Office
            suite? After some thinking, it became clearer that researchers
            simply want a platform that knew how they work and worked like how
            they work.
          </p>
          <p>
            What about platforms that already offered customisation to a certain
            degree? What about open-source ELNs in the market?
          </p>
          <p>
            Researchers wanted to work with something that represents a digital
            version of their lab. With this as our north star, we dove deeper
            into user research and our current users at Labs.
          </p>
        </article>
        {/* Going Deeper */}
        <article className="flex flex-col gap-2">
          <h3 className="font-bold text-xl">Going Deeper</h3>
          <h2 className="text-3xl font-light">Customisation ≠ Empathy</h2>
          <p>
            It is easy to jump straight into thinking that allowing users to
            customise meant we were addresing their needs. Before I could jump
            into designing, I had to define success and understand the health of
            their current experience with Labs.
          </p>
          <p>
            This meant defining the concept of “perfect lab day”. Using that, I
            modeled for the dimensions of speed, friction, and accomplishment.
          </p>
          <p>
            To understand this at scale, I dug into data that was available on
            Mixpanel and heatmaps on Clarity to reveal big insights into the
            usage experience. I attended customer calls to hear them talk about
            issues they are facing on Labs, which allowed me to map to several
            mental models that the design team was already working with.
          </p>
          <p>Below is an excerpt of key flows that I’ve mapped.</p>
          {/* Image here */}
          <p>
            When researchers document less and less detail, Labs’ machine
            learning model has less accurate data to train on. Predictions
            generally get less accurate, and more human intervention is required
            to tweak the models’ output. We needed an interface that set up an
            environment for the researchers to dump all their data for our model
            to filter and learn from.
          </p>
        </article>

        {/* Too Much Intervention */}
        <article className="">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl">
              Project management required too much of our intervention
            </h3>
            <p>
              Based on the key flows, I sought out our Sales team and current
              users to generate insights. I realised that since the inception of
              Labs, there were customer requests every week. Almost all of these
              requests involved some form of customisation or function that
              could be addressed with a scaleable infrastructure. This data
              showed me that the experience on Labs was hardly a “digital vision
              of a Lab” that we were aiming for.
            </p>
            <p>
              For chemical companies, not all of them had access to our app
              while they were in the lab. For some, they had to be away from
              their phones from 8 - 5, which meant that we had to ensure that
              their litle time they spent with our app is as frictionless as
              possible.
            </p>
            <p>
              When they actually had the time to sit down and plan out their
              project, the lack of customisation forces them to revert back to
              Microsoft Office or traditional pen-and-paper. This meant losing
              out on valuable data, which also translated into lost potential in
              cost-savings, since they would have to do more experiments to
              reach the result they want instead of relying on a more
              data-driven approach.
            </p>
            <p>
              With all the back-and-forth, we also lost out on opportunities to
              create game-changing features that could address other use cases.
              With our limited bandwidth as a small-scale startup, we could only
              devote time to building for our users rather than doing other
              discovery work.
            </p>
            <p>
              Below are some examples of infrastructural change that we could’ve
              done to reduce the need for the company’s intervention.
            </p>
            <section className="flex flex-col gap-4 py-8">
              <div className="lg:flex lg:flex-row lg:gap-4">
                <div className="w-full">
                  <h4 className="font-bold">
                    Allowing users to define what input fields they need for
                    their projects
                  </h4>
                  <p className="text-sm">
                    We had a fixed set of properties for every project. Some
                    users had “customer name”, “customer application”, “goal”
                    and other fields of different datatypes.
                  </p>
                </div>
                <div className="w-full">
                  <h4 className="font-bold">
                    Allowing users to perform mathematical calculations
                  </h4>
                  <p className="text-sm">
                    We had a table to allow users to record their experiment
                    results in a familiar way (i.e. Excel), but every
                    mathematical function needed to be performed elsewhere
                    before recording it.
                  </p>
                </div>
              </div>
              <div className="lg:flex lg:flex-row lg:gap-4">
                <div className="w-full">
                  <h4 className="font-bold">
                    Connecting components across the platform meaningfully
                  </h4>
                  <p className="text-sm">
                    We only used hyperlinks and offhanded displays to indicate
                    where information came from. Users wanted to feel like the
                    whole platform was a single entity, and not multiple
                    “functions” stitched together.
                  </p>
                </div>
                <div className="w-full">
                  <h4 className="font-bold">
                    Driving forgiveness and anticipating user learning
                  </h4>
                  <p className="text-sm">
                    The platform was unforgiving: mistakes were not highlighted
                    and users frequently felt frustrated when they had no idea
                    why something they did failed.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </article>

        {/* Reframing */}
        <article className="flex flex-col gap-1">
          <h3 className="font-bold text-xl">Reframing the problem</h3>
          <h2 className="text-3xl font-light">
            Disconnected components led to a disconnected platform
          </h2>
          <p>
            Labs exacerbates the problem of difficulty in digitalisation in
            chemical companies. With an unforgiving interface and disconnected
            components, users had a difficult time getting used to a platform
            despite it being “built” for chemical companies. Ancillary
            communication between us and the users led to wasted time,
            frustration, and high opportunity costs.
          </p>
          <p>It was clear we needed a new interface, but how?</p>
          <div className="border-l-2 border-black border-solid my-8">
            <blockquote className="font-bold text-2xl ml-12">
              “...Labs is way too customised at this point—so how might we help
              researchers organise all their lab operations in one single
              place?”
            </blockquote>
          </div>
        </article>

        {/* The Redesign  */}
        {/* How we got there */}
        {/* Translating */}
        {/* From Uncertain to Predictable */}
        {/* From Inefficent to Optimised */}
        {/* From Disconnected to Interconnected */}
        {/* From Immutable to Flexible */}
        {/* The Impact */}
        {/* Reflection */}
      </div>
      <div className="flex flex-row gap-2 items-center mx-auto my-24">
        <a href="mailto:ndisisnd@gmail.com" target="_blank" rel="noreferrer">
          <h1 className="text-3xl md:text-5xl tracking-wide hover:underline hover:font-bold ease-in hover:ease-in">
            Get in touch
          </h1>
        </a>
        <ArrowRight size={24} className="block md:hidden" />
        <ArrowRight size={48} className="md:block hidden" />
      </div>
    </div>
  );
}
