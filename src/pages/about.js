import React from "react"
import styled from "styled-components"

import content from "../content/about/about.json"
import Text from "../components/Text"
import Callout from "../components/Callout"
import ButtonLink from "../components/ButtonLink"
import Icon from "../components/Icon"
import Link from "../components/Link"

import {
  Page,
  Content,
  Column,
  Divider,
  GrayContainer,
  Input,
  TextArea,
} from "../components/SharedStyles"

const H1 = styled.h1`
  font-weight: 700; // This overrides base h1 styling of 400
  font-size: 2rem;
  margin: 0;
  text-align: center;
  padding: 3.5rem 0;
`

const TwoColumnContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const IntroColumn = styled(Column)`
  margin-top: 8rem;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    margin-top: 0;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    margin-right: 0;
  }
`

const Subtitle = styled.div`
  font-size: 20px;
  line-height: 140%;
  color: ${props => props.theme.colors.text200};
`

const SubtitleWithMargin = styled(Subtitle)`
  margin-bottom: 1.5rem;
`

const StyledCallout = styled(Callout)`
  min-height: 100%;
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    flex: 1 1 416px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    margin-right: 0;
    margin-left: 0;
  }
`

const ButtonLinkCustom = styled(ButtonLink)`
  margin-right: 1rem;
`

const SocialIcon = styled(Icon)`
  padding: 1px;
  position: absolute;
  color: ${props => props.theme.colors.primary};
`

const GradientContainer = styled(GrayContainer)`
  background: linear-gradient(
    49.21deg,
    rgba(127, 127, 213, 0.2) 19.87%,
    rgba(134, 168, 231, 0.2) 58.46%,
    rgba(145, 234, 228, 0.2) 97.05%
  );
  width: 100%;
  padding: 3rem 0;
`

const ContactForm = styled.form`
  padding: 1px;
  display: grid;
  justify-content: center;
  padding-bottom: 4rem;
`

const StyledInput = styled(Input)`
  margin: 5px 0;
`

const StyledTextArea = styled(TextArea)`
  width: 400px;
  height: 100px;
  margin: 5px 0;
`

const SubmitContact = styled.div`
  display: grid;
  cursor: pointer;
  margin: 0.8rem 0rem;
`

const AboutPage = () => {
  return (
    <Page>
      <Content>
        <TwoColumnContent>
          <IntroColumn>
            <h2>
              <Text id={content.about.name} />
            </h2>
            <SubtitleWithMargin>
              <Text id={content.about.title} />
            </SubtitleWithMargin>
            <p>
              <Text id={content.about.description} />
              <Link to={content.about.resumeLink}> Resume</Link>
            </p>
            <p>
              <Text id={content.about.conclusion} />
            </p>
          </IntroColumn>
          <StyledCallout
            title={content.contact.title}
            description={content.contact.description}
          >
            <div>
              <ButtonLinkCustom isSecondary={true} to="/about/#contact">
                <Text id="contact-me" />
              </ButtonLinkCustom>
              <Link to="linkedin.com/in/the-ej/">
                <SocialIcon name="linkedinGR" size="41" />
              </Link>
            </div>
          </StyledCallout>
        </TwoColumnContent>
      </Content>
      <Divider />
      <Content id="contact">
        <GradientContainer>
          <H1>Contact</H1>
          <ContactForm>
            <StyledInput placeholder="email" type="text" />
            <StyledInput maxLength="25" placeholder="name" type="text" />
            <StyledTextArea maxLength="120" placeholder="message" />
            <SubmitContact onClick={() => console.log("hello")}>
              <ButtonLink
                to="#"
                onClick={() => {
                  console.log("helloooo")
                }}
              >
                <Text id="Submit" />
              </ButtonLink>
            </SubmitContact>
          </ContactForm>
        </GradientContainer>
      </Content>
    </Page>
  )
}

export default AboutPage
