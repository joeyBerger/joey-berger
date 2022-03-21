import React from 'react'
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import Contact from './Contact'
import { landingPageContent } from './LandingPageContent';
import ReactPlayer from "react-player"
import { isMobile } from 'react-device-detect';
import Stacks from './Stacks';
import Links from './Links'

class MainContent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            expanded : false,
        }
        
        this.containerPadding = 50;
        const width = isMobile ? window.innerWidth * .7 : 500
        this.reactPlayerDimensions = {
            width : `${width}px`,
            height : width*.75//'400px'
        }
    }    

    scrollToDiv = (e,id) => {
        e.preventDefault();
        const elem = document.getElementById(id);
        const additionalPadding = id.includes('contact') ? 0 : this.containerPadding
        window.scrollTo({
            top: elem.offsetTop-additionalPadding,
            left: 0,
            behavior: 'smooth'
        });
        this.setNavBarExpanded(undefined,false)
    }

    setNavBarExpanded = (e,expanded) => {
        if (e) e.preventDefault()
        this.setState(() => ({expanded}))
    }

    render() {        
        return(
        <div className="container-xs">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" expanded={this.state.expanded}>
            <Navbar.Brand>Joey Berger</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={(e) => this.setNavBarExpanded(e,!this.state.expanded)}/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>      
                <Nav.Link onClick = {(e) => {this.scrollToDiv(e,"software")}}>
                    Software Engineer
                </Nav.Link> 
                <Nav.Link onClick = {(e) => {this.scrollToDiv(e,"sound")}}>
                    Composition/Sound Design
                </Nav.Link> 
                <Nav.Link onClick = {(e) => {this.scrollToDiv(e,"guitar")}}>
                    Guitarist
                </Nav.Link>
                <Nav.Link onClick = {(e) => {this.scrollToDiv(e,"links")}}>
                    Links
                </Nav.Link>
                <Nav.Link onClick = {(e) => {this.scrollToDiv(e,"stacks")}}>
                    Stacks/Languages
                </Nav.Link>
                <Nav.Link onClick = {(e) => {this.scrollToDiv(e,"contact")}}>
                    Contact
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            <div className="image-container">
                <div className = {`background-img ${isMobile ? 'mobile-source' : ''} fade-in`}></div>
                <Container className="centered">
                    <Row>
                        <Col sm={12} lg={12} className="d-none d-xl-block centered">
                        Joey Berger
                        <div className="header-subtext">Software Engineer - Sound Designer - Composer - Guitarist</div>
                        </Col>
                        <Col sm={12} lg={12} className="d-none d-lg-block d-xl-none centered-lg">
                        Joey Berger
                        <div className="header-subtext">Software Engineer - Sound Designer - Composer - Guitarist</div>
                        </Col>
                        <Col sm={12} lg={12} className="d-none d-md-block d-lg-none centered-md">
                        Joey Berger
                        <div className="header-subtext-md">Software Engineer - Sound Designer - Composer - Guitarist</div>
                        </Col>
                        <Col xs={12} className="d-none d-sm-block d-md-none centered-sm">
                        Joey Berger
                        </Col>
                        <Col xs={12} className="d-none d-xs-block d-sm-none centered-xs">
                        Joey Berger
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="scrollable-container">
                <Container fluid className="info-container white-background" id = "software" style = {{padding:`${this.containerPadding}px`}}>
                    <Row>
                        <Col md={{ span: 11, offset: 1 }}>
                            <h1>{landingPageContent.software.header}</h1>
                            <ul>
                                {landingPageContent.software.listContent.map(l => {
                                        if (l.includes('Guitar Mult')) {
                                            return <li>iOS developer for personal projects and clients. <a href='https://apps.apple.com/us/app/guitar-mult/id1533512980'>Guitar Mult</a> and <a href='https://apps.apple.com/us/app/old-ekg/id1448210793'>Old EKG</a> among apps I have engineered.</li>
                                        } else {
                                            return <li key ={l}>{l}</li>
                                        }                                        
                                    }                                    
                                )}
                            </ul>
                            <Container>
                                <Row className='media-container'>
                                    {landingPageContent.software.mediaLinks.map(l => <Col key={l}><ReactPlayer url={l} width = {this.reactPlayerDimensions.width} height = {this.reactPlayerDimensions.height} controls={true} className="media"/></Col>)}
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="info-container" id = "sound" style = {{padding:`${this.containerPadding}px`}}>
                    <Row>
                        <Col md={{ span: 11, offset: 1 }}>
                            <h1>{landingPageContent.sound.header}</h1>
                            <ul>
                                {landingPageContent.sound.listContent.map(l => <li key ={l}>{l}</li>)}
                            </ul>
                            <Container>
                                <Row className='media-container'>
                                    {landingPageContent.sound.mediaLinks.map(l => <Col key={l}><ReactPlayer url={l} width = {this.reactPlayerDimensions.width} height = {this.reactPlayerDimensions.height} className="media"/></Col>)}
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="info-container white-background" id = "guitar" style = {{padding:`${this.containerPadding}px`}}>
                    <Row>
                        <Col md={{ span: 11, offset: 1 }}>
                            <h1>{landingPageContent.guitar.header}</h1>
                            <ul>
                                {landingPageContent.guitar.listContent.map(l => <li key ={l}>{l}</li>)}
                            </ul>   
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="info-container" id = "links" style = {{padding:`${this.containerPadding}px`}}>
                    <Row>
                        <Col md={{ span: 11, offset: 1 }}>
                            <h1>Links</h1>
                        </Col>
                        <Links/>
                    </Row>
                </Container>
                <Container fluid className="info-container white-background" id = "stacks" style = {{padding:`${this.containerPadding}px`}}>
                    <Row>
                        <Col md={{ span: 11, offset: 1 }}>
                            <h1>Stacks/Languages</h1>
                        </Col>
                        <Stacks/>
                    </Row>
                </Container>
                <div className='contact-container'>
                    <h1 className="contact-header" id = "contact">
                        Contact
                    </h1>
                    <div id = "contact">
                        <Contact /> 
                    </div >
                </div>
            </div>
        </div>
        )
    }
}

export default MainContent