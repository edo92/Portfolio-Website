import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import * as content from "../content/home/homeContent"
import Callout from "../components/Callout"
import ActionCard from "../components/ActionCard"

import PageMetadata from "../components/PageMetadata"
import PageHero from "../components/PageHero"
import Features from "../components/Features"
import ButtonLink from "../components/ButtonLink"
import Text from "../components/Text"
import {
  Page,
  Content,
  CardContainer,
  H2,
  Divider,
  Section,
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

const CalloutCardContainer = styled(CardContainer)`
  margin: 0;
`

const StyledCallout = styled(Callout)`
  flex: 1 1 424px;
  min-height: 100%;
`

const HomePage = ({ data }) => {
  return (
    <Page>
      <PageMetadata
        title={"page-index-meta-title"}
        description={"page-index-meta-description"}
      />
      <PageHero content={content.heroContent(data)} />
      <Section id="skills-section">
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
      </Section>
      <Content>
        <Divider />
        <FeaturesContainer>
          <Features gridItems={content.features.row1} />
          <Features gridItems={content.features.row2} />
        </FeaturesContainer>
      </Content>
      <Content>
        <Divider />
        <H2>
          <Text id="projects" />
        </H2>
        <CalloutCardContainer>
          <StyledCallout
            image={data.projicon.childImageSharp.fixed}
            title={"Projects Showcase"}
            alt={"projects"}
            description={"Check out my personal projects"}
          >
            <div>
              <ButtonLink to="/projects/">
                <Text id="portfolio-projects" />
              </ButtonLink>
            </div>
          </StyledCallout>
          <StyledCallout
            image={data.octocat.childImageSharp.fixed}
            title={"Projects on GitHub"}
            alt={"github projects"}
            description={"Check out my projects on GitHub"}
          >
            <div>
              <ButtonLink to="/github-projects/">
                <Text id="gitHub-projects" />
              </ButtonLink>
            </div>
          </StyledCallout>
        </CalloutCardContainer>
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

export const calloutImage = graphql`
  fragment calloutImage on File {
    childImageSharp {
      fixed(height: 200) {
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
    projicon: file(relativePath: { eq: "home/projicon.png" }) {
      ...calloutImage
    }
    octocat: file(relativePath: { eq: "home/octocat.png" }) {
      ...calloutImage
    }
  }
`
