import React from 'react'
import { Col } from 'react-bootstrap';
import {linkImages,rows} from './LinksImages'

const Links = () => {
    
    const openTab = (e,link) => {
        e.preventDefault()
        window.open(link, "_blank");
    }

    return (
        <>
            {rows.map((row,i) => 
                <Col md={{ span: 11, offset: 2 }} className='d-flex justify-content-start' style={i ? {marginTop:'40px'} : {}} key={linkImages[row[0]].alt}>
                    {row.map(img => <img src={img} alt={linkImages[img].alt} key={linkImages[img].link} onClick={(e) => {openTab(e,linkImages[img].link)}}></img>)}
                </Col>                
            )}
        </>
    )
}

export default Links