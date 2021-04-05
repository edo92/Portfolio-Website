import React from "react"
// import styled from "styled-components"
// import { graphql } from "gatsby"

import { Page } from "../components/SharedStyles"
import PageMetadata from "../components/PageMetadata"

const HomePage = () => {
  return (
    <Page>
      <PageMetadata
        title={"page-index-meta-title"}
        description={"page-index-meta-description"}
      />
      <h1>homePage</h1>
    </Page>
  )
}

export default HomePage
