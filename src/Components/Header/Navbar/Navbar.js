import React, { useState } from 'react'
import Menu from '../../UI/Menu/Menu'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/pro-light-svg-icons'

const query = graphql`
  {
    allWpMenuItem(
      filter: {locations: {eq: MAIN_MENU}}
      sort: {fields: order, order: ASC}
    ) {
      edges {
        node {
            id
          url
          label
        }
      }
    }
  }
`




function Navbar(props) {
  const [mobileMenuShow, setMobileMenuShow] = useState(false)
  const [hamburgerIconShow, setHamburgerIconShow] = useState(true)

  const data = useStaticQuery(query)
  const menuArray = data.allWpMenuItem.edges

  const clickHandler = (event) => {
    setMobileMenuShow(true)
    setHamburgerIconShow(false)
  }

  const closeClickHandler = () => {
    setMobileMenuShow(false)
    setHamburgerIconShow(true)
  }

  const Icon = hamburgerIconShow ? <IconStyle icon={faBars} onClick={clickHandler}></IconStyle> : <IconStyle icon={faTimes} onClick={closeClickHandler}></IconStyle>;
  return (
    <React.Fragment>


      <DesktopContainer>

        <Menu flexRow={true} menuArray={menuArray} home={true} />
      </DesktopContainer>

      <MobileContainer>
        {Icon}
        {mobileMenuShow ? <Menu orderOnline={props.orderOnline} mobileMenu={true} flexRow={false} menuArray={menuArray} home={true} /> : null}
      </MobileContainer>
    </React.Fragment>

  )
}

const DesktopContainer = styled.div`
 margin-right: 50px;
  @media(max-width: 1000px){
    display: none;
  }
`

const MobileContainer = styled.div`
display: none;
@media(max-width: 1000px){
  display: block;
}
`

const IconStyle = styled(FontAwesomeIcon)`
font-size: 35px; 
color: var(--gold);
position: absolute;
top: 8px;
right: 20px;
`

export default Navbar
