import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { IconContext } from "react-icons"
import { FaGithub, FaLinkedinIn, FaYoutube, FaDiscord } from "react-icons/fa"

import { BsQuestionSquareFill } from "react-icons/bs"
import { IoCodeDownload } from "react-icons/io5"
import { IoCodeOutline } from "react-icons/io5"

import MoonIcon from "../assets/svg/moonicon.svg"
import SunIcon from "../assets/svg/sunicon.svg"

const MoonIconCustom = styled(MoonIcon)`
  height: 30px;
  padding: 4px;
  margin-right: 2px;
`

const SunCustomIcon = styled(SunIcon)`
  height: 30px;
`

import {
  MdAdd,
  MdClose,
  MdExpandMore,
  MdArrowForward,
  MdInfoOutline,
  MdLanguage,
  MdMenu,
  MdSearch,
} from "react-icons/md"

const Icon = ({ name, size, className }) => {
  return (
    <IconContext.Provider value={{ size: size, className: className }}>
      {name === "add" && <MdAdd />}
      {name === "chevronDown" && <MdExpandMore />}
      {name === "arrowRight" && <MdArrowForward />}
      {name === "close" && <MdClose />}
      {name === "darkTheme" && <MoonIconCustom />}
      {name === "lightTheme" && <SunCustomIcon />}
      {name === "github" && <FaGithub />}
      {name === "info" && <MdInfoOutline />}
      {name === "language" && <MdLanguage />}
      {name === "menu" && <MdMenu />}
      {name === "linkedin" && <FaLinkedinIn />}
      {name === "search" && <MdSearch />}
      {name === "youtube" && <FaYoutube />}
      {name === "discord" && <FaDiscord />}
      {name === "glossary" && <BsQuestionSquareFill />}
      {name === "codeDownload" && <IoCodeDownload />}
      {name === "code" && <IoCodeOutline />}
    </IconContext.Provider>
  )
}

Icon.defaultProps = {
  name: ``,
  size: `24`,
}

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
}

const StyledIcon = styled(Icon)`
  fill: ${props => props.theme.colors.secondary};

  &:hover path {
    fill: ${props => props.theme.colors.primary};
  }
`

export default StyledIcon
