import React, {useContext, useEffect, useState} from 'react';
import {Container, Nav, Navbar, NavDropdown, Button} from "react-bootstrap";
import './Header.css'
import '../../index.css'
import {Link, useLocation} from "react-router-dom";
import icon from '../../assets/header_icon.png'
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import {AuthContext, ThemeContext} from "../../Contexts/AuthProvider";
import {FaMoon, FaSun, FaUser} from "react-icons/fa";
import ReactTooltip from "react-tooltip";

const Header = () =>{
    const {theme, setTheme} = useContext(ThemeContext);
    const {user, logOut, setUser } = useContext(AuthContext);
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    useEffect(() => {
        setUser(user);
    }, []);


    const handleLogOut = () => {
        logOut()
            .then(() => {
            })
            .catch(error => console.error(error))
    }

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    return (
        <div className="container pt-3">
            <Navbar className="nav-style" collapseOnSelect expand="lg" bg="" variant="dark">
                <Container>
                    <Navbar.Brand><Link className="text-decoration-none text-white" to="/"><span><img src={icon}
                                                                                                      alt=""/></span> Learn
                        Technology</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto nav-link">
                            <Link to="/" className={splitLocation[1] === "" ? "activeBtn" : ""}>Home</Link>
                            <Link to="/courses" className={splitLocation[1] === "courses" ? "activeBtn" : ""}>Courses</Link>
                            <Link to="/faq" className={splitLocation[1] === "faq" ? "activeBtn" : ""}>FAQ</Link>
                            <Link to="/blog" className={splitLocation[1] === "blog" ? "activeBtn" : ""}>Blog</Link>
                        </Nav>

                        <Nav>
                            <div className="">
                                <span onClick={switchTheme} className="me-5 fs-2 text-white sun ">
                                    {theme === 'light' ? <FaMoon className="point"/> : <FaSun className="point"/>}
                                </span>
                            </div>
                        </Nav>

                        <Nav className="nav-link">

                            {
                                user?.uid ?
                                    <>
                                        <span>
                                            {
                                                user?.photoURL ?
                                                    <>
                                                        <img
                                                            className="profile-image rounded"
                                                            src={user?.photoURL} alt=""
                                                            data-tip={user?.displayName ? user?.displayName : user?.email}
                                                            data-for="tool1"
                                                        />
                                                        <ReactTooltip id="tool1" place="bottom" effect="solid" />
                                                    </>
                                                    :
                                                    <>
                                                        <FaUser
                                                            data-tip={user?.displayName ? user?.displayName : user?.email}
                                                            data-for="tool1"/>
                                                        <ReactTooltip id="tool1" place="bottom" effect="solid" />
                                                    </>
                                            }
                                        </span>
                                        <Button
                                            className="ms-lg-4 me-lg-2 mt-lg-0 mt-3"
                                            variant="danger"
                                            onClick={handleLogOut}>Log out</Button>

                                    </>
                                    :
                                    <>
                                        <Link to="/login" className={splitLocation[1] === "login" ? "activeBtn" : ""}>Login</Link>
                                        <Link to="/register" className={splitLocation[1] === "register" ? "activeBtn" : ""}>Register</Link>
                                    </>
                            }
                        </Nav>

                        <Nav className="d-lg-none">
                            <LeftSideBar/>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
