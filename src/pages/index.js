import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import poems from "../data/poems"

import styled from "styled-components"

const PoemContainer = styled.div``

const PoemBox = styled.div`
  display: inline-block;
  font-family: "Open Sans";
  font-size: 24px;
  border: 1.5px solid transparent;
  border-radius: 5px;
  padding: 15px;
  margin: 10px;

  &:hover {
    border-color: #eeeeee;
    cursor: pointer;
  }
`

const PoemTitle = styled.h6`
  margin: 0;
  font-size: 36px;
`

const PoemTag = styled.div`
  display: inline-block;
  padding: 2px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  background-image: linear-gradient(-45deg, #e91e63, #ffc107);
  color: #ffffff;
  margin: 3px;
  padding: 3px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 15px;
`

const PoemByline = styled.p`
  margin: 0;
  color: #999999;
  text-transform: uppercase;
  font-size: 14px;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <PoemContainer>
        {poems.map(({ title, author, tags, body }) => (
          <PoemBox>
            <PoemTitle>{title}</PoemTitle>
            <br />
            {body}
            <br />
            <br />
            {tags.map(tag => (
              <PoemTag>{tag}</PoemTag>
            ))}
            <br />
            <br />
            <PoemByline>By {author}</PoemByline>
          </PoemBox>
        ))}
      </PoemContainer>
    </Layout>
  )
}

export default IndexPage
