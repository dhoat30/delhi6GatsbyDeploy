import React from 'react'
import styled from 'styled-components'
import Logo from '../UI/Logo/Logo'
import { graphql, useStaticQuery } from "gatsby"
import MediumFonts from '../UI/Titles/MediumFonts'
const query = graphql`
  {
    allWpInformation {
      edges {
        node {
          id
          informationACF {
            closed
            copyright
            email
            facebook
            menuLog
            openingHours
            phone
            tripAdvisor
            region
            streetAddress
          }
        }
      }
    }
  }`

function Footer() {
  const data = useStaticQuery(query)

  const dataObject = data.allWpInformation.edges[0].node
  const infoObject = {
    id: dataObject.id,
    streetAddress: dataObject.informationACF.streetAddress,
    region: dataObject.informationACF.region,
    phone: dataObject.informationACF.phone,
    email: dataObject.informationACF.email,
    openingHours: dataObject.informationACF.openingHours,
    closed: dataObject.informationACF.closed,
    facebook: dataObject.informationACF.facebook,
    tripAdvisor: dataObject.informationACF.tripAdvisor,
    menuLog: dataObject.informationACF.menuLog,
    copyright: dataObject.informationACF.copyright
  }
  let phone = `tel:${infoObject.phone}`
  let email = `mailto:${infoObject.email}`

  return (
    <Container>
      <Logo width="150px" />

      <ContactContainer>
        <MediumFonts color="white" align="center">{infoObject.streetAddress}</MediumFonts>
        <MediumFonts color="white" align="center">{infoObject.region}</MediumFonts>
        <Contact>
          <a href={phone}><MediumFonts color="white" align="center" hover={true}>{infoObject.phone}</MediumFonts></a>
          <MediumFonts hover={true} color="white" align="center">&nbsp;|&nbsp;	 </MediumFonts>
          <a href={email}><MediumFonts hover={true} color="white" align="center">{infoObject.email}</MediumFonts></a>
        </Contact>

        <MediumFonts color="white" align="center">Open: {infoObject.openingHours}</MediumFonts>
        <MediumFonts color="white" align="center"> {infoObject.closed} Closed</MediumFonts>
      </ContactContainer>

      <SocialContainer>
        <SocialUnderline href={infoObject.facebook}><MediumFonts color="white" hover={true} align="center">Facebook</MediumFonts></SocialUnderline>
        <SocialUnderline href={infoObject.menuLog}><MediumFonts color="white" hover={true} align="center">Menu Log</MediumFonts></SocialUnderline>
        <SocialUnderline href={infoObject.tripAdvisor}><MediumFonts color="white" hover={true} align="center">Trip Advisor</MediumFonts></SocialUnderline>
      </SocialContainer>

      <CopyrightContainer>
        <MediumFonts color="white" align="center">© {infoObject.copyright} </MediumFonts>
        <Webduel href="https://webduel.co.nz"> <MediumFonts hover={true} color="white">Built By Web<span className="gold bold">Duel</span></MediumFonts></Webduel>
      </CopyrightContainer>


    </Container>
  )
}
const Container = styled.section`
background: var(--darkGrey);
color: var(--gold);
padding: 50px 0 10px 0;
`
const ContactContainer = styled.div`
 margin-top: 30px;
`
const Contact = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
flex-wrap: wrap;
`
const SocialContainer = styled.div`
 display: flex;
justify-content: space-around;
flex-direction: row;
flex-wrap: wrap;
max-width: 500px;
margin: 30px auto 0 auto;
`
const SocialUnderline = styled.a`
position: relative;

&:hover{ 
  color: var(--lightGold) !important;
  text-decoration: none; 
}
&::after{ 
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  border: 1px solid var(--gold); 
  background: var(--gold)
}
&::before{ 
  content: "";
  position: absolute;
  bottom: -8px;
  width: 100%;
  height: 1px;
  border: 1px solid var(--gold); 
  background: var(--gold)
}
`
const CopyrightContainer = styled.div`
margin-top: 60px;
display: flex;
justify-content: center;
flex-direction: row;
flex-wrap: wrap;

`

const Webduel = styled.a`
 margin-left: 5px;
 display: inline-block;
 &:hover{ 
   color: var(--lightGold);
 }
`
export default Footer
