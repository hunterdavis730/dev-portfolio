import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import portfolioStyles from "./portfolio.module.scss"
import Head from "../components/ReactHelmet"
import ProjectCard from "../components/ProjectCard"
import portfolioConfig from "../utils/portfolioConfig"
import { filter } from "minimatch"

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
            techUsed
          }
        }
      }
    }
  `)

  const [currentArray, setCurrentArray] = useState(
    data.allContentfulProjectPost.edges
  )
  const [term, setTerm] = useState("Handlebars.js")
  const [category, setCategory] = useState("Tech")

  useEffect(() => {
    switch (category) {
      case "Tech":
        filterSearch(data.allContentfulProjectPost.edges)
        return
    }
  }, [currentArray.length, term])

  const getTerm = string => {
    setTerm(string)
  }

  const filterSearch = data => {
    let filteredData = portfolioConfig.filterTerm(category, term, data)
    setCurrentArray(filteredData)
  }

  const termSearch = () => {}

  return (
    <Layout>
      <Head title="Portfolio" />
      <h2 className={portfolioStyles.projects}>Projects</h2>
      <p>Here are some of the things I have been working on recently</p>
      <hr></hr>
      <ol className={portfolioStyles.posts}>
        {currentArray.map(index => {
          return (
            <li className={portfolioStyles.post}>
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
