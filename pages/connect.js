import Image from "next/image";
import { ArrowRight } from "react-feather";

export default function connect() {
  return (
    <div className="flex flex-col gap-8 text-lg">
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
            <div className="py-8 md:py-16 lg:py-24 text-center md:text-left md:-ml-12 lg:-ml-20">
              <Image
                width={1600}
                height={900}
                layout="responsive"
                src="/assets/connect-problem-space.png"
                alt="Digital representation of sketch of related problems, and its
                own problem space."
              />
              <p className="text-sm italic pt-4 md:pt-8">
                Digital representation of sketch of related problems, and its
                own problem space.
              </p>
            </div>
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
                <div className="">
                  <Image
                    width={600}
                    height={600}
                    src="/assets/connect-b-a.png"
                    alt="Stages of companies differ from one another."
                  />
                </div>
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
                <div className="">
                  <Image
                    width={600}
                    height={600}
                    src="/assets/connect-do-math.png"
                    alt="User flow of exiting."
                  />
                </div>
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
          <div className="py-4 text-center md:text-left md:-ml-12 lg:-ml-20">
            <Image
              width={960}
              height={240}
              layout="responsive"
              src="/assets/connect-key-flows-excerpt.png"
              alt="Table of some key flows."
            />
          </div>
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
          <p>
            Labs could not be touched: we had big enterprise customers working
            daily on the platform that’s so highly customised to their needs.
            They were essentially, different offshoots of Labs.{" "}
          </p>
          <p>
            Our proposal was Connect, a platform solely meant to help users
            connect the dots with their research and preparing their data to be
            AI-ready.
          </p>
        </article>

        {/* The Redesign  */}
        <article className="flex flex-col gap-1">
          <h3 className="font-bold text-xl">The Redesign</h3>
          <h2 className="text-3xl font-light">
            Introducing Polymerize Connect
          </h2>
          <p>
            With more time spent on analysing data and conducting experiments
            than managing and organising data, Connect gives researchers’ an
            interface where we make project management fast, effortless, and
            calm. We give the necessary tools to help researchers map their lab
            workflow into Connect. They are the craftsmen of their own
            protocols.
          </p>
          <div className="py-8 md:py-16 lg:py-24 text-center md:text-left md:-ml-12 lg:-ml-20">
            <Image
              width={1600}
              height={900}
              layout="responsive"
              src="/assets/main-connect.png"
              alt="Different designs for Polymerize Connect, for different features."
            />
            <p className="text-sm italic pt-4 md:pt-8">
              Design in collaboration with Audrey Yeo.
            </p>
          </div>
          <div className="flex flex-col py-12">
            <hr className="py-4" />
            <h3 className="text-xl font-bold">
              Upload anything, we’ll make sense of it
            </h3>
            <p>
              Already have experiment data that you have previously created on
              Excel? Save time setting things up by simply uploading your
              spreadsheet—we’ll make sense of it. No more manual transferring,
              contacting sales to upload data, and spending hours in front of
              the your screen. Simply upload and go.
            </p>
            <div className="py-8 md:py-16 lg:py-24 text-center md:text-left md:-ml-12 lg:-ml-20">
              <Image
                width={1600}
                height={900}
                layout="responsive"
                src="/assets/connect-data-upload-mapper-ui.png"
                alt="Data upload mapper"
              />
              <p className="text-sm italic pt-4 md:pt-8">
                Design in collaboration with Audrey Yeo.
              </p>
            </div>
          </div>
          <div className="flex flex-col py-12">
            <hr className="py-4" />
            <h3 className="text-xl font-bold">
              An interconnected platform as a single entity
            </h3>
            <p>
              Experiments and work orders are all interconnected, housed in a
              single place. Managing work is now easier: get all the information
              and context you need without ever navigating out!
            </p>
            <div className="py-8 md:py-16 lg:py-24 text-center md:text-left md:-ml-12 lg:-ml-20">
              <Image
                width={1600}
                height={900}
                layout="responsive"
                src="/assets/connect-pmb-ui.png"
                alt="Images of dashboard for Polymerize Connect"
              />
              <p className="text-sm italic pt-4 md:pt-8">
                Design in collaboration with Audrey Yeo.
              </p>
            </div>
          </div>
          <div className="flex flex-col py-12">
            <hr className="py-4" />
            <h3 className="text-xl font-bold">
              Need to find something? We’ve got your back
            </h3>
            <p>
              Search globally, locally, and in any combination of keywords.
              We’ll make sense of it. Over time, we’ll learn more about what you
              search.
            </p>
            <div className="py-8 md:py-16 lg:py-24 text-center md:text-left md:-ml-12 lg:-ml-20">
              <Image
                width={1600}
                height={900}
                layout="responsive"
                src="/assets/connect-search-ui.png"
                alt="Images of global search functionality for Polymerize Connect"
              />
              <p className="text-sm italic pt-4 md:pt-8">
                Design in collaboration with Audrey Yeo.
              </p>
            </div>
          </div>
          <div className="flex flex-col py-12">
            <hr className="py-4" />
            <h3 className="text-xl font-bold">Flexible ways to do anything</h3>
            <p>
              Want to create the same project with the same properties? Need to
              duplicate experiments that will always contain the same
              composition of ingredients? Need to define very specific user
              permissions? We introduced a never-seen-before level of
              flexibility in every corner of the platform.
            </p>
            <div className="py-8 md:py-16 lg:py-24 text-center md:text-left md:-ml-12 lg:-ml-20">
              <Image
                width={1600}
                height={900}
                layout="responsive"
                src="/assets/connect-wo-customise-ui.png"
                alt="Images of customisation of work orders through flowchart for Polymerize Connect"
              />
              <p className="text-sm italic pt-4 md:pt-8">
                Design in collaboration with Audrey Yeo.
              </p>
            </div>
          </div>
        </article>

        {/* How we got there */}
        <article className="flex flex-col gap-4">
          <h3 className="font-bold text-xl">How we got there</h3>
          <h2 className="text-3xl font-light">
            Perfecting the project management experience
          </h2>
          <p>My design strategy was informed by:</p>
          <ol>
            <li>
              1. How do I design for any kind of researcher, in any kind of lab?
            </li>
            <li>2. How do I prioritise key flows?</li>
            <li>
              3. What is the perfect project management experience for a
              researcher?
            </li>
          </ol>
          <p>
            Since we already had a slew of information and signals from users at
            Labs, the natural next step was to clearly define what was the
            perfect project management experience so we had a shared vision.
          </p>
          <p>
            The existing Labs app was poorly designed for users who weren’t
            reflections of people that worked in Company A, Company B... to move
            beyond the existing biases, I advocated for inclusivity. To do so, I
            attempted to denote contexts that we needed to consider. This helped
            to eliminate any stereotypes that we had about users, which result
            in creating design solutions that scale.
          </p>
          <div className="py-4">
            <div className="py-8 md:py-16 lg:py-24 text-center md:text-left md:-ml-12 lg:-ml-20">
              <Image
                width={1600}
                height={900}
                layout="responsive"
                src="/assets/connect-spectrums.png"
                alt="Images of spectrums to consider"
              />
              <p className="text-sm italic py-2">
                An except from the list of contexts I considered.
              </p>
            </div>
          </div>
        </article>

        {/* Translating */}
        <article className="flex flex-col gap-4">
          <h3 className="font-bold text-xl">
            Translating into feature prioritisation
          </h3>
          <p>
            With limited resources, we had to focus on key design challenges.
            Based on product prioritisation, I focused on:
          </p>
          <ol>
            <li>
              1. How might we create an interface that disregarded language
              proficiency and is intuitive to work with even with limited
              English ability?
            </li>
            <li>
              2. How might we create an interface that doesn’t play into
              platform familiarity, whilst remaining generally understandable?
            </li>
            <li>
              3. How might we remove the need for our intervention entirely?
            </li>
            <li>
              4. How might we better adapt to the dynamic nature of lab
              operations, projects, and experiments?
            </li>
          </ol>
          <div className="py-8 md:py-16 lg:py-24 text-center md:text-left md:-ml-12 lg:-ml-20">
            <Image
              width={632}
              height={215}
              layout="responsive"
              src="/assets/connect-from-to.png"
              alt="Images of bad states to good states"
            />
          </div>
        </article>

        {/* From Uncertain to Predictable */}
        <article className="flex flex-col gap-4">
          <h3 className="font-bold text-xl">From Uncertain to Predictable</h3>
          <h2 className="text-3xl font-light">
            Ingesting data in any shape and form
          </h2>
          <p>
            Every lab stores their experiment data differently. Their
            spreadsheets differ even within a project, let alone between labs,
            sister companies, and organisations.
          </p>
          <p>
            A major reason we could not accomodate for the dynamic nature of
            these spreadsheets was that we had a fixed infrastructure. We had a
            data model that we needed users to format their data with so as to
            accomodate for our machine learning model. By doing so, we missed
            out on data that the researcher could not find time to “reformat”.
          </p>
          <p>Our data revealed that:</p>
          <ol>
            <li>
              1. Researchers never used our native data upload feature, and
              instead, contacted us on a weekly basis to get it uploaded and
              translated
            </li>
            <li>
              2. Power users on the platform always brought data uploading as
              one of their biggest headaches
            </li>
            <li>
              3. Even within the same experiment, the spreadsheet might be
              different from one researcher to another. This was not accounted
              for.
            </li>
          </ol>
          <p>
            Based on these insights, I proposed two key feature ideas: Data
            Upload Mapper and Data Upload History to help users understand what
            they are uploading, how they are uploading, and what actually gets
            ingested. This relied on a few key ideas:
          </p>
          <ul>
            <li>
              We needed to leverage on the users’ inclination to need to know
              everything that’s going on. We do the heavy lifting of ingesting,
              but we needed the user to tell us what to ingest
            </li>
            <li>
              We needed to learn, over time, the pattern of ingestion for users
            </li>
            <li>Capitalise on making information as visual as possible</li>
          </ul>
          <h3 className="font-bold text-xl">Crafting the mental model</h3>
          <p>
            I sat with the machine learning team to understand what data they
            needed to know and pored through their NoSQL database. Sifting
            through the plethora of JSON objects led me to understand what
            fields they exactly needed; most of the experiment data provided by
            users were redundant.
          </p>
          <p> We defined the mental model of our user: </p>
          <ul>
            <li>- I want to know what I am uploading</li>
            <li>- I want to know what will eventually get ingested</li>
            <li>- I want to control what I want to upload</li>
          </ul>
          <p>
            So as long as the user is able to achieve the above whilst giving
            the data that our data model eventually requires, it’ll suffice.
          </p>
          <p>
            I designed a feature that can understand any spreadshet based on its
            column headers and data within the column, and asked users to map
            properties (based on our data model) to their column headers. With a
            new speed bump, I added a new feature that pre-emptively displayed
            data from their spreadsheet so that they know what data their column
            contains as a hint.
          </p>
          <div className="py-8 md:py-16 lg:py-24 text-center md:text-left md:-ml-12 lg:-ml-20">
            <Image
              width={1440}
              height={1024}
              layout="responsive"
              src="/assets/connect-data-upload-select.png"
              alt="Data upload mapper UI"
            />
            <p className="text-sm italic py-4">
              Early explorations of the data upload mapper, focused on making
              the mapping function central. Designed in collaboration with
              Audrey Yeo, Michelle Vania Tandjung.
            </p>
          </div>
          <p>
            Contrary to our initial assumptions, project management boards and
            collaborative spreadsheets in the market today don’t exactly allow
            the level of control that we intended for with data upload.
          </p>
          <p>
            {" "}
            A lot of them expected data to be uploaded as is, whilsts others
            simply ingested whatever you threw at them. We sought inspiration
            from developer-focused open-source applications and unlikely places
            like email messaging platforms, and de-risked our new flow by
            testing with existing users.
          </p>
          <div className="py-8 md:py-16 lg:py-24 text-center md:text-left md:-ml-12 lg:-ml-20">
            <Image
              width={1440}
              height={1024}
              layout="responsive"
              src="/assets/connect-data-history-select.png"
              alt="Data history UI"
            />
            <p className="text-sm italic py-4">Concept design by me.</p>
          </div>
        </article>

        {/* From Inefficent to Optimised */}
        <article className="flex flex-col gap-4">
          <h3 className="font-bold text-xl">From Inefficient to Optimised</h3>
          <h2 className="text-3xl font-light">Search anything, anywhere</h2>
          <p>
            Projects can span years, an the number of experiments that occur
            during that period can amount to thousands, especially for bigger
            companies that had deep pockets for R&D.
          </p>
          <p>
            {" "}
            It can be difficult to search for anything at all when you are part
            of multiple projects. We need to adapt and understand what exactly
            researchers usually search for so that we can do the heavy lifitng.
            The system simply needed to be smart enough to work with that
            understanding, and present an interface that respected their agency.
          </p>
          <p>
            This was by far the most rewarding and technically demanding part of
            this project.
          </p>
          <section className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">Breadth & Depth</h3>
            <p>
              Search can span across the entire platform, but it can also dive
              very deep into a component. Users can go from searching for a
              specific name of an experiment to the percentage of oxidising
              agents used. This needed to be taken cared of by our search
              engine.
            </p>
            <p>
              To take care of this, I created a “model” to denote what kind of
              properties we needed our engine to search for, and whether these
              are searchable in the first place—as long as it is recorded, it
              should be searchable.
            </p>
            <div className="py-8 md:py-16 lg:py-24 text-center md:text-left md:-ml-12 lg:-ml-20">
              <Image
                width={960}
                height={342}
                layout="responsive"
                src="/assets/connect-search.png"
                alt="Breadth and depth considerations"
              />
              <p className="text-sm italic py-4">
                Excerpt of properties that are part of “breadth” or “depth”.
              </p>
            </div>
            <p>
              We first optimised for breadth, and that means taking care of the
              most prominent details of parent objects and components.
            </p>
            <p>
              For depth, we needed to prioritise. While technically possible, we
              needed to prioritse sensibly. Hence, I sought to draft out key
              flows, and tested my assumptions by looking at heatmaps and asking
              the materials team.
            </p>
            <div className="py-8 md:py-16 lg:py-24 text-center md:text-left md:-ml-12 lg:-ml-20">
              <Image
                width={960}
                height={342}
                layout="responsive"
                src="/assets/connect-search-key-flows.png"
                alt="Example of some key flows that we tested."
              />
              <p className="text-sm italic py-4">
                Example of some key flows that we tested.
              </p>
            </div>
            <p>We then defined the mental model of the user:</p>
            <ol>
              <li>1. I want to search for something quickly</li>
              <li>
                2. I want to search for something really specific, but I need
                context to recall the next thing to search for
              </li>
              <li>
                3. I don’t have enough information on hand, but I still want to
                search for it
              </li>
            </ol>
            <section className="flex flex-col gap-4">
              <h3 className="font-bold text-xl">Searching Filtering</h3>
              <p>
                To ensure that users can look for really specific things, I
                designed a search filtering function that uses a verbose, search
                combination builder design.
              </p>
              <p>
                This search filter combination builder is also present in
                formulations, a feature that stores all formulations that they
                have created so far and its relevant metadata.
              </p>
              <div className="py-8 md:py-16 lg:py-24 text-center md:text-left md:-ml-12 lg:-ml-20">
                <Image
                  width={1440}
                  height={1029}
                  layout="responsive"
                  src="/assets/connect-search-concept-4.png"
                  alt="Concept of displaying results."
                />
                <p className="text-sm italic py-4">
                  Concept design by me. Notice how users can also search for
                  information within a component itself, so it goes beyond
                  simple keyword matching.
                </p>
              </div>
            </section>
            <section className="flex flex-col gap-4">
              <h3 className="font-bold text-xl">
                Know what you’re searching for, know what could be searched for
              </h3>
              <p>
                Users need to make a decision as they are searching. We wanted
                to ensure that they have all the information they required, from
                context to direct results of their search. As such, we made the
                search result more robust to include:
              </p>
              <ol>
                <li>1. Where the search results came from</li>
                <li>2. Where the keyword matching results came from</li>
                <li>
                  3. Suggested searches based on the components they usually
                  searched for
                </li>
                <li>4. Predicted search results </li>
                <li>
                  5. Allowing users to search for strings, numbers, and other
                  data within components themselves (e.g. which project is owned
                  by &quot;ABC&quot;?)
                </li>
              </ol>
              <div className="py-8 md:py-16 lg:py-24 text-center md:text-left md:-ml-12 lg:-ml-20">
                <Image
                  width={1600}
                  height={900}
                  layout="responsive"
                  src="/assets/connect-search-concept-3.png"
                  alt="Concept of displaying results."
                />
                <p className="text-sm italic py-4">
                  Concept design by me. Notice how users can also search for
                  information within a component itself, so it goes beyond
                  simple keyword matching.
                </p>
              </div>
            </section>
          </section>
        </article>

        {/* From Disconnected to Interconnected */}
        <article className="flex flex-col gap-4">
          <h3 className="font-bold text-xl">
            From Disconnected to Interconnected
          </h3>
          <h2 className="text-3xl font-light">
            Communicating information in a more interconnected way
          </h2>
          <p>
            A critical part of the project was to ensure that users worked with
            information that they needed without having to navigate to too many
            places. Users can glean from contextual understanding that they can
            find XYZ at location ABC, rather than having to leave rage clicks
            and drive bounce rate. The existing Labs app didn’t do a good job of
            supporting that, and relied mostly on the users learning to be
            familiar with how the platform was made.
          </p>
          <p>
            During our initial discovery work with researchers, we observed that
            they all have some sort of inclination to work with tools that they
            are already familiar with. This gave us a good direction: we simply
            needed to ease the learning curve by helping them get familiarised
            with something that was built on similar mental models as the tools
            they were already familiar with.
          </p>
          <p>
            We found structural patterns that allowed us to based our mental
            model on:
          </p>
          <ol>
            <li>
              1. I want to work with information both in a shallow or deep way
            </li>
            <li>
              2. I want to see as much information as I need at any given time
            </li>
          </ol>
          <section className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">ConnectBoard</h3>
            <p>
              ConnectBoard is a project management board that mirrors how
              researchers would store data, organise data, and manage data in
              the lab, whether it be digital or physical. I defined what
              ConnectBoard required in order for it to fully address the core
              use cases of a project management board for a researcher. To do
              so, I spoke with the sales team and some researchers to understand
              what are the main components they may require:
            </p>
            <ol>
              <li>1. Inspect progress</li>
              <li>2. Understand the project origins, details</li>
              <li>3. Document results and data</li>
              <li>4. Centralise information</li>
            </ol>
            <p>
              The main theme that emerged was “centralisation”. Given that we
              had a clear vision to go for, ConnectBoard quickly came to life
              after two weeks of debating and sprint work.
            </p>
            <div className="py-8 md:py-16 lg:py-24 text-center md:text-left md:-ml-12 lg:-ml-20">
              <Image
                width={1440}
                height={1024}
                layout="responsive"
                src="/assets/connect-projects-select-ui-3.png"
                alt="Designing the project management board."
              />
              <p className="text-sm italic py-4">
                Designing the project management board.
              </p>
            </div>
            <div className="py-8 md:py-16 lg:py-24 text-center md:text-left md:-ml-12 lg:-ml-20">
              <Image
                width={1440}
                height={1024}
                layout="responsive"
                src="/assets/connect-projects-select-ui-1.png"
                alt="Centralising files, reports, and experiment information in a single place."
              />
              <p className="text-sm italic py-4">
                Centralising files, reports, and experiment information in a
                single place.
              </p>
            </div>
            <div className="py-8 md:py-16 lg:py-24 text-center md:text-left md:-ml-12 lg:-ml-20">
              <Image
                width={1440}
                height={1024}
                layout="responsive"
                src="/assets/connect-projects-select-ui-2.png"
                alt="Gantt chart of project."
              />
              <p className="text-sm italic py-4">
                Gantt chart/Project timeline. This was one of the most difficult
                parts to nail down in this design.
              </p>
            </div>
          </section>
        </article>

        {/* From Immutable to Flexible */}
        <article className="flex flex-col gap-4">
          <h3 className="font-bold text-xl">From Immutable to Flexible</h3>
          <h2 className="text-3xl font-light">
            Mapping workflows in multiple modular ways
          </h2>
          <p>
            Customer requests often talked about how they would love to have
            something on the platform that “accommodated” to something extra. We
            drew a pattern from those requests and realised that they simply
            wanted to find a way to map their workflow into the platform. This
            was not something we anticipated before.
          </p>
          <p>
            Since we could not afford to make minor backend changes whenever
            there was a new form field, new property, or new datatype, we
            decided to create something more robust that can help users do it
            themselves.
          </p>
          <p>
            However, workflows didn’t just mean adding a new text property to a
            project. To really understand this, I sat with the materials team to
            understand lab operations and combined this with academia. Lab
            operations comprise of:
          </p>
          <ol>
            <li>1. Stages of experiments</li>
            <li>2. Protocols of an experiment</li>
            <li>3. Team members working on an experiment/project</li>
            <li>4. Details of an experiment/project</li>
          </ol>
          <div className="py-8 md:py-16 lg:py-24 text-center md:text-left md:-ml-12 lg:-ml-20">
            <Image
              width={1440}
              height={1024}
              layout="responsive"
              src="/assets/connect-project-template.png"
              alt="Templating and custom fields."
            />
            <p className="text-sm italic py-4">
              Creating a project can now encompass different datatypes.
            </p>
          </div>
          <p>
            I also designed a way for users to customise stages between an
            experiment, which is heavily inspired by how branching and version
            control works. A use case here would be researchers wanting to
            process the same ingredient in two different ways to compare the
            resultant properties.
          </p>
          <div className="py-8 md:py-16 lg:py-24 text-center md:text-left md:-ml-12 lg:-ml-20">
            <Image
              width={1440}
              height={1024}
              layout="responsive"
              src="/assets/connect-WO-customise.png"
              alt="Flowchart to customise work order stages"
            />
            <p className="text-sm italic py-4">
              Customising stages of experiments to accommodate for unique
              projects.
            </p>
          </div>
        </article>

        {/* The Impact */}
        <article className="flex flex-col gap-4">
          <h3 className="font-bold text-xl">The Impact</h3>
          <h2 className="text-3xl font-light">
            A minimum desirable product in 6 weeks{" "}
          </h2>
          <p>
            Polymerize Connect is currently in alpha testing stage, and is being
            prepared for distribution, marketing over the next quarter.
            Considering the timeline, ideating, creating, and designing with
            limited information is impressive. This challenge was further made
            worse when the design team had to design in parallel with
            engineering.
          </p>
          {/* Reflection */}
          <article className="flex flex-col gap-4">
            <h3 className="font-bold text-xl">Reflection</h3>
            <p>
              If given more time, Polymerize Connect could’ve been launched in
              beta rather than alpha. There would be less assumptions to test
              even after launch, and it would also give the design team some
              breathing space to do A/B testing, qualtiative user research, and
              concept testing. We had less time to spend on research and more
              time on execution, so we had to make do with working with
              secondary data a lot.
            </p>
            <p>
              I believe Connect can eventually evolve into a full-fledged ELN
              and LIMS. I would’ve changed my approach to this challenge if
              given more time, and focused on one core value proposition of
              mapping workflows rather than anything else. Thankfully, there
              were many backend code that we could reuse from Labs, but this
              means that Connect will also inherit technical debt from Labs
              despite being half-built from scratch.
            </p>
            <p>
              More testing would’ve been desirable as well, and working a lot
              with uncertain meant that the design team had to rely a lot on
              intuition, the vision, and the product goals to prioritise
              features and assumptions.
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
