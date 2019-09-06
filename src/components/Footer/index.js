import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "./footer.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
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
        <div>
          <a href="https://github.com/hunterdavis730" target="_blank">
            <FontAwesomeIcon
              className={footerStyles.footerIcon}
              icon={faGithub}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/hunter-davis-ba2008178/"
            target="_blank"
          >
            <FontAwesomeIcon
              className={footerStyles.footerIcon}
              icon={faLinkedinIn}
            />
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer
