import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import portfolioStyles from "./portfolio.module.scss"
import Head from "../components/ReactHelmet"
import ProjectCard from "../components/ProjectCard"

const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProjectPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            projectTitle
            slug
            shortHook
            publishedDate(formatString: "MMMM Do, YYYY")
            mainProjectImage {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Portfolio" />
      <h2 className={portfolioStyles.projects}>Projects</h2>
      <p>Here are some of the things I have been working on recently</p>
      <hr></hr>
      <ol className={portfolioStyles.posts}>
        {data.allContentfulProjectPost.edges.map(index => {
          return (
            <li className={portfolioStyles.posts}>
              <ProjectCard project={index} />
            </li>
          )
          // return (
          //   <li className={portfolioStyles.post}>
          //     <div>
          //       <h2>
          //         <Link to={`/project/${index.node.slug}`}>
          //           {index.node.projectTitle}
          //           <p>{index.node.publishedDate}</p>
          //         </Link>
          //       </h2>
          //       <img
          //         className={portfolioStyles.projectImg}
          //         src={index.node.mainProjectImage.file.url}
          //         alt="img"
          //       ></img>
          //     </div>
          //   </li>
          // )
        })}
      </ol>
    </Layout>
  )
}

export default PortfolioPage
