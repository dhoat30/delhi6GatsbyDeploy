import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import AboutContent from './AboutContent/AboutContent'
const query = graphql`
{
    allWpPage(filter: {slug: {eq: "about"}}) {
      edges {
        node {
          aboutUsACF {
            firstContent
            firstSubtitle
            firstTitle
            secondContent
            secondSubtitle
            secondTitle
            secondImage {
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
                }
              }
            }
            addFirstImage {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
                }
              }
            }
            mobileHeroImage {
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
                }
              }
            }
          }
          id
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
function AboutPage() {
    const data = useStaticQuery(query)
    const aboutUsACF = data.allWpPage.edges[0].node.aboutUsACF
    console.log(data)
    const dataObject = {
        title: aboutUsACF.firstTitle,
        firstTitle: aboutUsACF.firstTitle,
        firstSubtitle: aboutUsACF.firstSubtitle,
        firstContent: aboutUsACF.firstContent,
        firstImage: aboutUsACF.addFirstImage.localFile.childImageSharp,
        secondTitle: aboutUsACF.secondTitle,
        secondSubtitle: aboutUsACF.secondSubtitle,
        secondContent: aboutUsACF.secondContent,
        secondImage: aboutUsACF.secondImage.localFile.childImageSharp,
        mobileImage: aboutUsACF.mobileHeroImage.localFile.childImageSharp,
        imageSharp: data.allWpPage.edges[0].node.featuredImage.node.localFile.childImageSharp
    }
    return (
        <Container>
            <AboutContent dataObject={dataObject} />

        </Container>
    )
}
const Container = styled.section`
background: var(--darkBlue);
margin-bottom: -10px;

`
export default AboutPage
