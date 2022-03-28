import React, { useEffect, useState } from 'react'
import { Spinner, Col, Row, Container } from 'react-bootstrap'

const Loading = () => {

    let loadingDots = 1

    const returnLoadingText = () => {
        let dots = ''
        const maxDots = 3
        for (let i = 0; i < loadingDots%maxDots; i++) dots += '.'
        return `Loading.${dots}`
    }

    const [titleText,setTitleText] = useState(returnLoadingText(loadingDots))

    useEffect(() => {
        startTimeout()
    },[])

    const startTimeout = () => {
        setTitleText(returnLoadingText(loadingDots++))
        // setTimeout(startTimeout,200)
    }

    return (
        <div className='loading-container'>
            <div className='loading-subcontainer'>
                <div class="col-lg-6 offset-lg-3 ">
                    <h2 class="row justify-content-center loading-title">{titleText}</h2>
                    <div class="row justify-content-center">
                        <div className='loading-spinning-container'>
                            <Spinner animation="border" className='loading-spinner' variant="light"></Spinner>
                        </div>                            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading