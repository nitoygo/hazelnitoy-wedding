module.exports = ({ contentPath = "data" }) => ({
  siteMetadata: {
    title: "Hazel & Nitoy",
    description: "Hazel & Nitoy Wedding Invitation",
    author: "Hazel & Nitoy"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: contentPath
      }
    },
    {
      resolve: "gatsby-transformer-json",
      options: {
        typeName: "Event"
      }
    }
  ]
});
