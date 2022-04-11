import React from 'react'
import { isMobile } from 'react-device-detect';
import Landing from './Landing'
import CategoryComponent from './CategoryComponent'
import CustomNavbar from './CustomNavbar';
import { categories } from './LandingPageContent';
import { scrollEventController } from './ScrollEventController'

class MainContent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            expanded : false,
            reactPlayerDimensions : this.returnReactPlayerDimensions(),
            sectionsToAnimate : Object.keys(categories).map(c => c)
        }
        
        window.addEventListener('resize', () => {
            this.setState(() => ({
                reactPlayerDimensions : this.returnReactPlayerDimensions()
            }))
        });

        this.containerPadding = 50;

        scrollEventController(this.state.sectionsToAnimate,this.removeSectionFromAnimationList)
    }

    returnReactPlayerDimensions = () => {
        const width = isMobile ? window.innerWidth * .7 : window.innerWidth >= 600 ? 500 : window.innerWidth*.76
        return {
            width : `${width}px`,
            height : width*.75,
        }
    }

    scrollToDiv = (e,id) => {
        e.preventDefault();
        const elem = document.getElementById(id);
        const additionalPadding = id.includes('contact') ? 0 : this.containerPadding
        window.scrollTo({
            top: elem.offsetTop-additionalPadding,
            left: 0,
            behavior: 'smooth'
        });
        this.setNavBarExpanded(undefined,false)
    }

    setNavBarExpanded = (e,expanded) => {
        if (e) e.preventDefault()
        this.setState(() => ({expanded}))
    }

    removeSectionFromAnimationList = id => {
        if (this.state.sectionsToAnimate.includes(id)) {
            this.setState((ps) => {
                ps.sectionsToAnimate = ps.sectionsToAnimate.filter(k => k !== id)
                return ps.sectionsToAnimate
            })
        }

    }

    render() {
        return(
            <div className="container-xs">
                <CustomNavbar scrollToDiv={this.scrollToDiv} setNavBarExpanded={this.setNavBarExpanded} expanded={this.state.expanded} categories={categories}/>
                <Landing isMobile={isMobile} mainImages={this.props.mainImages}/>
                <div className="scrollable-container">
                    {Object.keys(categories).map((c,i) => 
                        <CategoryComponent 
                            id={c} 
                            containerPadding={this.containerPadding} 
                            reactPlayerDimensions={this.state.reactPlayerDimensions} 
                            idx={i} 
                            key={c.substring(1)}
                            sectionsToAnimate={this.state.sectionsToAnimate}
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default MainContent