import React, {useState} from 'react'
import MainContent from './MainContent'
import background from './images/landing/MainImage_NoJB.jpeg'
import cutout from './images/landing/MainImage_Cutout.png'
import Loading from './Loading'

const LoadingController = () => {
    const [loadedImages, incrementLoadedImage] = useState(0);
    const totalImagesToLoad = 21

    const onLoad = () => incrementLoadedImage(loadedImages+1)

    return (
        <>
            {loadedImages !== totalImagesToLoad
                ?
                <>
                    <Loading />
                    <span style={{display:'none'}}>
                        <img src={background} onLoad={onLoad}></img>
                        <img src={cutout} onLoad={onLoad}></img>
                    </span>
                </>
                :
                <MainContent mainImages={{background,cutout}}/>
            }
        </>
    )
}

export default LoadingController