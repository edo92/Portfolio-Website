import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-wrap: wrap;
  margin-left: 2%;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    margin: 0;
  }
`

const FeatureItem = styled.div`
  padding: 1rem;
  width: 25%;

  @media (max-width: ${props => props.theme.breakpoints.l}) {
    width: 50%;
  }
`

const IconImage = styled.img`
  height: 65px;
`

const Features = props => {
  return (
    <Container>
      {props.gridItems.map((item, idx) => {
        return (
          <FeatureItem key={idx}>
            <div style={{ padding: "1rem" }}>
              <IconImage key={idx} src={item.image} />
              <h5>{item.title ? item.title : "24/7 Support"}</h5>
              <p>{item.description && item.description}</p>
            </div>
          </FeatureItem>
        )
      })}
    </Container>
  )
}

export default Features
