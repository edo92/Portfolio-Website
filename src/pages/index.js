import React from "react"
// import styled from "styled-components"
import { graphql } from "gatsby"

import { Page } from "../components/SharedStyles"
import PageMetadata from "../components/PageMetadata"
import PageHero from "../components/PageHero"
import * as content from "../content/home/homeContent"

const HomePage = ({ data }) => {
  return (
    <Page>
      <PageMetadata
        title={"page-index-meta-title"}
        description={"page-index-meta-description"}
      />
      <PageHero content={content.heroContent(data.hero)} />
    </Page>
  )
}

export default HomePage

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "home/home-hero.png" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
