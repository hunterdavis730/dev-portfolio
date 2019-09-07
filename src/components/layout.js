import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  if (props.header === "home") {
    return (
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>{props.children}</div>
      </div>
    )
  } else {
    return (
      <>
        <Navbar />
        <div className={layoutStyles.container}>
          <div className={layoutStyles.content}>{props.children}</div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Layout
