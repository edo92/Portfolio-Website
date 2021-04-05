import React from "react"

import { Page } from "../components/SharedStyles"
import PageMetadata from "../components/PageMetadata"

const HomePage = () => {
  return (
    <Page>
      <PageMetadata
        title={"page-index-meta-title"}
        description={"page-index-meta-description"}
      />
    </Page>
  )
}

export default HomePage
