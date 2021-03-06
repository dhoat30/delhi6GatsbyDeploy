import React from 'react'
import MenuItem from './MenuItem/MenuItem'
import styled from 'styled-components'


function Menu(props) {
    const menuItems = props.menuArray.map(menuItem => {
        return <MenuItem key={menuItem.node.id}

            menuSlug={menuItem.node.url}>
            {menuItem.node.label}
        </MenuItem>
    })
    return (

        <Container flexRow={props.flexRow} mobileMenu={props.mobileMenu}>
            {/* if home is true add a home link */}
            {props.home ? <MenuItem menuSlug="/">Home</MenuItem> : null}
            {/* if order online exist add it to navbar */}
            {menuItems}
            {props.orderOnline ? <MenuItem
                anchorTag={true}
                key="147001"
                label="Order Online"
                menuSlug={props.orderOnline}
            >Order Online</MenuItem> : null}

        </Container>
    )
}

const Container = styled.ul`
    display: flex;
    flex-direction: ${props => props.flexRow ? "row" : "column"};
    position: ${props => props.mobileMenu ? "absolute" : "static"};
    top: 50px; 
    right: 0;
    z-index: 20;
    @media (max-width: 1000px ){ 
        background: var(--darkGrey); 
        width: 250px;
    }
`
export default Menu
