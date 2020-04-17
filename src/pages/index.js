import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Jumbotron from '../components/jumbotron';
import SEO from '../components/seo';
import useContentfulPosts from '../hooks/use-contentful-posts';
export default () => {
  const posts = useContentfulPosts();
  return (
    <>
      <Layout>
        <SEO pageTitle="Homepage" pageDescription="Homepage Description"/>
        <Jumbotron />
        <h2 style={{textAlign: 'center'}}>My Blogs Posts</h2>
        {posts.map(post => (
          <article key={post.slug} className="post-preview">
            <h2>
              <Link to={post.slug}>
                {post.title}
              </Link>
            </h2>
            <p>{post.body}</p>
            <Link to={post.slug}>Read the article</Link>
          </article>
        ))}
      </Layout>
    </>
  );
};