import React, { createRef } from "react"
import styled from "styled-components"

const NavListItem = styled.div`
  white-space: nowrap;
  margin: 0;
  color: ${props => props.theme.colors.text};
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`

const NavDropdown = ({ section }) => {
  const ref = createRef()

  const ariaLabel = section.ariaLabel || section.text

  return <NavListItem ref={ref} aria-label={ariaLabel}></NavListItem>
}

export default NavDropdown
