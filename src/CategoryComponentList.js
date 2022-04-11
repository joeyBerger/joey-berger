import React, {useEffect, useState} from "react";

const CategoryComponentList = props => {

    const [animationDone,setAnimationDone] = useState(false)

    useEffect(() => {
        if (props.doAnimation && !animationDone) {
            setAnimationDone(true)
            animateText()
        }
    },[[props.doAnimation]])

    const animateText = () => {
        const list = document.getElementsByClassName(`${props.id}-list`)[0]
        const children = list.children
        for (let i = 0; i < children.length; i++) {
            setTimeout(() => {
                children[i].classList.add('text-anim')
                children[i].classList.remove('comp-zero-opacity')
            },i*100)
        }
    }

    return (
        <ul className={`${props.id}-list`}>
            {props.landingPageContent[props.id].listContent.map(l => 
                l.includes('Guitar Mult') 
                ? 
                    <li className = 'comp-zero-opacity' key={l}>iOS developer for personal projects and clients. <a href='https://apps.apple.com/us/app/guitar-mult/id1533512980'>Guitar Mult</a> and <a href='https://apps.apple.com/us/app/old-ekg/id1448210793'>Old EKG</a> among apps I have engineered.</li>
                :
                    <li className = 'comp-zero-opacity' key ={l}>{l}</li>                                    
            )}
        </ul>  
    )
}

export default CategoryComponentList