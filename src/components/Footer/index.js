import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "./footer.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/fontawesome-svg-core"

const Footer = () => {
  console.log(faGithub)
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <>
      <hr></hr>
      <footer className={footerStyles.footer}>
        <p>Created by {data.site.siteMetadata.author}, © 2019</p>
        <FontAwesomeIcon icon={["fab", "fa-github"]} />
        <FontAwesomeIcon icon="fa-linkedin-in" />
      </footer>
    </>
  )
}

export default Footer
