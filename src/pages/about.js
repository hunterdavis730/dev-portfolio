import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/ReactHelmet"
import aboutStyling from "./about.module.scss"
import profilePic from "../images/IMG_0269.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAlignJustify,
  faCode,
  faBloggerB,
} from "@fortawesome/free-solid-svg-icons"

const AboutPage = () => {
  return (
    <div className={aboutStyling.wrapper}>
      <Layout header="home">
        <Head title="About" />
        <div className={aboutStyling.head}>
          <main>
            <div className={aboutStyling.profilePic}>
              <h2>Hunter Davis</h2>
              <div className={aboutStyling.navigation}>
                <FontAwesomeIcon
                  className={aboutStyling.navButton}
                  style={{
                    fontSize: "3rem",
                    margin: "1rem",
                    cursor: "pointer",
                  }}
                  icon={faAlignJustify}
                />
                {/* <div></div>
                <div></div>
                <div></div>
                <div></div> */}
              </div>
              <img src={profilePic}></img>
            </div>
          </main>
        </div>
        <div className={aboutStyling.center}>
          <div className={aboutStyling.infoCard}>
            <p>
              I am a full stack developer living in Utah. subtracting half of
              its width from its left margin
            </p>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default AboutPage
