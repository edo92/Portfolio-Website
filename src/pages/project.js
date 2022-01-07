import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import * as content from "../content/projects"
import ActionCard from "../components/ActionCard"
import PageMetadata from "../components/PageMetadata"

import {
  CardContainer,
  Content,
  Page,
  H2,
  GrayContainer,
} from "../components/SharedStyles"

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
  padding: 3px;
  border-radius: 2px;
  border: 1px solid ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.background};
  box-shadow: ${props => props.theme.colors.cardBoxShadow};
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    margin: 0;
    min-width: min(100%, 240px);
  }
`

const ProjectShowcase = ({ data }) => {
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
            {content.projectlist.projects(data).map((card, idx) => (
              <StyledCard
                key={idx}
                height={"365px"}
                to={card.to}
                alt={card.alt}
                image={card.image}
                title={card.title}
                description={card.description}
              />
            ))}
          </StyledCardContainer>
        </Content>
      </GrayContainer>
    </Page>
  )
}

export default ProjectShowcase

export const query = graphql`
  query {
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

    awsStaticWeb: file(relativePath: { eq: "projects/aws-static-web.png" }) {
      childImageSharp {
        fixed(width: 900) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ecsService: file(relativePath: { eq: "projects/ecs-bluegreen.png" }) {
      childImageSharp {
        fixed(width: 900) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    azureCognitive: file(relativePath: { eq: "projects/azure-cognitive.png" }) {
      childImageSharp {
        fixed(width: 900) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    cognito_signin: file(relativePath: { eq: "projects/cognito_signin.png" }) {
      childImageSharp {
        fixed(width: 900) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
