import React from 'react'
import styled from 'styled-components'
function ColumnTitle(props) {
    return (
        <Container className={props.className} align={props.align} fontWeight={props.fontWeight}>
            {props.children}
        </Container>
    )
}
const Container = styled.div`
font-weight: ${props => props.fontWeight === "regular" ? 400 : null};
 font-size: 1.5rem;
 width: auto;
 margin-top: 10px;
 color: var(--gold);
 letter-spacing: 0.04rem;
 text-align: ${props => props.align === 'center' ? 'center' : 'left'};
`

export default ColumnTitle
