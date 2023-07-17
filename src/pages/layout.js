import * as React from "react"
import { Link } from "gatsby"
import "../custom.scss"
import logo from '../images/logo.svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import bg1Img from '../images/bg1.svg'
import bg2Img from '../images/bg2.svg'
import bg3Img from '../images/bg3.svg'
import bg4Img from '../images/bg4.svg'



const Layout = ({ pageTitle, children }) => {
  return (
    <div className="top position-relative">
      <img src={bg2Img} alt="" className="position-absolute w-100 bottom-0" id="bg2Img"/>
      <img src={bg1Img} alt="" className="position-absolute w-100 bottom-0" id="bg1Img"/>
      <img src={bg4Img} alt="" className="position-absolute w-100 top-0" id="bg4Img"/>
      <img src={bg3Img} alt="" className="position-absolute w-100 top-0" id="bg3Img"/>
      <Container>
        <Navbar expand="md" className="py-4">
          <Navbar.Brand href="#home" className="py-0 me-5"><img src={logo} alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="me-4 lh-lg font-poppins text-black">Home</Nav.Link>
              <Nav.Link href="#link" className="me-4 lh-lg font-poppins text-black">Features</Nav.Link>
              <Nav.Link href="#link" className="me-4 lh-lg font-poppins text-black">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <main>
          {children}
        </main>
        <footer className="d-block d-lg-flex text-center text-lg-start justify-content-between p-0 p-lg-5">
          <div>
            <a href="#home" className="me-3 font-poppins text-black text-decoration-none">Home</a>
            <a href="#link" className="me-3 font-poppins text-black text-decoration-none">Features</a>
            <a href="#link" className="me-3 font-poppins text-black text-decoration-none">Contact Us</a>
          </div>
          <p className="me-3 font-poppins text-black">Copyright 2023</p>
        </footer>
        <div className="pb-5"></div>
      </Container>
    </div>
  )
}

export default Layout

