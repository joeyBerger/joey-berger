import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import image from './images/landing/MainImage_NoJB.png'
import cutout from './images/landing/MainImage_Cutout.png'


const Landing = (props) => {
    setTimeout(() => {
        const elem = document.getElementById('background-image')
        // elem
        elem.classList.remove('shimmer');
        elem.classList.add('shimmer-idle');
    },15000)
    return (
        <>
            <div className="image-container">
                {/* <div className = {`background-img ${props.isMobile ? 'mobile-source' : ''} fade-in`}></div> */}
                <div className = {`background-img ${props.isMobile ? 'mobile-source' : ''}`}>
                    <div style={{position:'fixed',height:'100%',width:'100%'}}>
                        <img src={image} alt='test' className='img-test shimmer' id='background-image'></img>
                        <img src={cutout} alt='test' className='img-test img-test-anim'></img>                        
                    </div>                     
                </div>                
                <Container className='title'>
                    <Row>
                        <Col lg={12} className="d-none d-xl-block centered">
                            Joey Berger sss
                        <div className="header-subtext">Software Engineer - Sound Designer - Composer - Guitarist</div>
                        </Col>
                        <Col sm={12} className="d-none d-lg-block d-xl-none centered-lg">
                            Joey Berger xxx
                        <div className="header-subtext">Software Engineer - Sound Designer - Composer - Guitarist</div>
                        </Col>
                        <Col sm={12} lassName="d-none d-md-block d-lg-none centered-md">
                            Joey Berger
                        <div className="header-subtext-md">Software Engineer - Sound Designer - Composer - Guitarist</div>
                        </Col>
                        <Col xs={{offset:1}} className="d-none d-sm-block d-md-none centered-sm">
                            Joey Berger
                        </Col>
                        {/* <Col xs={12} className="d-none d-xs-block d-sm-none centered-xs">
                            Joey Berger
                        </Col> */}
                     </Row>
                </Container>
            </div>
        </>
    )
}

export default Landing