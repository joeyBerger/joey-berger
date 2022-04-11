import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { landingPageContent } from './LandingPageContent';
import Stacks from './Stacks';
import Links from './Links'
import Contact from './Contact';
import MediaList from './MediaList';
import CategoryComponentList from './CategoryComponentList';

const CategoryComponent = props => {

    const [doAnimation,setDoAnimation] = useState(false)
	
	useEffect(() => {
		if (!props.sectionsToAnimate.includes(props.id) && !doAnimation) {
			console.log('animating',props.id)
			setDoAnimation(true)
		}
    }, [props.sectionsToAnimate])


    return (
        <Container fluid className={`info-container ${!(props.idx%2)?'white-background':''}`} id={props.id} style = {{padding:`${props.containerPadding}px`}}>
            <Row>
                <Col md={{ span: 11, offset: 1 }}>
                    <h1>{landingPageContent[props.id].header}</h1>
                    {landingPageContent[props.id].listContent && typeof landingPageContent[props.id].listContent === 'object'
                    ?
						<CategoryComponentList landingPageContent={landingPageContent} id={props.id} doAnimation={doAnimation}/>
                    :
                    <>
                        {landingPageContent[props.id].listContent === 'contact' 
                        ? 
                            <Contact/>
                        :
                            <>{props.id === 'links' ? <Links/> : <Stacks/>}</>
                        }
                    </>
                    }
                    {landingPageContent[props.id].mediaLinks && 
                        <MediaList mediaLinks={landingPageContent[props.id].mediaLinks} reactPlayerDimensions={props.reactPlayerDimensions} />
                    }
                </Col>
            </Row>
        </Container>        
    )
}

export default CategoryComponent