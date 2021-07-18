import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'


const activeStyle = {
    color: 'var(--lightGold)'
}
const AnchorStyle = styled.a`
color: var(--gold); 
    margin: 0 20px; 
    &:hover {
        color: var(--lightGold);
    }
   @media (max-width:1000px){
       padding: 10px 5px;
       display: block;
    
   }
`
const LinkStyle = styled(Link)`

color: var(--gold); 
    margin: 0 20px; 
    &:hover {
        color: var(--lightGold);
    }
   @media (max-width:1000px){
       padding: 10px 5px;
       display: block;
    
   }
`
function MenuItem(props) {
    return (
        <li>

            {props.anchorTag ?
                <AnchorStyle href={props.menuSlug}>{props.label}</AnchorStyle> :
                <LinkStyle to={props.menuSlug} activeStyle={activeStyle}>
                    {props.children}
                </LinkStyle>
            }




        </li>
    )
}

export default MenuItem
