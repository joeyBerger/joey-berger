import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { landingPageContent } from './LandingPageContent';
import ReactPlayer from "react-player"

const CategoryComponent = props => {
    return (
        <Container fluid className={`info-container ${!props.idx%2?'white-background':''}`} id={props.id} style = {{padding:`${props.containerPadding}px`}}>
            <Row>
                <Col md={{ span: 11, offset: 1 }}>
                    <h1>{landingPageContent[props.id].header}</h1>
                    <ul>
                        {landingPageContent[props.id].listContent.map(l => 
                            l.includes('Guitar Mult') 
                            ? 
                                <li key={l}>iOS developer for personal projects and clients. <a href='https://apps.apple.com/us/app/guitar-mult/id1533512980'>Guitar Mult</a> and <a href='https://apps.apple.com/us/app/old-ekg/id1448210793'>Old EKG</a> among apps I have engineered.</li>
                            :
                                <li key ={l}>{l}</li>                                    
                        )}
                    </ul>
                    {landingPageContent[props.id].mediaLinks && (
                        <Container>
                            <Row className='media-container'>
                                {landingPageContent[props.id].mediaLinks.map(l => <Col key={l}><ReactPlayer url={l} width = {props.reactPlayerDimensions.width} height = {props.reactPlayerDimensions.height} controls={true} className="media"/></Col>)}
                            </Row>
                        </Container>
                    )}
                </Col>
            </Row>
        </Container>        
    )

}

export default CategoryComponent