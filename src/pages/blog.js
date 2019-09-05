import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from "./blog.module.scss"
import Head from "../components/ReactHelmet"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h2 className={blogStyles.blogTitle}>Blog</h2>
      <p>Here are some of the things I have been working on recently</p>
      <hr></hr>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(index => {
          return (
            <li className={blogStyles.post}>
              <h2>
                <Link to={`/blog/${index.node.slug}`}>
                  {index.node.title}
                  <p>{index.node.publishedDate}</p>
                </Link>
              </h2>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
