import React, { useState, useEffect } from "react"
import styled, { ThemeProvider } from "styled-components"

import { lightTheme, darkTheme, GlobalStyle } from "../theme"
import PropTypes from "prop-types"
import "../styles/layout.css"

import Navigation from "./Navigation"

const ContentContainer = styled.div`
  position: relative;
  margin: 0px auto;
  min-height: 100vh;
  display: flex;
  flex-flow: column;

  @media (min-width: ${props => props.theme.breakpoints.l}) {
    max-width: ${props => props.theme.variables.maxPageWidth};
  }
`

const MainContainer = styled.div`
  display: flex;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    flex-direction: column;
  }
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Main = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  overflow: visible;
  width: 100%;
  flex-grow: 1;
`

const Layout = props => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const theme = isDarkTheme ? darkTheme : lightTheme

  useEffect(() => {
    if (localStorage && localStorage.getItem("dark-theme") !== null) {
      setIsDarkTheme(localStorage.getItem("dark-theme") === "true")
    } else {
      setIsDarkTheme(window.matchMedia("(prefers-color-scheme: dark)").matches)
    }
  }, [])

  const handleThemeChange = () => {
    setIsDarkTheme(!isDarkTheme)
    if (localStorage) {
      localStorage.setItem("dark-theme", !isDarkTheme)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle isDarkTheme={isDarkTheme} />
      <ContentContainer>
        <MainContainer>
          <MainContent>
            <Navigation
              handleThemeChange={handleThemeChange}
              isDarkTheme={isDarkTheme}
              path={props.path}
            />
            <Main>{React.cloneElement(props.children, { isDarkTheme })}</Main>
          </MainContent>
        </MainContainer>
      </ContentContainer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
