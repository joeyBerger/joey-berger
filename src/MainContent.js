import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Contact from './Contact'
import { landingPageContent } from './LandingPageContent';
import ReactPlayer from "react-player"
import { isMobile } from 'react-device-detect';
import Landing from './Landing'
import CategoryComponent from './CategoryComponent'
import CustomNavbar from './CustomNavbar';
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
            height : width*.75,
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

    categories = {
        software : 'Software Engineer',
        sound : 'Composition/Sound Design',
        guitar : 'Guitarist',
        links : 'Links',
        stacks : 'Stacks/Languages',
        contact : 'Contact',
    }

    components = [
        // {software : }
    ]

    render() {        
        return(
        <div className="container-xs">
            <CustomNavbar scrollToDiv={this.scrollToDiv} setNavBarExpanded={this.setNavBarExpanded} expanded={this.state.expanded} categories={this.categories}/>
            <Landing isMobile={isMobile}/>
            <div className="scrollable-container">
                {Object.keys(this.categories).map((c,i) => {                
                    return <CategoryComponent id={c} containerPadding={this.containerPadding} reactPlayerDimensions={this.reactPlayerDimensions} idx={i}/>
                })}
                {/* <CategoryComponent id='software' containerPadding={this.containerPadding} reactPlayerDimensions={this.reactPlayerDimensions} idx={0}/> */}
                {/* <Container fluid className="info-container white-background" id = "software" style = {{padding:`${this.containerPadding}px`}}>
                    <Row>
                        <Col md={{ span: 11, offset: 1 }}>
                            <h1>{landingPageContent.software.header}</h1>
                            <ul>
                                {landingPageContent.software.listContent.map(l => 
                                    l.includes('Guitar Mult') 
                                    ? 
                                        <li key={l}>iOS developer for personal projects and clients. <a href='https://apps.apple.com/us/app/guitar-mult/id1533512980'>Guitar Mult</a> and <a href='https://apps.apple.com/us/app/old-ekg/id1448210793'>Old EKG</a> among apps I have engineered.</li>
                                    :
                                        <li key ={l}>{l}</li>                                    
                                )}
                            </ul>
                            <Container>
                                <Row className='media-container'>
                                    {landingPageContent.software.mediaLinks.map(l => <Col key={l}><ReactPlayer url={l} width = {this.reactPlayerDimensions.width} height = {this.reactPlayerDimensions.height} controls={true} className="media"/></Col>)}
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container> */}
                {/* <Container fluid className="info-container" id = "sound" style = {{padding:`${this.containerPadding}px`}}>
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

                
                <Container fluid className="info-container" id = "contact" style = {{padding:`${this.containerPadding}px`}}>
                    <Row>
                        <Col md={{ span: 11, offset: 1 }}>
                            <h1>Contact</h1>
                        </Col>
                        <Contact /> 
                    </Row>
                </Container> */}
            </div>
        </div>
        )
    }
}

export default MainContent