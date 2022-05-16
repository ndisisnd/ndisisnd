import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import IndexSection from "../components/indexSection"
import "../styles/reset.css"
import "../styles/global.css"

export default function Home() {
  return (
    <div>
      <Layout>
        <StaticImage className="-mx-6 -my-6" src="../images/Hero.png" />
        <div className="mt-6 py-8 flex flex-col gap-4 ">
          <h3 className="text-4xl font-bold">Hey there!</h3>
          <div className="flex flex-col gap-4 text-b-body">
            <p>It’s Andy from Singapore! 🇸🇬</p>
            <p>
              I’m a self-taught Product Designer, Creator, and overall gym
              junkie. I love building stuff, and helping others to be greater
              designers through my raw, unfiltered content. I also used to
              manage products and lead product operations.{" "}
            </p>
            <p>
              Today, I’m a product designer at foodpanda building great
              experiences for the app’s native delivery subscription service. ✨
            </p>
          </div>
        </div>
        <IndexSection header="Selected Works" body="Works since 2020." />
      </Layout>
    </div>
  )
}
