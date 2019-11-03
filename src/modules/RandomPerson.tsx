import React, { useState, useEffect } from "react"
import { RouteComponentProps } from "@reach/router"
import { ThemeProvider } from "@material-ui/styles"
import { myTheme } from "../style/my-theme"
import Layout from "../components/layout"

interface Props
  extends RouteComponentProps<{
    results: string
  }> {}

export const RandomPerson: React.FC<Props> = ({ results = 1 }) => {
  const [person, setPerson] = useState()
  useEffect(() => {
    fetch(`https://randomuser.me/api?results=${results}`)
      .then(x => x.json())
      .then(x => setPerson(x))
  }, [results])

  return (
    <ThemeProvider theme={myTheme}>
      <Layout>
        <pre>{JSON.stringify(person, null, 2)}</pre>
      </Layout>
    </ThemeProvider>
  )
}
