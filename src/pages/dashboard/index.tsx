import React from "react"
import { Link } from "gatsby"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import { ThemeProvider } from "@material-ui/styles"
import { myTheme } from "../../style/my-theme"
import { Typography } from "@material-ui/core"

const SecondPage = () => (
  <ThemeProvider theme={myTheme}>
    <Layout>
      <SEO title="Dashboard" />
      <Typography variant="h4">Hi from the second pagel</Typography>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepagel</Link>
    </Layout>
  </ThemeProvider>
)

export default SecondPage
