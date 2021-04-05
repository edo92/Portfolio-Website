import React from "react"
import styled from "styled-components"

import { NavLink } from "../../components/SharedStyles"
import links from "./links.json"
import Text from "../Text"
import NavDropdown from "./NavDropdown"

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

const Logo = styled.a`
  padding: 8px;
  font-size: 32px;
  border-radius: 2px;
  padding-right: 12px;
  padding-left: 12px;
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
  margin-left: 2rem;
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

const Navigation = () => {
  return (
    <NavContainer>
      <StyledNav>
        <Logo href="/">EJ</Logo>
        <NavContent>
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
                            href={section.to}
                            target={section.newTab && "_blank"}
                            isPartiallyActive={section.isPartiallyActive}
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
            <RightItems></RightItems>
          </InnerContent>
        </NavContent>
      </StyledNav>
    </NavContainer>
  )
}

export default Navigation
