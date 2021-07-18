import React from 'react'
import FormSection from './FormSection/FormSection'
import styled from 'styled-components'
function Contact() {
    return (
        <Container>
            <Flex className="row-container">
                <IFrameStyle src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3256.9461828833996!2d174.08837941549908!3d-35.28246428028925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0bbad081cb1155%3A0x9d97868aedb9328!2sDelhi%206%20-%20The%20Indian%20Kitchen!5e0!3m2!1sen!2sid!4v1626488599013!5m2!1sen!2sid" style={{ border: '0' }} allowfullscreen="" loading="lazy"></IFrameStyle>
                <FormSection />
            </Flex>

        </Container>
    )
}
const Container = styled.section`
background: var(--darkBlue);
`
const Flex = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items : center ;
justify-content: center;
`
const IFrameStyle = styled.iframe`
padding: 100px 0;
display: block;
width: 49%;
height: 700px;
min-width: auto;
filter: invert();
`
export default Contact
