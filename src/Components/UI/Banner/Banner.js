import React from 'react'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import Overlay from '../Overlay/Overlay'

function Banner(props) {
    const bannerImage = getImage(props.bannerData)
    return (
        <Container>
            <Overlay position="absolute" showOverlay={true} />
            <GatsbyImageStyle image={bannerImage} alt={props.alt} />
        </Container>
    )
}
// hide banner on mobile devices 
const Container = styled.div`
 position: relative;
 @media (max-width: 700px){
     display: none;
 }
`

const GatsbyImageStyle = styled(GatsbyImage)`
height: 90vh;
max-height: 700px;
`
export default Banner
