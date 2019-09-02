const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")

  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach(index => {
    createPage({
      component: blogTemplate,
      path: `/blog/${index.node.slug}`,
      context: {
        slug: index.node.slug,
      },
    })
  })
}
