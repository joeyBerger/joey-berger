import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Landing = (props) => {
    return (
        <>
            <div className="image-container">
                <div className = {`background-img ${props.isMobile ? 'mobile-source' : ''} fade-in`}></div>
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
        </>
    )
}

export default Landing