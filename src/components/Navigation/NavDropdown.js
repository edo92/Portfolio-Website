import React, { useState, createRef } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import Icon from "../Icon"
import Text from "../Text"
import { NavLink } from "../../components/SharedStyles"
import { useOnClickOutside } from "../../hooks/useOnClickOutside"

const NavListItem = styled.div`
  white-space: nowrap;
  margin: 0;
  color: ${props => props.theme.colors.text};
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`

const DropdownTitle = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-right: 1.5rem;

  &:hover {
    & > svg {
      fill: ${props => props.theme.colors.primary};
    }
  }
`

const StyledIcon = styled(Icon)`
  transform: ${props => (props.isOpen ? `rotate(180deg)` : ``)};
`

const DropdownList = styled(motion.ul)`
  margin: 0;
  position: absolute;
  margin-top: ${props => (props.hassubnav ? `-4.5rem` : `-1rem`)};
  list-style-type: none;
  list-style-image: none;
  top: 100%;
  width: auto;
  border-radius: 0.5em;
  background: ${props => props.theme.colors.dropdownBackground};
  border: 1px solid ${props => props.theme.colors.dropdownBorder};
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`

const DropdownItem = styled.li`
  padding-left: 2rem;
  padding-right: 2rem;
  margin: 0;
  color: ${props => props.theme.colors.text};
  &:hover {
    color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.dropdownBackgroundHover};
  }
`

const NavLinkItem = styled(NavLink)`
  display: block;
  padding: 0.5rem;
`

const listVariants = {
  open: {
    opacity: 1,
    rotateX: 0,
    display: "block",
    transition: {
      duration: 0.2,
    },
  },
  closed: {
    opacity: 0,
    rotateX: -15,
    transitionEnd: {
      display: "none",
    },
  },
}

const DropDown = ({ section, hassubnav }) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = createRef()

  useOnClickOutside(ref, () => setIsOpen(false))

  const onKeyDownHandler = e => {
    if (e.keyCode === 13) {
      setIsOpen(!isOpen)
    }
  }

  const ariaLabel = section.ariaLabel || section.text

  return (
    <NavListItem ref={ref} aria-label={ariaLabel}>
      <DropdownTitle
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={onKeyDownHandler}
      >
        <Text id={section.text} />
        <StyledIcon isOpen={isOpen} name="chevronDown" />
      </DropdownTitle>

      {section.items && (
        <DropdownList
          hassubnav={hassubnav}
          animate={isOpen ? "open" : "closed"}
          variants={listVariants}
          initial="closed"
        >
          {section.items.map((item, idx) => {
            return (
              <DropdownItem key={idx} onClick={() => setIsOpen(false)}>
                <NavLinkItem
                  href={item.to}
                  tabIndex="-1"
                  isPartiallyActive={false}
                >
                  <Text id={item.text} />
                </NavLinkItem>
              </DropdownItem>
            )
          })}
        </DropdownList>
      )}
    </NavListItem>
  )
}

export default DropDown
