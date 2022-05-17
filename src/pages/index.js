import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import IndexSection from "../components/indexSection"
import "../styles/reset.css"
import "../styles/global.css"
import Card from "../components/card"

export default function Home() {
  return (
    <div>
      <Layout>
        <StaticImage
          className="-mx-6 -my-6 lg:-m-24 lg:-mx-40"
          src="../images/Hero.png"
        />
        <div className="mt-6 py-8 flex flex-col gap-4 lg:mt-48 lg:py-48">
          <div className="flex flex-row gap-24">
            <StaticImage
              className="rounded-3xl origin-center -rotate-6"
              src="../images/Me.jpeg"
            />
            <div className="flex flex-col gap-4 text-b-body">
              <h3 className="text-4xl font-bold">Hey there!</h3>
              <p>It’s Andy from Singapore! 🇸🇬</p>
              <p>
                I’m a self-taught Product Designer, Creator, and overall gym
                junkie. I love building stuff, and helping others to be greater
                designers through my raw, unfiltered content. I also used to
                manage products and lead product operations.{" "}
              </p>
              <p>
                Today, I’m a product designer at foodpanda building great
                experiences for the app’s native delivery subscription service.
                ✨
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12 pt-12 lg:gap-40">
          <section>
            <IndexSection header="Selected Works 🛠" body="Works since 2020." />
            <Card
              header="Coming Soon"
              route={false}
              subtitle="I'm still organising my case studies. Peep this page in a week!"
            />
          </section>
          <section>
            <IndexSection
              header="Resources 🎁"
              body="Free and CC resources for designers"
            />
            <Card
              header="Coming Soon"
              route={false}
              subtitle="Working on a portfolio presentation template on Figma, stay tuned! "
            />
          </section>
          <section>
            <IndexSection
              header="Projects 🚀"
              body="Side projects I've been working on!"
            />
            <Card
              header="Coming Soon"
              route={false}
              subtitle="Stay tuned for my first project in Q3 2022."
            />
          </section>
          <Card
            header="From a junior to a junior"
            CTA="Read my writings"
            subtitle="Join 100+ peeps who follow my weekly articles on Medium. You'll get to read up about
                      really raw perspectives of design!"
            route="https://ndisisnd.medium.com"
          />
        </div>
      </Layout>
    </div>
  )
}
