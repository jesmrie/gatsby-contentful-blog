import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default class BlogPost extends Component {
  render() {
    const {
      title,
      article,
    } = this.props.data.contentfulBlogPost;
    return (
      <Layout>
        <h1>{title}</h1>
        <p>{article.article}</p>
      </Layout>
    )
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired
}

export const pageQuery = graphql`
  query blogPostQuery($slug: String!){
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      slug
      article {
        article
      }
    }
  }
`
