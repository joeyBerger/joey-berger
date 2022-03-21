import React from 'react'
import { Col } from 'react-bootstrap'
import {rows, stackImages} from './StacksImages'

const Stacks = () =>    
    <>
        {rows.map(row => 
            <Col md={{ span: 11, offset: 2 }} className='d-flex justify-content-start stack-container' key={stackImages[row[0]].substr(1)}>
                {row.map(logo => <img src={logo} alt={stackImages[logo]} className='stack' key={stackImages[logo]}></img>)}
            </Col>
        )}
    </>

export default Stacks