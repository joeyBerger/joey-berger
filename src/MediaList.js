import React from 'react'
import ReactPlayer from "react-player"
import { Container, Row, Col } from 'react-bootstrap';

const MediaList = props => 
    <Container>
        <Row className='media-container'>
            {props.mediaLinks.map(l => <Col key={l}><ReactPlayer url={l} width = {props.reactPlayerDimensions.width} height = {props.reactPlayerDimensions.height} controls={true} className="media"/></Col>)}
        </Row>
    </Container>

export default MediaList