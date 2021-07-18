import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Banner from '../../UI/Banner/Banner'

const query = graphql`
  {
    allWpBanner(
      filter: {bannerCategories: {nodes: {elemMatch: {slug: {eq: "fourth-home-banner"}}}}}
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
function FourthBanner() {
  const data = useStaticQuery(query)
  let imageData
  if (data.allWpBanner.edges[0]) {
    imageData = data.allWpBanner.edges[0].node.featuredImage.node.localFile.childImageSharp
  }



  return (
    <div>
      {imageData ? <Banner bannerData={imageData} alt="second banner on a home page" /> : null}

    </div>
  )
}

export default FourthBanner
