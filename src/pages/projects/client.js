import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import PageMetadata from "../../components/PageMetadata"
import * as content from "../../content/projects/content"
import ActionCard from "../../components/ActionCard"
import { uiux } from "../../content/projects/projectlist"

import {
  CardContainer,
  Content,
  Page,
  H2,
  GrayContainer,
} from "../../components/SharedStyles"

const StyledCardContainer = styled(CardContainer)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin: 0rem;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-template-columns: 1fr;
  }
`

const SectionIntro = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0 1rem 0;
`

const StyledCard = styled(ActionCard)`
  min-width: 480px;
  margin: 1rem;
  border-radius: 2px;
  border: 1px solid ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.background};
  box-shadow: ${props => props.theme.colors.cardBoxShadow};
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    margin: 0;
    min-width: min(100%, 240px);
  }
`

const ProjectsClientSide = ({ data }) => {
  return (
    <Page>
      <PageMetadata
        title={content.metadata.title}
        description={content.metadata.description}
      />
      <GrayContainer>
        <Content id="snippets-projects">
          <SectionIntro>
            <H2>Client Side Applications</H2>
          </SectionIntro>
          <StyledCardContainer>
            {uiux.projects(data).map((card, idx) => (
              <StyledCard
                key={idx}
                title={card.title}
                description={card.description}
                to={card.to}
                image={card.image}
                alt={card.alt}
              />
            ))}
          </StyledCardContainer>
        </Content>
      </GrayContainer>
    </Page>
  )
}

export default ProjectsClientSide

export const query = graphql`
  query {
    wifi: file(relativePath: { eq: "projects/wifi.png" }) {
      childImageSharp {
        fixed(width: 900) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    chatApp: file(relativePath: { eq: "projects/chatapp.png" }) {
      childImageSharp {
        fixed(width: 900) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    portfolio: file(relativePath: { eq: "projects/portfolio.png" }) {
      childImageSharp {
        fixed(width: 900) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    paymentUi: file(relativePath: { eq: "projects/paymentUi.png" }) {
      childImageSharp {
        fixed(width: 900) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    exoui: file(relativePath: { eq: "projects/exoui.png" }) {
      childImageSharp {
        fixed(width: 900) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`