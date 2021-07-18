import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Hero from '../../UI/Hero/Hero'


const query = graphql`
{
    allWpSlider(
      filter: {sliderCategories: {nodes: {elemMatch: {slug: {eq: "home-page"}}}}}
      sort: {fields: ancestors___nodes___date}
    ) {
      edges {
        node {
          title
          id
          sliderACF {
            orderOnlineLink
            phoneNumber
            subTitle
            title
            mobileImage {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
                }
              }
            }
          }
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

function HeroSection() {

  const data = useStaticQuery(query)
  const dataArray = data.allWpSlider.edges.map(edge => {
    return {
      title: edge.node.sliderACF.title,
      id: edge.node.id,
      subtitle: edge.node.sliderACF.subTitle,
      phoneNumber: edge.node.sliderACF.phoneNumber,
      orderOnlineLink: edge.node.sliderACF.orderOnlineLink,
      imageSharp: edge.node.featuredImage.node.localFile.childImageSharp,
      mobileImage: edge.node.sliderACF.mobileImage.localFile.childImageSharp
    }
  })

  const HeroComponent = dataArray.map(data => {
    return (
      <React.Fragment key={data.id}>
        <Hero data={data}></Hero>
      </React.Fragment>

    )

  })

  return (

    <div>
      {HeroComponent}
    </div>





  )
}



export default HeroSection
