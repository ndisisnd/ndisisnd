import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

function ComingSoon() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Andy Chan | Coming Soon | Product Designer </title>
      </Helmet>
      <h1 className="text-5xl font-bold py-12">I'm working on it!</h1>
      <section className="flex flex-col">
        <p>It's currently under construction, so do hang on for a bit.</p>
        <p>
          Need to reach out to me? You can always contact me at
          ndisisnd[at]gmail[dot]com.
        </p>
      </section>
    </Layout>
  )
}

export default ComingSoon
