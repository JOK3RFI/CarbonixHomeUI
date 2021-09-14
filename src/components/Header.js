import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import {
    NavLink,
    Link
  } from "react-router-dom";

import Logo from '../assets/images/logo.png';
import SocialIcon1 from '../assets/images/twitter.png';
import SocialIcon2 from '../assets/images/git-lg.png';
import SocialIcon3 from '../assets/images/white-icon.png';
import SocialIcon4 from '../assets/images/youtube.png';
import Shape from '../assets/images/header-bubble.png';

function Header() {
    return (
        <div className="header-page">
            <div className="header-top">
                <Container>
                    <div className="d-flex align-items-center justify-content-end">
                        <a href="https://twitter.com/BlackCollateral" target="_blank"><img src={SocialIcon1} className="d-block" alt="Social Icon" /></a>
                        <a href="https://github.com/BLACKCOLLATERAL" target="_blank"><img src={SocialIcon2} className="d-block" alt="Social Icon" /></a>
                        <a href="https://medium.com/@blackcollateral" target="_blank"><img src={SocialIcon3} className="d-block" alt="Social Icon" /></a>
                        <a href="https://www.youtube.com/channel/UCnXEtSWkUZ8CO4qytlWCtKQ" target="_blank"><img src={SocialIcon4} className="d-block" alt="Social Icon" /></a>
                    </div>
                </Container>
                <img src={Shape} className="header-shape" alt="shape" />
            </div>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="/"><img src={Logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className="nav-link" exact  activeclassname="active" to="/home">HOME</NavLink>
                            <a className="nav-link" href="/home#about">ABOUT</a>
                            <a className="nav-link" href="https://www.blackcollateral.com">BLACK COLLATERAL</a>
                            <Link className="nav-link" to="/road-map">ROADMAP</Link>
                            <a className="nav-link" href="https://docs.blackcollateral.com/">DOCS</a>
                        </Nav>
                        <Nav>
                            <Nav.Link className="btn border-0 btn-grad" href="https://dev-carbonix.vercel.app/">LAUNCH APP</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;