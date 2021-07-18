import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../../UI/Titles/SectionTitle'
import Form from './Form/Form'

function FormSection() {


    return (
        <Container>

            <SectionTitle subTitle="Send us a message">Contact Us</SectionTitle>
            <Form></Form>
        </Container>

    )
}

const Container = styled.div`
    background: var(--darkBlue);
    padding: 100px 0;
    position: relative;
    width: 49%;
    min-width: 600px;
`
const PatternContainer = styled.div`
position: absolute;
@media (max-width: 900px){
    display: none;
}
`

export default FormSection