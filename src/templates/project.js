import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/ReactHelmet"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Button from "../components/CustomButtons/Button.js"
import projectStyles from "./project.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

export const query = graphql`
  query($slug: String!) {
    contentfulProjectPost(slug: { eq: $slug }) {
      projectTitle
      publishedDate(formatString: "MMMM Do, YYYY")
      mainProjectImage {
        file {
          url
        }
      }
      projectDescription {
        json
      }
      techUsed
      techLinks
    }
  }
`

const Project = props => {
  console.log(props)

  const splitData = data => {
    return data.split(", ")
  }

  const configTech = () => {
    let arr = []
    let tech = splitData(props.data.contentfulProjectPost.techUsed)
    let links = splitData(props.data.contentfulProjectPost.techLinks)
    for (var i = 0; i < tech.length; i++) {
      let data = {}
      data.techName = tech[i]
      data.link = links[i]
      arr.push(data)
    }
    return arr
  }

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <Head title={props.data.contentfulProjectPost.projectTitle} />
      <h1>{props.data.contentfulProjectPost.projectTitle}</h1>
      <div>
        <img
          src={props.data.contentfulProjectPost.mainProjectImage.file.url}
        ></img>
        <span>{props.data.contentfulProjectPost.publishedDate}</span>
        <div className={projectStyles.linkButtons}>
          <a href="https://github.com/hunterdavis730" target="_blank">
            <Button>
              Github
              <FontAwesomeIcon icon={faGithub} />
            </Button>
          </a>
          <a href="https://begoalden.herokuapp.com/" target="_blank">
            <Button>Visit Site </Button>
          </a>
        </div>
      </div>

      <div className={projectStyles.mainContent}>
        {documentToReactComponents(
          props.data.contentfulProjectPost.projectDescription.json,
          options
        )}
      </div>
      <div className={projectStyles.techUsed}>
        <h4>Tech Used</h4>
        <ul className={projectStyles.linkButtons}>
          {configTech().map(index => {
            return (
              <li>
                <a href={index.link} target="_blank">
                  <Button>{index.techName}</Button>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default Project
