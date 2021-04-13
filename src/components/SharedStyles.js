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

export const GrayContainer = styled.div`
  width: 100%;
  background: ${props => props.theme.colors.grayBackground};
  box-shadow: inset 0px 1px 0px
    ${props => props.theme.colors.tableItemBoxShadow};
`

export const Column = styled.div`
  flex: 1 1 33%;
  margin-bottom: 1.5rem;
  margin-right: 2rem;
  width: 100%;
`

export const H2 = styled.h2`
  ${Mixins.textLevel2}
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    font-size: 1.5rem;
  }
`

export const H3 = styled.h2`
  ${Mixins.textLevel3}
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    font-size: 1.5rem;
  }
`

export const H4 = styled.h2`
  ${Mixins.textLevel4}
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    font-size: 1.5rem;
  }
`

export const Input = styled.input`
  border: 1px solid ${props => props.theme.colors.searchBorder};
  color: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.searchBackground};
  padding: 0.5rem;
  padding-right: 2rem;
  border-radius: 0.25em;
  width: 100%;
  transition: all 0.3s;

  &:focus {
    outline: ${props => props.theme.colors.primary} auto 1px;
  }
`

export const TextArea = styled.textarea`
  border: 1px solid ${props => props.theme.colors.searchBorder};
  color: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.searchBackground};
  padding: 0.5rem;
  padding-right: 2rem;
  border-radius: 0.25em;
  width: 100%;
  transition: all 0.3s;

  &:focus {
    outline: ${props => props.theme.colors.primary} auto 1px;
  }
`

export const JustCenter = styled.div`
  display: flex;
  justify-content: center;
`

export const LeftColumn = styled.div`
  flex: 0 0 50%;
  max-width: 75%;
  margin-right: 4rem;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    max-width: 100%;
    margin-right: 0;
  }
`

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 350px), 1fr));
  gap: 2rem;
`

export const ExtraSpace = styled.div`
  padding: 5rem 0 5rem 0;
  @media (max-width: 1400px) {
    padding: 1rem 0 1rem 0;
  }
  @media (max-width: 1200px) {
    padding: 0rem 0 0rem 0;
  }
  @media (max-width: 900px) {
    display: none;
  }
`

export const ExtraSpaceHalf = styled.div`
  padding: 2.5rem 0 2.5rem 0;
  @media (max-width: 1200px) {
    padding: 1.5rem 0 1.5rem 0;
  }
  @media (max-width: 900px) {
    display: none;
  }
`

export const ExtraSpaceCenter = styled(ExtraSpaceHalf)`
  display: flex;
  justify-content: center;
`
