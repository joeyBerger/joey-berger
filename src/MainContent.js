import React from 'react'
import { isMobile } from 'react-device-detect';
import Landing from './Landing'
import CategoryComponent from './CategoryComponent'
import CustomNavbar from './CustomNavbar';

class MainContent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            expanded : false,
        }
        
        this.containerPadding = 50;
        const width = isMobile ? window.innerWidth * .7 : 500
        this.reactPlayerDimensions = {
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

    categories = {
        software : 'Software Engineer',
        sound : 'Composition/Sound Design',
        guitar : 'Guitarist',
        links : 'Links',
        stacks : 'Stacks/Languages',
        contact : 'Contact',
    }

    render() {        
        return(
        <div className="container-xs">
            <CustomNavbar scrollToDiv={this.scrollToDiv} setNavBarExpanded={this.setNavBarExpanded} expanded={this.state.expanded} categories={this.categories}/>
            <Landing isMobile={isMobile}/>
            <div className="scrollable-container">
                {Object.keys(this.categories).map((c,i) => 
                    <CategoryComponent id={c} containerPadding={this.containerPadding} reactPlayerDimensions={this.reactPlayerDimensions} idx={i} key={c.substring(1)}/>
                )}
            </div>
        </div>
        )
    }
}

export default MainContent