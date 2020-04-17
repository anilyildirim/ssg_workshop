import React from 'react';
import Layout from '../components/layout';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import Image from 'gatsby-image';

export const query = graphql`
                    
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      body {
        body 
        childMdx {
          body
        }
      }
      heroImage {
        fluid(maxWidth: 1260, maxHeight: 400) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`
;
const PostTemplate = ({data: {contentfulBlogPost: post}}) => (
  <Layout>
    <Image fluid= {post.heroImage.fluid} alt="alt-text"/>   
    <h1>{post.title}</h1>
    <MDXRenderer>{post.body.childMdx.body}</MDXRenderer>
  </Layout>
);
export default PostTemplate
