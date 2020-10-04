const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, `src`), `node_modules`]
    }
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/BlogPost/index.tsx`);
  const projectPostTemplate = path.resolve(`src/templates/ProjectPost/index.tsx`);

  const res = await graphql(`
    query {
      blogs: allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "blog" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
      projects: allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "projects" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  const blogs = res.data.blogs.edges;
  const projects = res.data.projects.edges;

  blogs.forEach((blog, index) => {
    const previous = index === blogs.length - 1 ? null : blogs[index + 1].node;
    const next = index === 0 ? null : blogs[index - 1].node;

    createPage({
      path: `${blog.node.fields.slug}`,
      component: blogPostTemplate,
      context: {
        slug: `${blog.node.fields.slug}`,
        previous,
        next
      }
    });
  });

  projects.forEach((project, index) => {
    const previous = index === projects.length - 1 ? null : projects[index + 1].node;
    const next = index === 0 ? null : projects[index - 1].node;

    createPage({
      path: `${project.node.fields.slug}`,
      component: projectPostTemplate,
      context: {
        slug: `${project.node.fields.slug}`,
        previous,
        next
      }
    });
  });
};
