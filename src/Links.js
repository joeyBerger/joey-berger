import React, {useEffect,useState} from 'react'
import { Col } from 'react-bootstrap';
import {linkImages,rows,roundedImages} from './LinksImages'
import { fadeWaitTime } from './PresentationConfig'

const Links = props => {
    
    const openTab = (e,link) => {
        e.preventDefault()
        window.open(link, "_blank");
    }

    const [animationDone,setAnimationDone] = useState(false)

    useEffect(() => {
        if (props.doAnimation && !animationDone) {
            setAnimationDone(true)
            animateImages()
        }
    },[[props.doAnimation]])

    const animateImages = () => {
        const lists = document.getElementsByClassName('link-container')
        for (let i = 0, k = 0; i < lists.length; i++) {
            const children = lists[i].children
            for (let j = 0; j < children.length; j++) {
                setTimeout(() => {
                    children[j].classList.add('component-alpha-anim')
                    children[j].classList.remove('comp-zero-opacity')
                },k++*fadeWaitTime.image)
            }
        }
    }

    return (
        <s>
            {rows.map((row,i) => 
                <Col md={{ span: 11, offset: 2 }} className='d-flex justify-content-start link-container' style={i ? {marginTop:'40px'} : {}} key={linkImages[row[0]].alt}>
                    {row.map(img => <img className={`comp-zero-opacity ${roundedImages.includes(linkImages[img].alt) ? 'round-image' : ''}`} src={img} alt={linkImages[img].alt} key={linkImages[img].link} onClick={(e) => {openTab(e,linkImages[img].link)}}></img>)}
                </Col>               
            )}
        </s>
    )
}

export default Links