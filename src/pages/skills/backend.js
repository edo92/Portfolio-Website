import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Text from "../../components/Text"
import ButtonLink from "../../components/ButtonLink"
import DataProductCard from "../../components/DataProductCard"
import BackendSkillsContent from "../../content/skills/backend/backendSkills"
import { skillsList } from "../../content/skills/backend/skillsList"

import { Page, Content, Divider } from "../../components/SharedStyles"

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  justify-content: center;
  @media (max-width: ${props => props.theme.breakpoints.xl}) {
    max-width: 100vw;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    flex-direction: column-reverse;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    flex-direction: column-reverse;
    margin-bottom: 0rem;
  }
`

const Hero = styled(Img)`
  position: absolute !important;
  z-index: -1;
  width: 100%;
  max-width: 1440px;
  @media (max-width: ${props => props.theme.breakpoints.xl}) {
    max-width: 100vw;
  }
  min-height: 300px;
  max-height: 400px;
  background-size: cover;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6rem;
  text-align: center;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    margin: 2rem;
  }
`

const Subtitle = styled.div`
  font-size: 20px;
  line-height: 140%;
  text-align: center;
  color: ${props => props.theme.colors.text200};
`

const SubtitleTwo = styled.div`
  font-size: 20px;
  line-height: 140%;
  margin-bottom: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.text300};
`

const Title = styled.h1`
  padding-bottom: 2rem;
`

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
  gap: 2rem;
`

const CardGridR3 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 340px), 1fr));
  gap: 2rem;
`

const StyledCardGrid = styled(CardGrid)`
  margin-bottom: 4rem;
`

const StyledCardGridR3 = styled(CardGridR3)`
  margin-bottom: 4rem;
`

const BackendSkillsPage = ({ data }) => {
  return (
    <Page>
      <HeroContainer>
        <Hero
          fluid={data.hero.childImageSharp.fluid}
          alt={"backend-skills-hero"}
          loading="eager"
        />
        <Header>
          <h1>
            <Text id="backend-skills-showcase" />
          </h1>
          <Subtitle>
            <Text id="languages-frameworks" />
          </Subtitle>
          <SubtitleTwo>
            <Text id="cloud-infrastructure" />
          </SubtitleTwo>
          <Subtitle>
            <Text id="databases" />
          </Subtitle>
          <SubtitleTwo>
            <Text id="CI CD" />
          </SubtitleTwo>
          <ButtonLink to="https://github.com">
            <Text id="check-out-latest-projects" />
          </ButtonLink>
        </Header>
      </HeroContainer>
      <Content>
        <Divider />
        <Title>Languages {"&"} Frameworks</Title>
        <StyledCardGrid>
          {skillsList.languages(data).map((dapp, idx) => {
            return (
              <DataProductCard
                key={idx}
                background={dapp.background}
                url={dapp.url}
                alt={dapp.alt}
                image={dapp.image}
                name={dapp.name}
                data={dapp.data}
                description={dapp.description}
              />
            )
          })}
        </StyledCardGrid>
      </Content>

      <Content>
        <Divider />
        <Title>Cloud Infrastructure</Title>
        <StyledCardGridR3>
          {skillsList.cloud(data).map((dapp, idx) => {
            return (
              <DataProductCard
                key={idx}
                background={dapp.background}
                url={dapp.url}
                alt={dapp.alt}
                image={dapp.image}
                name={dapp.name}
                data={dapp.data}
                description={dapp.description}
              />
            )
          })}
        </StyledCardGridR3>
      </Content>

      <Content>
        <Divider />
        <Title>Databases</Title>
        <StyledCardGrid>
          {skillsList.databases(data).map((dapp, idx) => {
            return (
              <DataProductCard
                key={idx}
                background={dapp.background}
                url={dapp.url}
                alt={dapp.alt}
                image={dapp.image}
                name={dapp.name}
                data={dapp.data}
                description={dapp.description}
              />
            )
          })}
        </StyledCardGrid>
      </Content>

      <Content>
        <Divider />
        <Title>CI CD & Pipeline</Title>
        <StyledCardGrid>
          {skillsList.cicd(data).map((dapp, idx) => {
            return (
              <DataProductCard
                key={idx}
                background={dapp.background}
                url={dapp.url}
                alt={dapp.alt}
                image={dapp.image}
                name={dapp.name}
                data={dapp.data}
                description={dapp.description}
              />
            )
          })}
        </StyledCardGrid>
      </Content>
      <Divider />
      <BackendSkillsContent />
      <Divider />
    </Page>
  )
}

export default BackendSkillsPage

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "skills/backend/backend-hero.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jslogo: file(relativePath: { eq: "skills/backend/jslogo.png" }) {
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    nodelogo: file(relativePath: { eq: "skills/backend/nodelogo.png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    pythonlogo: file(relativePath: { eq: "skills/backend/pythonlogo.png" }) {
      childImageSharp {
        fixed(width: 120) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    djangologo: file(relativePath: { eq: "skills/backend/djangologo.png" }) {
      childImageSharp {
        fixed(width: 160) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    awslogo: file(relativePath: { eq: "skills/backend/awslogo.png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    azurelogo: file(relativePath: { eq: "skills/backend/azurelogo.png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    gcplogo: file(relativePath: { eq: "skills/backend/gcplogo.png" }) {
      childImageSharp {
        fixed(width: 210) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    mongologo: file(relativePath: { eq: "skills/backend/mongologo.png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    redislogo: file(relativePath: { eq: "skills/backend/redislogo.png" }) {
      childImageSharp {
        fixed(width: 110) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    mysqllogo: file(relativePath: { eq: "skills/backend/mysqllogo.png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    marinadblogo: file(
      relativePath: { eq: "skills/backend/marinadblogo.png" }
    ) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    awscodebuildlogo: file(
      relativePath: { eq: "skills/backend/awscodebuildlogo.png" }
    ) {
      childImageSharp {
        fixed(width: 210) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    azuredevopslogo: file(
      relativePath: { eq: "skills/backend/azuredevopslogo.png" }
    ) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    circlecilogo: file(
      relativePath: { eq: "skills/backend/circlecilogo.png" }
    ) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    jenkinslogo: file(relativePath: { eq: "skills/backend/jenkinslogo.png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
