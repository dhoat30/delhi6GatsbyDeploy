import React from 'react'
import ImageCard from '../../UI/ImageCard/ImageCard'
import SectionTitle from '../../UI/Titles/SectionTitle'
import { graphql, useStaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import ColumnTitle from '../../UI/Titles/ColumnTitle'
const query = graphql`
{
  allWpMenuImage {
    edges {
      node {
        id
        title
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 500, height: 600,  transformOptions: {cropFocus: CENTER})
              }
            }
          }
        }
      }
    }
  }
}
`
function MenuSection() {
  const data = useStaticQuery(query)

  const dataArray = data.allWpMenuImage.edges.map(edge => {
    return {
      id: edge.node.id,
      title: edge.node.title.toUpperCase(),
      image: edge.node.featuredImage.node.localFile.childImageSharp
    }
  })

  const card = dataArray.map(data => {
    return (
      <Card key={data.id} to={data.title.includes('DINE') ? '/dine-in-menu' : '/menu '}>
        <ImageCard image={data.image} title={data.title} />
        <ColumnTitle align="center">{data.title}</ColumnTitle>
      </Card>
    )
  })
  return (
    <Container>
      <SectionTitle id="menu" subTitle="Tasty Offer">Our Menu</SectionTitle>
      <Flex>
        {card}
      </Flex>
    </Container>
  )
}
const Container = styled.div`
    background: var(--darkGrey);
    padding: 150px 0;
    position: relative;
    z-index: 3; 
`
const Flex = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`
const Card = styled(Link)`
/* width: 300px; 
height: 300px; */
margin: 20px 30px;
transition: 500ms ease-in-out;
&:hover{ 
    transform: scale(1.05);
    cursor: pointer;
    text-decoration: none; 
}
`
export default MenuSection
