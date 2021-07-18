import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faMobile } from '@fortawesome/pro-regular-svg-icons'

function Link(props) {

    const targetBlank = props.targetBlank ? "_blank" : null
    const mobile = props.mobileIcon ? faMobile : faPhoneAlt;

    return (
        <Container onClick={props.buttonClick}
            background={props.background}
            className={props.className}
            target={targetBlank}
            href={props.link}>
            <FontStyle icon={mobile} style={{ fontSize: '15' }} />
            {props.children}

        </Container>
    )
}
const Container = styled.a`
display: inline-block;
text-decoration: none; 
    letter-spacing: var(--letterSpacing);
    border: 2px solid var(--gold);
    padding: 10px 25px 10px 25px;
    font-size: 0.9rem;
    outline: none;
    font-family: var(--poppins);
    text-transform: uppercase;
    margin: 5px 15px 5px 0;
    cursor: pointer;
    background: ${props => props.background ? "var(--gold)" : "none"};
    color: ${props => props.background ? "var(--darkGrey)" : "var(--gold)"};
    

    &:hover{
        background: ${props => !props.background ? "var(--gold)" : "none"};
        color: ${props => !props.background ? "var(--darkGrey)" : "var(--gold)"};
        border: 2px solid var(--gold);
        text-decoration: none;

}
`

const FontStyle = styled(FontAwesomeIcon)`
margin-right: 5px;

`

export default Link
