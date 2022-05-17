import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import TimelineBox from "../components/timelineBox"
import "../styles/reset.css"
import "../styles/global.css"
import Card from "../components/card"

export default function About() {
  const timeline = [
    {
      key: 1,
      header: "Graduated from Temasek Polytechnic",
      body: "Attained a Diploma in Mass Communications",
      date: "2018 Apr",
    },
    {
      key: 2,
      header: "First job in UI/UX",
      body: "Got my first internship as a UI/UX designer at a proptech startup",
      date: "2018 May",
    },
    {
      key: 3,
      header: "Served the nation",
      body: "Enlisted for the military in Singapore",
      date: "2018 - 2020",
    },
    {
      key: 4,
      header: "Second internship in UI/UX",
      body: "Solving traveller problems at Anywhr",
      date: "2020 Jul",
    },
    {
      key: 5,
      header: "Began my Bachelor's journey",
      body: "Enrolled into Goldsmith's BSc(Hons) Computer Science programme",
      date: "2020 Oct",
    },
    {
      key: 6,
      header: "First full-time role as a product designer",
      body: "Designing products for material scientists",
      date: "2021 Jul",
    },
    {
      key: 7,
      header: "Ventured into product management",
      body: "Helmed the role of a product manager at Polymerize",
      date: "2021 Sept",
    },
    {
      key: 8,
      header: "Became a product designer at foodpanda",
      body: "Designing a greater subscription experience for Pandapro",
      date: "2022 May",
    },
  ]

  return (
    <>
      <Layout>
        <StaticImage className="rounded-3xl" src="../images/Me.jpeg" />
        <div className="mt-6 py-8 flex flex-col gap-4 ">
          <h3 className="text-4xl font-bold">About me</h3>
          <div className="flex flex-col gap-4 text-b-body">
            <p>
              Hi there. I’m Andy, a self-taught Product Designer. I love
              designing things that make sense, building stuff on the regular,
              and creating content for everyone about design!
            </p>
            <p>
              I work as as product designer at foodpanda. I started my product
              design journey as early as 2018, and my total experience spans
              about 2 years thus far.
            </p>
            <p>
              I believe in demystifying the product design field and aspire to
              build products that can impact millions of people globally.
            </p>
          </div>
        </div>
        <div className="mt-6 py-8">
          <h3 className="text-4xl font-bold">Timeline</h3>
          {/* <TimelineBox date="2018" body="body" header="header"></TimelineBox> */}
          {timeline.map(el => {
            return (
              <TimelineBox
                key={el.key}
                body={el.body}
                date={el.date}
                header={el.header}
              />
            )
          })}
        </div>
        <div>
          <Card
            header="From a junior to a junior"
            CTA="Read my writings"
            subtitle="Join 100+ peeps who follow my weekly articles on Medium. You'll get to read up about
                      really raw perspectives of design!"
            route="https://ndisisnd.medium.com"
          />
        </div>
      </Layout>
    </>
  )
}
