import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.header`
  padding: 5rem;
`

const HeaderText = styled.h1`
  font-family: "Alegreya";
  font-weight: 400;
  font-size: 148px;
  margin: 0;
`
const Header = () => (
  <HeaderContainer>
    <HeaderText>Poetry Bike</HeaderText>
  </HeaderContainer>
)

Header.propTypes = {}

Header.defaultProps = {}

export default Header
