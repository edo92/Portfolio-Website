import styled from "styled-components"
import { Mixins } from "../theme"
import Link from "./Link"

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin: 0 auto;
`

export const Content = styled.div`
  padding: 1rem 2rem;
  width: 100%;
`

export const H2 = styled.h2`
  ${Mixins.textLevel2}
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    font-size: 1.5rem;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -1rem;
  margin-right: -1rem;
`

export const Divider = styled.div`
  margin-bottom: 4rem;
  margin-top: 4rem;
  width: 10%;
  height: 0.25rem;
  background-color: ${props => props.theme.colors.homeDivider};
`

export const NavLink = styled(Link)`
  text-decoration: none;
  margin-right: 2rem;
  color: ${props => props.theme.colors.text};
  svg {
    fill: ${props => props.theme.colors.text200};
  }
  &:hover {
    color: ${props => props.theme.colors.primary};
    svg {
      fill: ${props => props.theme.colors.primary};
    }
  }
`

export const Section = styled.div`
  display: block;
`
