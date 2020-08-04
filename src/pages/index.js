import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const BlogPost = ({node}) => {
  return (
    <li>
      <Link to={`blog/${node.slug}`}> {node.title} </Link>
    </li>
  )
}
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <ul>
      {data.allContentfulBlogPost.edges.map((edge) => <BlogPost node={edge.node} />)}
    </ul>
  </Layout>
)

export default IndexPage

export const pageQyery = graphql`
  query pageQuery {
    allContentfulBlogPost {
      edges {
        node {
          title
          slug
          article {
            article
          }
        }
      }
    }
  }
`
