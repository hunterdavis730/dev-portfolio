import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/ReactHelmet"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello</h1>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
