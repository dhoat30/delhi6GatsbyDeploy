import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/pro-light-svg-icons'

const Container = styled.button`    
    margin: ${props => props.margin ? '10px' : null};
    letter-spacing: var(--letterSpacing);
    border: 2px solid var(--gold);
    padding: 10px 30px 10px 20px;
    font-size: 0.9rem;
    outline: none;
    font-family: var(--poppins);
    text-transform: uppercase;
    cursor: pointer;
    background: ${props => props.background ? "var(--gold)" : "none"};    
    color: ${props => props.background ? "var(--darkGrey)" : "var(--gold)"};

    &:hover{
        background: ${props => !props.background ? "var(--gold)" : "none"};
       
        color: ${props => !props.background ? "var(--darkGrey)" : "var(--gold)"};
        border: 2px solid var(--gold);

}
`
function Button(props) {
    const buttonClasses = props.active ? `${props.className} button-active` : `${props.className}`

    return (
        <Container onClick={props.buttonClick} background={props.background} className={buttonClasses} margin={props.margin}>
            {props.children}
            <FontAwesomeIcon icon={faAngleRight} style={{ fontSize: '20' }} className="button-arrow" />
        </Container>
    )
}

export default Button
