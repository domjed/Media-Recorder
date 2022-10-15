import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { StyledNavbar } from './StyledNavbar';

export default function TopBar() {
    return (
        <StyledNavbar sticky="top" bg="info" expand="md"  >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <NavLink className="p-3 bg-info text-white" to="/">
                        Home
                    </NavLink>
                    <NavLink className="p-3 bg-info text-white" to="/new-audio">
                        New Audio
                    </NavLink>
                    <NavLink className="p-3 bg-info text-white" to="/audio-history">
                        Old Recordings
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </StyledNavbar>
    )
}