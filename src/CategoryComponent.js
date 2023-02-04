import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { landingPageContent } from './LandingPageContent';
import Stacks from './Stacks';
import Links from './Links'
import Contact from './Contact';
import MediaList from './MediaList';
import CategoryComponentList from './CategoryComponentList';
import { checkWindowHeight } from './ScrollEventController';

const CategoryComponent = props => {

    const [doAnimation,setDoAnimation] = useState(false)
	
	useEffect(() => {
        if (!doAnimation && props.id === 'software') {
            if (checkWindowHeight()) {
                activateHeaderAnimation()
                setDoAnimation(true)
            }
        }
		if (!props.sectionsToAnimate.includes(props.id) && !doAnimation) {
            activateHeaderAnimation()
			setDoAnimation(true)
		}
    }, [props.sectionsToAnimate])

    const activateHeaderAnimation = () => {
        const elem = document.getElementsByClassName(`header-${props.id}`)[0]
        elem.classList.remove('component-alpha-anim');
        elem.classList.add('header-anim');
    }

    return (
        <Container fluid className={`info-container ${!(props.idx%2)?'border-section':''}`} id={props.id} style = {{padding:`${props.containerPadding}px`,color:props.id==='guitar'?'white':''}}>
            <Row>
                <Col md={{ span: 11, offset: 1 }}>
                    <h1 className={`comp-zero-opacity header-${props.id}`}>{landingPageContent[props.id].header}</h1>
                    {landingPageContent[props.id].listContent && typeof landingPageContent[props.id].listContent === 'object'
                    ?
						<CategoryComponentList landingPageContent={landingPageContent} id={props.id} doAnimation={doAnimation}/>
                    :
                    <>
                        {landingPageContent[props.id].listContent === 'contact' 
                        ? 
                            <Contact/>
                        :
                            <>{props.id === 'links' ? <Links doAnimation={doAnimation}/> : <Stacks doAnimation={doAnimation}/>}</>
                        }
                    </>
                    }
                    {landingPageContent[props.id].mediaLinks && 
                        <MediaList mediaLinks={landingPageContent[props.id].mediaLinks} reactPlayerDimensions={props.reactPlayerDimensions} id={props.id} doAnimation={doAnimation} textListLength={landingPageContent[props.id].listContent.length}/>
                    }
                </Col>
            </Row>
        </Container>        
    )
}

export default CategoryComponent