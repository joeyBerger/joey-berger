import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

const CustomNavbar = props => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" expanded={props.expanded}>
            <Navbar.Brand>Joey Berger</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={(e) => props.setNavBarExpanded(e,!props.expanded)}/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav>      
                    {Object.keys(props.categories).map(c => 
                        <Nav.Link key={c} onClick = {(e) => {props.scrollToDiv(e,c)}}>
                            {props.categories[c]}
                        </Nav.Link> 
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default CustomNavbar