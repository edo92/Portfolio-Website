import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import * as content from "../content/home/homeContent"
import PageMetadata from "../components/PageMetadata"
import PageHero from "../components/PageHero"
import ActionCard from "../components/ActionCard"
import Features from "../components/Features"

import Text from "../components/Text"
import {
  Page,
  Content,
  CardContainer,
  H2,
  Divider,
} from "../components/SharedStyles"

const ActionIntro = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  margin-top: 3rem;
`

const ActionCardContainer = styled(CardContainer)`
  justify-content: center;
  margin-bottom: 3rem;
`

const FeaturesContainer = styled.div`
  padding-top: 2rem;
`

const HomePage = ({ data }) => {
  return (
    <Page>
      <PageMetadata
        title={"page-index-meta-title"}
        description={"page-index-meta-description"}
      />
      <PageHero content={content.heroContent(data)} />
      <Content>
        <ActionIntro>
          <H2>
            <Text id="Skills" />
          </H2>
        </ActionIntro>
        <ActionCardContainer>
          {content.skillsList(data).map((action, idx) => {
            return (
              <ActionCard
                key={idx}
                to={action.to}
                alt={action.alt}
                image={action.image}
                title={action.title}
                description={action.description}
              />
            )
          })}
        </ActionCardContainer>
      </Content>
      <Content>
        <Divider />
        <FeaturesContainer>
          <Features gridItems={content.features.row1} />
        </FeaturesContainer>
      </Content>
    </Page>
  )
}

export default HomePage

export const skillsListImgs = graphql`
  fragment skillsListImgs on File {
    childImageSharp {
      fixed(height: 600) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "home/home-hero.png" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    backendLogo: file(relativePath: { eq: "backend/shuffled.png" }) {
      ...skillsListImgs
    }
    frontendLogo: file(relativePath: { eq: "frontend/frontend-hero.png" }) {
      ...skillsListImgs
    }
    mobileLogo: file(relativePath: { eq: "mobile/mobile-hero.png" }) {
      ...skillsListImgs
    }
  }
`
