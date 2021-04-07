import React from "react"
import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"

import { trackCustomEvent } from "../utils/matomo"
import Icon from "./Icon"

const HASH_PATTERN = /^#.*/

const isHashLink = to => HASH_PATTERN.test(to)

const ExternalLink = styled.a`
  &:after {
    margin-left: 0.125em;
    margin-right: 0.3em;
    display: inline;
    content: "↗";
    transition: all 0.1s ease-in-out;
    font-style: normal;
  }
  &:hover {
    &:after {
      transform: translate(0.15em, -0.2em);
    }
  }
`

const InternalLink = styled(GatsbyLink)`
  .is-glossary {
    white-space: nowrap;
  }
  &.active {
    color: ${props => props.theme.colors.primary};
  }
  &:hover {
    svg {
      fill: ${props => props.theme.colors.primary};
      transition: transform 0.1s;
      transform: scale(1.2);
    }
  }
`

const GlossaryIcon = styled(Icon)`
  margin: 0 0.25rem 0 0.35rem;
  fill: ${props => props.theme.colors.primary400};
  text-decoration: underline;
  &:hover {
    transition: transform 0.1s;
    transform: scale(1.2);
  }
`

const Link = ({
  to,
  href,
  children,
  hideArrow = false,
  className,
  isPartiallyActive = true,
}) => {
  // markdown pages pass `href`, not `to`
  to = to || href

  const isExternal = to && (to.includes("http") || to.includes("mailto:"))
  const isHash = isHashLink(to)
  const isGlossary = to && to.includes("glossary")
  const isStatic = to && to.includes("static")

  if (isHash) {
    return (
      <a className={className} href={to}>
        {children}
      </a>
    )
  }

  if (isStatic) {
    return (
      <a
        className={className}
        href={to}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }

  const eventOptions = {
    eventCategory: `External link`,
    eventAction: `Clicked`,
    eventName: to,
  }

  if (isExternal) {
    return hideArrow ? (
      <a
        className={className}
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackCustomEvent(eventOptions)}
      >
        {children}
      </a>
    ) : (
      <ExternalLink
        className={className}
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackCustomEvent(eventOptions)}
      >
        {children}
      </ExternalLink>
    )
  }

  return (
    <InternalLink
      className={isGlossary ? `is-glossary ${className}` : className}
      to={to}
      activeClassName="active"
      partiallyActive={isPartiallyActive}
    >
      {children}
      {isGlossary && (
        <GlossaryIcon aria-label="See definition" size="12px" name="glossary" />
      )}
    </InternalLink>
  )
}

export default Link
