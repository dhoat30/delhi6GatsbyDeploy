import React from 'react'
import Logo from '../UI/Logo/Logo'
import Navbar from './Navbar/Navbar'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import AnchorLink from '../UI/Link/Link'

const query = graphql`
{
    allWpSlider {
      edges {
        node {
          id
          sliderACF {
            orderOnlineLink
          }
        }
      }
    }
  }
`

function Header() {
  const data = useStaticQuery(query)
  const dataArray = data.allWpSlider.edges.map(edge => {
    return {
      id: edge.node.id,
      orderOnlineLink: edge.node.sliderACF.orderOnlineLink,

    }
  })
  return (
    <Container>
      <div className="row-container flex flex-justify-between flex-align-center flex-row">
        <Link to="/"> <Logo header={true} /></Link>
        <div className="row-container flex flex-justify-end flex-row flex-align-center">
          <Navbar orderOnline={dataArray[0].orderOnlineLink} />
          <AnchorLinkStyle background={true} mobileIcon={true} link={dataArray[0].orderOnlineLink} targetBlank={true}>  Order Online </AnchorLinkStyle>
        </div>

      </div>

    </Container>
  )
}

const Container = styled.div`
    background: var(--darkGrey);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    @media(max-width: 1000px){
        
    }
`
const AnchorLinkStyle = styled(AnchorLink)`
@media(max-width: 1000px){
    display: none;
}
`

export default Header
