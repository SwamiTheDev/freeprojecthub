
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css'
import { Sling as Hamburger } from 'hamburger-react'
import { useState } from 'react';


function Topnav() {
    const [isOpen, setOpen] = useState(false);
    // const [isClose, setClose] = useState(true);
    function Closebtn() {
        setOpen(false)
    }
    return (
        <>

            {['lg'].map((expand) => (
                <Navbar key={expand} sticky="top" expand={expand} className="bg-body-tertiary mb-3" style={{ height: '7vh' }}>
                    <Container >
                        <Nav.Link as={NavLink} to="/" >
                            <Navbar.Brand href="#" className={style.navbar_brand}>LearnDevProjects </Navbar.Brand>
                        </Nav.Link>
                        <Navbar.Toggle className={style.toggle_btn} aria-controls={`offcanvasNavbar-expand-${expand}`} ><Hamburger duration={0.5} toggled={isOpen} toggle={setOpen} direction="right" easing="ease-in" /></Navbar.Toggle>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                        >
                            <Offcanvas.Header closeButton onClick={Closebtn}>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    fg
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link as={NavLink} to="/home" className={style.navlink}>
                                        Home
                                    </Nav.Link>
                                    {/* <Nav.Link as={NavLink} to="/contact" className={style.navlink}>
                                        About
                                    </Nav.Link> */}
                                    <Nav.Link as={NavLink} to="/project" className={style.navlink}>
                                        Projects
                                    </Nav.Link>
                                    <Nav.Link as={NavLink} to="/Blog" className={style.navlink}>
                                        Blog
                                    </Nav.Link>
                                    <Nav.Link as={NavLink} to="/contact" className={style.navlink}>
                                        Contact
                                    </Nav.Link>

                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar >
            ))
            }
        </>
    );
}

export default Topnav;

