import React, {useEffect, useState} from 'react'
import ReactPlayer from "react-player"
import { Container, Row, Col } from 'react-bootstrap';
import { fadeWaitTime } from './PresentationConfig';

const MediaList = props => {

    const [animationDone,setAnimationDone] = useState(false)

    useEffect(() => {
        if (props.doAnimation && !animationDone) {
            setAnimationDone(true)
            animateMediaItem()
        }
    },[[props.doAnimation]])

    const animateMediaItem = () => {
        const waitTime = fadeWaitTime.media
        const list = document.getElementsByClassName(`media-id-${props.id}`)
        for (let i = 0; i < list.length; i++) {
            setTimeout(() => {
                list[i].classList.add('component-alpha-anim')
                list[i].classList.remove('comp-zero-opacity') 
            },props.textListLength*waitTime+waitTime*i)
        }
    }

    return (
        <Container>
            <Row className='media-container'>
                {props.mediaLinks.map(l => <Col key={l}><ReactPlayer url={l} width = {props.reactPlayerDimensions.width} height = {props.reactPlayerDimensions.height} controls={true} className={`media comp-zero-opacity media-id-${props.id}`}/></Col>)}
            </Row>
        </Container>
    )

}



export default MediaList