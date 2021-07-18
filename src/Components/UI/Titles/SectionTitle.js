import React from 'react'
import styled from 'styled-components'

function SectionTitle(props) {
    return (
        <React.Fragment>
            <SubTitle id={props.id}>{props.subTitle}</SubTitle>
            <Title>{props.children}</Title>
        </React.Fragment>
    )
}

const SubTitle = styled.h4`
    color: var(--gold); 
    text-align: center;
    font-family: var(--della);
    letter-spacing: 0.2rem;
    @media (max-width: 500px){
        font-size: 1rem;
    }
`
const Title = styled.h3`
 font-size: 4rem;
 color: var(--gold); 
 text-transform: uppercase;
 letter-spacing: 0.2rem;
    text-align: center;
    font-family: var(--poppins);
    font-weight: 400;
    @media (max-width: 500px){
        font-size: 2rem;
    }
`


export default SectionTitle
