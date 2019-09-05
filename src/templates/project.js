import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/ReactHelmet"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

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
    }
  }
`

const Project = props => {
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
      </div>
      <p>{props.data.contentfulProjectPost.publishedDate}</p>
      {documentToReactComponents(
        props.data.contentfulProjectPost.projectDescription.json,
        options
      )}
    </Layout>
  )
}

export default Project
