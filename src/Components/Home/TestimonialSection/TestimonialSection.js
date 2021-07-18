import React from 'react'
import Carousels from '../../UI/Carousels/Carousels'
import styled from 'styled-components'
import WallpaperPattern from '../../UI/Pattern/WallpaperPattern'
import SectionTitle from '../../UI/Titles/SectionTitle'
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  {
    allWpTestimonial {
      edges {
        node {
          title
          id
          testimonialsACF {
            testimony
          }
        }
      }
    }
  }
`

function TestimonialSection() {

  const data = useStaticQuery(query)
  const dataArray = data.allWpTestimonial.edges.map(edge => {
    return {
      title: edge.node.title,
      id: edge.node.id,
      content: edge.node.testimonialsACF.testimony,
    }
  })


  return (

    <Container>
      <WallpaperPattern />
      <TestimonialBox>
        <SectionTitle subTitle="What our guests say about us">Testimonials</SectionTitle>
        <Carousels data={dataArray} />
      </TestimonialBox>

    </Container>
  )
}

const Container = styled.section`
background-color: var(--darkGrey);
position: relative;
`
const TestimonialBox = styled.div`
padding: 100px 0;
height: 500px;
background-color: var(--darkGrey);
position: absolute;
top: 50%;
left: 50%; 
transform: translate(-50%, -50%);
width: 95%;
max-width: 1200px;
`

export default TestimonialSection
