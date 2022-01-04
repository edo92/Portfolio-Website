import React, { useState } from "react"
import styled from "styled-components"
import { cloneDeep } from "lodash"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { NavLink } from "../../components/SharedStyles"
import NavDropdown from "./NavDropdown"
import MobileNavMenu from "./Mobile"
import links from "./links.json"
import Text from "../Text"
import Icon from "../Icon"
import Link from "../Link"

const NavContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
`

const StyledNav = styled.nav`
  height: ${props => props.theme.variables.navHeight};
  padding: 1rem 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.colors.background};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1); /* TODO use theme variable */
`

const NavContent = styled.div`
  display: flex;
  width: 100%;
  max-width: ${props => props.theme.breakpoints.xl};
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    align-items: center;
    justify-content: space-between;
  }
`

const InnerContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    display: none;
  }
`

const LeftItems = styled.ul`
  margin: 0;
  margin-left: 1.6rem;
  display: flex;
  align-items: center;
  list-style-type: none;
  list-style-image: none;
`

const RightItems = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavList = styled.li`
  white-space: nowrap;
  margin: 0;
  padding-right: 10px;
  padding-left: 10px;
`

const NavListItem = styled.div`
  white-space: nowrap;
  margin: 0;
  color: ${props => props.theme.colors.text};
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`

const ThemeToggle = styled.span`
  cursor: pointer;
  margin-left: 1rem;
  display: flex;
  align-items: center;
`

const NavIcon = styled(Icon)`
  fill: ${props => props.theme.colors.text};
`

const MobileIcons = styled.div`
  padding-top: 10px;
  display: none;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    display: flex;
  }
`

const NavMobileButton = styled.span`
  outline: none;
  margin-left: 1rem;
`

const MenuIcon = styled(Icon)`
  fill: ${props => props.theme.colors.text};
  display: none;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    display: block;
    cursor: pointer;
  }
`

const SubNav = styled.nav`
  padding: 1rem 2rem;
  box-sizing: border-box;
  display: flex;
  background: ${props => props.theme.colors.ednBackground};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  /* TODO sort out mobile */
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    display: none;
  }
`

const HomeLogoNavLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`

const HomeLogo = styled(Img)`
  height: 38px !important;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`

const Navigation = ({ handleThemeChange, isDarkTheme, path }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  let mobileLinkSections = cloneDeep(links.linkSections)
  const shouldShowSubNav = path && path.includes("/developers/")

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo/ej-logo.png" }) {
        childImageSharp {
          fixed(width: 33) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const handleMenuToggle = item => {
    if (item === "menu") {
      setIsMenuOpen(!isMenuOpen)
    } else {
      setIsMenuOpen(false)
    }
  }

  return (
    <NavContainer>
      <StyledNav>
        <NavContent>
          <HomeLogoNavLink href="/">
            <HomeLogo fixed={data.file.childImageSharp.fixed} alt={"logo"} />
          </HomeLogoNavLink>
          {/* Desktop */}
          <InnerContent>
            <LeftItems>
              {links.linkSections.map((section, idx) => {
                return (
                  <NavList key={idx}>
                    <NavListItem>
                      {section.items ? (
                        <NavDropdown section={section} key={idx} />
                      ) : (
                        <NavListItem key={idx}>
                          <NavLink
                            to={section.to}
                            isPartiallyActive={section.isPartiallyActive}
                            hassubnav={shouldShowSubNav}
                          >
                            <Text id={section.text} />
                          </NavLink>
                        </NavListItem>
                      )}
                    </NavListItem>
                  </NavList>
                )
              })}
            </LeftItems>
            <RightItems>
              <ThemeToggle onClick={handleThemeChange}>
                <NavIcon name={isDarkTheme ? "darkTheme" : "lightTheme"} />
              </ThemeToggle>
            </RightItems>
          </InnerContent>
        </NavContent>
        {/* Mobile */}
        <MobileNavMenu
          isMenuOpen={isMenuOpen}
          isDarkTheme={isDarkTheme}
          toggleMenu={handleMenuToggle}
          toggleTheme={handleThemeChange}
          linkSections={mobileLinkSections}
        />
        <MobileIcons>
          <NavMobileButton
            onClick={() => handleMenuToggle("menu")}
            onKeyDown={() => handleMenuToggle("menu")}
            role="button"
            tabIndex="0"
            aria-label={"aria-toggle-menu-button"}
          >
            <MenuIcon name="menu" />
          </NavMobileButton>
        </MobileIcons>
      </StyledNav>
      {shouldShowSubNav && (
        <SubNav>
          {links.ednLinks.map((link, idx) => {
            return (
              <NavLink
                key={idx}
                to={link.to}
                isPartiallyActive={link.isPartiallyActive}
              >
                <Text id={link.text} />
              </NavLink>
            )
          })}
        </SubNav>
      )}
    </NavContainer>
  )
}

export default Navigation
