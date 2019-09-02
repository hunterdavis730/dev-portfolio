import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/ReactHelmet"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Page</h1>
      <p>
        Click <Link to="/contact">here to contact me</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
