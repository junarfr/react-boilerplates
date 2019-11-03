/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { CssBaseline } from "@material-ui/core"

import SideBar from "./layout/sideBar"
import { myStyles } from "../style/my-styles"

const Layout: React.FC = ({ children }) => {
  const classes = myStyles()

  return (
    <>
      {/* <CssBaseline /> */}
      <SideBar />
      <main className={classes.content}>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
