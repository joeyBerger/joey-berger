import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Landing = props => {
    setTimeout(() => {
        const elem = document.getElementById('background-image')
        elem.classList.remove('shimmer');
        elem.classList.add('shimmer-idle');
    },15000)
    return (
        <>
            <div className="image-container">
                <div className = {`background-img ${props.isMobile ? 'mobile-source' : ''}`}>
                    <div style={{position:'fixed',height:'100%',width:'100%'}}>
                        <img src={props.mainImages.background} alt='background' className='landing-image shimmer' id='background-image'></img>
                        <img src={props.mainImages.cutout} alt='cutout' className={`landing-image landing-image-anim ${props.isMobile ? 'mobile-anim' : ''}`}></img>                        
                    </div>                     
                </div>                
                <Container className='title'>
                    <Row>
                        <Col xl={12} className="d-none d-xl-block centered">
                            Joey Berger
                            <div className="header-subtext">Software Engineer - Sound Designer - Composer - Guitarist</div>
                        </Col>
                        <Col lg={12} className="d-none d-lg-block d-xl-none centered-lg">
                            Joey Berger
                            <div className="header-subtext">Software Engineer - Sound Designer - Composer - Guitarist</div>
                        </Col>
                        <Col md={12} className="d-none d-md-block d-lg-none centered-md">
                            Joey Berger
                            <div className="header-subtext-md">Software Engineer - Sound Designer - Composer - Guitarist</div>
                        </Col>
                        <Col sm={{offset:1}} className="d-none d-sm-block d-md-none centered-sm">
                            Joey Berger
                        </Col>
                        <Col xs={{offset:1}} className="d-none d-xs-block d-sm-none centered-sm">
                            Joey Berger
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Landing