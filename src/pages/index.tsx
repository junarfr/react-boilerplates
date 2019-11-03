import React from "react"
import { Typography } from "@material-ui/core"
import { useStaticQuery, graphql, Link } from "gatsby"

import { ThemeProvider } from "@material-ui/core/styles"
import { myTheme } from "../style/my-theme"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteDescriptionQuery {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={myTheme}>
      <Typography variant="h4">{data.site.siteMetadata.description}</Typography>
      <Link to="/dashboard">Go back to the homepage</Link>
    </ThemeProvider>
  )
}

export default IndexPage
