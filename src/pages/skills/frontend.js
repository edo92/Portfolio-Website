import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import PageMetadata from "../../components/PageMetadata"
import ButtonLink from "../../components/ButtonLink"
import Text from "../../components/Text"
import Callout from "../../components/Callout"

import {
  Page,
  H2,
  Content,
  JustCenter,
  Divider,
  GrayContainer,
  CardContainer,
  LeftColumn,
} from "../../components/SharedStyles"

const Hero = styled(Img)`
  width: 100%;
  min-height: 540px;
  max-height: 550px;
  background-size: cover;
  background: no-repeat 50px;
  margin-bottom: 2rem;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding: 0 2rem;
`

const H1 = styled.h1`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 0rem;
  text-align: center;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 32px;
  }
`

const Description = styled.p`
  color: ${props => props.theme.colors.text200};
  max-width: 55ch;
  text-align: center;
  align-self: center;
  font-size: 20px;
  margin-top: 1rem;
`

const StyledGrayContainer = styled(GrayContainer)`
  box-shadow: inset 0px 0px 0px
    ${props => props.theme.colors.tableItemBoxShadow};
  padding: ;
  padding-bottom: 4rem;
  margin-top: 0;
  padding-top: 0.5rem;
`

const CalloutCardContainer = styled(CardContainer)`
  margin-top: 4rem;
`

const StyledCallout = styled(Callout)`
  flex: 1 1 424px;
  min-height: 100%;
`

const SectionIntro = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0 1rem 0;
`

const IntroRow = styled.div`
  padding-top: 1.1rem;
  padding-bottom: 1.1rem;
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  margin-top: 1rem;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    flex-direction: column-reverse;
    margin: 0rem;
  }
`

const IntroLeftColumn = styled(LeftColumn)`
  padding: 6rem;
  height: 100%;
  width: 100%;
  margin: 0;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    padding: 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding: 0rem;
  }
`

const Subtitle = styled.div`
  margin-bottom: 2rem;
  font-size: 20px;
  line-height: 140%;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 16px;
  }
`

const IntroImage = styled(Img)`
  width: 100%;
  background-size: cover;
  background: no-repeat 50px;
`

const ImageContainer = styled.div`
  background: "#F1FFFD";
  display: flex;
  height: 100%;
  width: 100%;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    width: 75%;
  }
`

const ExtraSpace = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
`

const DesignImage = styled(Img)`
  width: 70%;
  background-size: cover;
  background: no-repeat 50px;
`

const FrontendPage = props => {
  const { data } = props

  return (
    <Page>
      <PageMetadata
        title={"Skills Frontend"}
        description={"frontend-skills-showcase"}
      />
      <Hero
        fluid={data.hero.childImageSharp.fluid}
        alt={"skills-frontend-hero"}
        loading="eager"
      />
      <Header>
        <H1>
          <Text id="FrontEnd Development" />
        </H1>
        <Description>
          <Text id="Experianced building front end applications using React & Angular" />
        </Description>
        <ButtonLink isSecondary to="/skills/frontend/#frontend-skill-frontend">
          <Text id="Learn More" />
        </ButtonLink>
      </Header>

      <StyledGrayContainer>
        <Content id="frontend-skill-frontend">
          <JustCenter>
            <Divider />
          </JustCenter>
          <SectionIntro>
            <H2>Frameworks</H2>
          </SectionIntro>
          <CalloutCardContainer>
            <StyledCallout
              image={data.react.childImageSharp.fixed}
              title={"React"}
              alt={"react-framework"}
              description={
                "Building single page react applications and clean, reusable components"
              }
            >
              <div>
                <ButtonLink to="https://github.com/edo92">
                  <Text id="check-out-some-of-the-react-project" />
                </ButtonLink>
              </div>
            </StyledCallout>
            <StyledCallout
              image={data.angular.childImageSharp.fixed}
              title={"Angular"}
              alt={"angular-framework"}
              description={
                "Experianced with Custom Directives, Controllers, Services, filters module of AngularJS"
              }
            >
              <div>
                <ButtonLink to="https://github.com/edo92">
                  <Text id="check-out-some-of-the-angular-project" />
                </ButtonLink>
              </div>
            </StyledCallout>
          </CalloutCardContainer>
        </Content>
      </StyledGrayContainer>

      <Content>
        <SectionIntro>
          <H2>Design and Develop UI UX</H2>
        </SectionIntro>
        <IntroRow>
          <IntroLeftColumn>
            <H2>
              <Text id="Admin Dashboard Website Template" />
            </H2>
            <Subtitle>
              <Text id="Admin dashboard built using React, Redax, Antd libaries" />
            </Subtitle>
          </IntroLeftColumn>
          <ImageContainer>
            <IntroImage
              fluid={
                props.isDarkTheme
                  ? data.uiux1Dark.childImageSharp.fluid
                  : data.uiux1Dark.childImageSharp.fluid
              }
              alt={"skills-frontend-uiux"}
            />
          </ImageContainer>
        </IntroRow>
        <ExtraSpace>
          <Divider />
        </ExtraSpace>
        <IntroRow>
          <ImageContainer>
            <IntroImage
              fluid={
                props.isDarkTheme
                  ? data.uiux1Dark.childImageSharp.fluid
                  : data.uiux1Dark.childImageSharp.fluid
              }
              alt={"page-index-get-started-image-alt"}
            />
          </ImageContainer>
          <IntroLeftColumn>
            <H2>
              <Text id="Simple and Cool Web Template" />
            </H2>
            <Subtitle>
              <Text id="Cool Web template using React and Nextjs for ssr" />
            </Subtitle>
          </IntroLeftColumn>
        </IntroRow>
      </Content>
    </Page>
  )
}

export default FrontendPage

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "skills/frontend/frontend-hero.png" }) {
      childImageSharp {
        fluid(maxWidth: 1445) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    uiux1Dark: file(relativePath: { eq: "skills/frontend/uiux-image1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    react: file(relativePath: { eq: "skills/frontend/react-icon.png" }) {
      ...calloutImage
    }
    angular: file(relativePath: { eq: "skills/frontend/angular-icon.png" }) {
      ...calloutImage
    }
  }
`
