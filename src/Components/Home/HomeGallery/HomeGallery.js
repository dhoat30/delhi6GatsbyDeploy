import React from 'react'
import Gallery from '../../UI/Gallery/Gallery'
import styled from 'styled-components'
import Pattern from '../../UI/Pattern/Pattern'
import { graphql, Link, useStaticQuery } from 'gatsby'
import SectionTitle from '../../UI/Titles/SectionTitle'
import Button from '../../UI/Button/Button'
const query = graphql`
{
    allWpGallery(limit: 8){
      totalCount
      edges {
        node {
          id
          title
          featuredImage {
            node {
              localFile {
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
  }
`

function HomeGallery() {
  const data = useStaticQuery(query)

  const dataArray = data.allWpGallery.edges.map(edge => {
    if (edge.node.featuredImage.node !== null) {
      return {
        title: edge.node.title,
        id: edge.node.id,
        src: edge.node.featuredImage.node
      }
    }

  })



  return (
    <Container>
      <FirstPattern>
        <Pattern />
      </FirstPattern>
      <SecondPattern>
        <Pattern />
      </SecondPattern>
      <GalleryContainer>
        <SectionTitle subTitle="View our">Gallery</SectionTitle>
        <Gallery dataArray={dataArray} />
        <Link to="/gallery"><ButtonStyle align="center">View More </ButtonStyle></Link>
      </GalleryContainer>



    </Container>
  )
}

const Container = styled.section`
position: relative;
background: var(--darkBlue);
padding: 100px;
`
const GalleryContainer = styled.div`
position: relative;
z-index: 3;
margin-bottom: 20px;
`
const FirstPattern = styled.div`
position: absolute;
top: -170px;
transform: rotate(15deg);
left: 0;
z-index: 2;
`
const SecondPattern = styled.div`
position: absolute;
bottom: -170px;
right: 0;
transform: rotate(195deg);
z-index: 3;
`
const ButtonStyle = styled(Button)`
margin: 20px auto 0 auto;
display: block;
`
export default HomeGallery
