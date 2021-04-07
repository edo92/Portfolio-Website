import React from "react"
import styled from "styled-components"

import Link from "../components/Link"
import { Content, H2 } from "../components/SharedStyles"
import Text from "../components/Text"

const Message = styled(Text)`
  margin-right: 5px;
`

const NotFoundPage = () => {
  return (
    <div>
      <H2>Page Not Found</H2>
      <Content>
        <Message id="Return to" />
        <Link to="/">Home Page</Link>
      </Content>
    </div>
  )
}

export default NotFoundPage
