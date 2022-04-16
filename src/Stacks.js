import React, {useState,useEffect} from 'react'
import { Col } from 'react-bootstrap'
import {rows, stackImages} from './StacksImages'

const Stacks = props => {

    const [animationDone,setAnimationDone] = useState(false)

    useEffect(() => {
        if (props.doAnimation && !animationDone) {
            setAnimationDone(true)
            animateImages()
        }
    },[[props.doAnimation]])

    const animateImages = () => {
        const lists = document.getElementsByClassName('stack-container')
        for (let i = 0, k = 0; i < lists.length; i++) {
            const children = lists[i].children
            for (let j = 0; j < children.length; j++) {
                setTimeout(() => {
                    children[j].classList.add('component-alpha-anim')
                    children[j].classList.remove('comp-zero-opacity')
                },k++*200)
            }
        }
    }

    return (
        <>
            {rows.map(row => 
                <Col md={{ span: 11, offset: 2 }} className='d-flex justify-content-start stack-container' key={stackImages[row[0]].substr(1)}>
                    {row.map(logo => <img className='comp-zero-opacity' src={logo} alt={stackImages[logo]} key={stackImages[logo]} style={{cursor:'default'}}></img>)}
                </Col>
            )}
        </>
    )
}

export default Stacks