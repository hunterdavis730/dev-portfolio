import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/ReactHelmet"
import HomeCard from "../components/HomeCard"

import homeStyles from "./home.module.scss"

const IndexPage = () => {
  return (
    <div className={homeStyles.background}>
      <Layout header="home">
        <Head title="Home" />
        <div className={homeStyles.container}>
          <HomeCard homeHeader="Hunter Davis" />
        </div>
      </Layout>
    </div>
  )
}

export default IndexPage
