import React from 'react'
import {
    Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, NavbarText, Button
} from "reactstrap"
import Logo from "../assets/img/Logo.png"
import ConnectBTN from "../assets/img/Connect BTN.png"
import MintBTN from "../assets/img/Mint BTN.png"
import Twitter from "../assets/img/Twitter.png"
import Discord from "../assets/img/Discord.png"
import Medium from "../assets/img/Medium.png"
import OpenSea from "../assets/img/Open Sea.png"
function Header() {
    return (
        <>
            <div className="custom-navbar">
                <Navbar
                    className="align-items-start"
                    expand="md"
                    light
                >
                    <NavbarBrand href="/" className="mt-0 mt-md-4 ml-5">
                        <img src={Logo} alt="logo" className="logo" />
                    </NavbarBrand>
                    <NavbarToggler className="mt-0 mt-md-4" >
                        <Button className="toggler-btn">
                            <i className="fa fa-bars fa-2x"></i>
                        </Button>
                    </NavbarToggler>
                    <Collapse navbar className="mt-5">
                        <Nav
                            className="me-auto mx-auto"
                            navbar
                        >
                            <NavItem>
                                <NavLink>
                                    HOME
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    ABOUT
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    ROADMAP
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    UTILITY
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    TEAMS
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    FAQ
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <img src={ConnectBTN} alt="ConnectBTn" className="mr-4 connect-btn" type="button" />
                    </Collapse>
                </Navbar>
                <Nav vertical className="custom-nav social-links ">
                    <NavItem>
                        <NavLink >
                            <img src={Medium} alt="Medium" />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink >
                            <img src={OpenSea} alt="OpenSea" />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink >
                            <img src={Discord} alt="Discord" />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink >
                            <img src={Twitter} alt="twitter" />
                        </NavLink>
                    </NavItem>
                </Nav>
                <div className="text-center ">
                    <img src={MintBTN} alt="MintBTN" className="mint-btn" type="button" />
                </div>
            </div>

        </>
    )
}

export default Header
