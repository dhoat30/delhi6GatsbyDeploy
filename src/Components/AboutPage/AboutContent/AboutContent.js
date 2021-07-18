import React from 'react'
import SectionTitle from '../../UI/Titles/SectionTitle'
import styled from 'styled-components'
import Hero from '../../UI/Hero/Hero'
import MediumFonts from '../../UI/Titles/MediumFonts'
import ImageCard from '../../UI/ImageCard/ImageCard'
import WallpaperPattern from '../../UI/Pattern/WallpaperPattern'
function AboutContent(props) {


    return (
        <div>
            <Hero data={props.dataObject} pagehero={true} mediumHeight={true} />
            <AboutContentStyle className="row-container">
                <FirstSection>
                    <SectionTitle subTitle={props.dataObject.firstSubtitle}> {props.dataObject.firstTitle} </SectionTitle>

                    <Content>
                        <WallpaperPatternStyle img={true} />
                        <MediumFontsStyle color="white"
                            align="center">
                            {props.dataObject.firstContent}
                        </MediumFontsStyle>
                        <ImageCardStyle
                            image={props.dataObject.firstImage}
                            title={props.dataObject.firstTitle} />
                    </Content>

                </FirstSection>
                <SecondSection>


                    <Content>
                        <ImageCardStyle
                            image={props.dataObject.firstImage}
                            title={props.dataObject.firstTitle} />


                        <WallpaperPatternStyle img={true} />
                        <div>
                            <SectionTitle subTitle={props.dataObject.secondSubtitle}> {props.dataObject.secondTitle} </SectionTitle>
                            <MediumFontsStyle color="white"
                                align="center">

                                {props.dataObject.firstContent}
                            </MediumFontsStyle>
                        </div>

                    </Content>
                </SecondSection>

            </AboutContentStyle>
        </div>
    )
}

const AboutContentStyle = styled.div`
 padding: 100px 20px;
`
const Content = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
margin-top: 50px;
@media(max-width: 1260px){ 
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin-top: 0;
}
`
const FirstSection = styled.section``
const SecondSection = styled.section`
 margin: 200px 0 0 0;
`
const MediumFontsStyle = styled(MediumFonts)`
width: 100%;
max-width: 500px;
@media(max-width: 1260px){
    margin: 0 0 40px 0;
}

`
const WallpaperPatternStyle = styled(WallpaperPattern)`
width: 100%;
max-width: 300px;
@media(max-width: 1260px){
    margin: 0 0 40px 0;
}
`
const ImageCardStyle = styled(ImageCard)`
 width: 100%;
 max-width: 300px;

`


export default AboutContent
