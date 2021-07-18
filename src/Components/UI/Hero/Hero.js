import React from 'react'
import styled from 'styled-components'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import Link from '../Link/Link'
import SectionTitle from '../Titles/SectionTitle'
import Overlay from '../../UI/Overlay/Overlay'

function Hero(props) {
    const image = getImage(props.data.imageSharp)
    const mobileImage = getImage(props.data.mobileImage)

    return (
        <Container>
            <Overlay show={true}></Overlay>
            {props.pagehero ?
                <PageHeroContent>
                    <SectionTitle> About Us</SectionTitle>
                </PageHeroContent>
                :
                <div className="row-container">
                    <Content>
                        <h2 className="della gold column-font-size">{props.data.subtitle}</h2>
                        <h1 className="tokyo-zen gold large-font-size">{props.data.title}</h1>
                        {props.data.orderOnlineLink ? <Link background={true} link={props.data.orderOnlineLink} targetBlank={true} mobileIcon={true}> Order Online</Link> : null}
                        {props.data.phoneNumber ? <Link link={`tel:${props.data.phoneNumber}`} iconName={`faPhoneAlt`}>{props.data.phoneNumber} </Link> : null}
                    </Content>
                </div>
            }

            <DesktopImage $mediumheight={props.mediumHeight} image={image} alt={props.data.title}></DesktopImage>
            <MobileImage image={mobileImage} alt={props.data.title}></MobileImage>
        </Container>
    )
}
const Container = styled.div`
    position: relative;
`

const Content = styled.div`
position: absolute;
top: 50%;
z-index: 10;
transform: translate(0, -50%);
max-width: 600px;
@media(max-width: 800px ){
    top: 130px;
}
`
const DesktopImage = styled(GatsbyImage)`
height: ${props => props.$mediumheight ? "300px" : '100%'};
@media (max-width: 800px){
    display: none;
}
`
const MobileImage = styled(GatsbyImage)`
@media (max-width: 800px){
    display: block;
}
display: none;
`

const PageHeroContent = styled.div`
position: absolute;
z-index: 10; 
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`


export default Hero
