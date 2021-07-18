import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../../UI/Titles/SectionTitle'
import Form from './Form/Form'
import Pattern from '../../UI/Pattern/Pattern'

function FormSection() {


    return (
        <Container>
            <PatternContainer>
                <Pattern />
            </PatternContainer>

            <SectionTitle subTitle="Reservation">Book a Table</SectionTitle>
            <Form></Form>
        </Container>

    )
}

const Container = styled.div`
    background: var(--darkBlue);
    padding: 100px 0;
    position: relative;
`
const PatternContainer = styled.div`
position: absolute;
@media (max-width: 900px){
    display: none;
}
`

export default FormSection