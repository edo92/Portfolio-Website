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
  GrayContainer,
} from "../components/SharedStyles"

const SectionIntro = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0 1rem 0;
`

const ActionCardContainer = styled(CardContainer)`
  justify-content: center;
  margin-bottom: 3rem;
`

const FeaturesContainer = styled.div`
  padding: 1rem 2rem;
  margin: 3rem 0;
`

const CalloutCardContainer = styled(CardContainer)`
  margin: 0;
  gap: 2rem;
`

const StyledCallout = styled(Callout)`
  flex: 1 1 424px;
  min-height: 100%;
  margin: 8rem 0rem 1rem 0rem;
`

const HomePage = ({ data }) => {
  return (
    <Page>
      <PageMetadata
        title={content.metadata.title}
        description={content.metadata.description}
      />
      <PageHero content={content.heroContent(data)} />
      <Content id="skills-section">
        <SectionIntro>
          <H2>Skills</H2>
        </SectionIntro>
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
      <Divider />
      <Content>
        <GrayContainer>
          <FeaturesContainer>
            <Features gridItems={content.features.row1} />
            <Features gridItems={content.features.row2} />
          </FeaturesContainer>
        </GrayContainer>
      </Content>
      <Divider />
      <Content>
        <SectionIntro>
          <H2>Projects</H2>
        </SectionIntro>
        <CalloutCardContainer>
          <StyledCallout
            image={data.projicon.childImageSharp.fixed}
            title={"Projects Showcase"}
            alt={"projects"}
            description={"Check out my personal projects"}
          >
            <div>
              <ButtonLink to="/project">
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
              <ButtonLink to="https://github.com/edo92">
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
    backendLogo: file(relativePath: { eq: "skills/backend/shuffled.png" }) {
      ...skillsListImgs
    }
    frontendLogo: file(
      relativePath: { eq: "skills/frontend/frontend-hero.png" }
    ) {
      ...skillsListImgs
    }
    mobileLogo: file(relativePath: { eq: "skills/mobile/mobile-hero.png" }) {
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
