exports.createPages = async ({ actions, graphql, reporter }) => {
  const contenfulResult = await graphql(`
                    
    query {
      allContentfulBlogPost {
        nodes {
          slug
        }
      }
    }
  `
  );
  if (contenfulResult.error) {
    reporter.panic('failed to create posts', contenfulResult.errors);
  }
  const contenfulPosts = contenfulResult.data.allContentfulBlogPost.nodes;
  contenfulPosts.forEach(post => {
    actions.createPage({
      path: post.slug,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: post.slug,
      }
    });
  });
};