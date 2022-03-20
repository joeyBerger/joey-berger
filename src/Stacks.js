import React from 'react'
import swift from './images/stacks/swift.png'
import python from './images/stacks/python.png'
import javascript from './images/stacks/javascript.png'
import csharp from './images/stacks/csharp.png'
import cplusplus from './images/stacks/cplusplus.png'
import solidity from './images/stacks/solidity.png'
import react from './images/stacks/react.png'
import nodejs from './images/stacks/nodejs.png'
import mongo from './images/stacks/mongo.png'
import { Col } from 'react-bootstrap'

const Stacks = () => {
    const stacks = {}
    stacks[swift] = 'swift'
    stacks[python] = 'python'
    stacks[javascript] = 'javascript'
    stacks[csharp] = 'csharp'
    stacks[cplusplus] = 'cplusplus'
    stacks[solidity] = 'solidity'
    stacks[react] = 'react'
    stacks[nodejs] = 'nodejs'   

    const rows = [
        [javascript,react,nodejs],
        [mongo,python,swift],
        [cplusplus,csharp,solidity],
    ]
    
    return (
        <>            
            {rows.map(row => 
                <Col md={{ span: 11, offset: 2 }} className='d-flex justify-content-start stack-container'>
                    {row.map(logo => <img src={logo} alt={stacks[logo]} className='stack'></img>)}
                </Col>
            )}            
        </>        
    )
}

export default Stacks