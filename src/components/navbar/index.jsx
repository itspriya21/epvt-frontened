import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './index.css';

const NavbarComp = () => {
    return (
        <Container>
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand href="#">FORMAL METHOD TOOL CHAIN SOLIDITY</Navbar.Brand>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavbarComp;
