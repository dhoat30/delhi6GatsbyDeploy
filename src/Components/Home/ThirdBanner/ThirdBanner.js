import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Banner from '../../UI/Banner/Banner'
import styled from 'styled-components'
const query = graphql`
  {
    allWpBanner(
      filter: {bannerCategories: {nodes: {elemMatch: {slug: {eq: "third-home-banner"}}}}}
    ) {
      edges {
        node {
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
                }
              }
            }
          }
        }
      }
    }
  }
`
function ThirdBanner() {
  const data = useStaticQuery(query)

  const imageData = data.allWpBanner.edges[0].node.featuredImage.node.localFile.childImageSharp


  return (
    <Container>
      <Banner bannerData={imageData} alt="second banner on a home page" />
    </Container>
  )
}

const Container = styled.div`
 position: relative;
 z-index: 3;
`
export default ThirdBanner
