import React from "react"
import { Router as MyRouter } from "@reach/router"
import { RandomPerson } from "../../modules/RandomPerson"

const Router = () => {
  // const sample = ""
  return (
    <MyRouter>
      <RandomPerson path="/dashboard/cek-penulisan/:results" />
    </MyRouter>
  )
}

export default Router
