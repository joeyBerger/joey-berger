import swift from './images/stacks/swift.png'
import python from './images/stacks/python.png'
import javascript from './images/stacks/javascript.png'
import csharp from './images/stacks/csharp.png'
import cplusplus from './images/stacks/cplusplus.png'
import solidity from './images/stacks/solidity.png'
import react from './images/stacks/react.png'
import nodejs from './images/stacks/nodejs.png'
import mongo from './images/stacks/mongo.png'

const  stackImages = {}
stackImages[swift] = 'swift'
stackImages[python] = 'python'
stackImages[javascript] = 'javascript'
stackImages[csharp] = 'csharp'
stackImages[cplusplus] = 'cplusplus'
stackImages[solidity] = 'solidity'
stackImages[react] = 'react'
stackImages[nodejs] = 'nodejs'
stackImages[mongo] = 'mongo'

const rows = [
    [javascript,react,nodejs],
    [mongo,python,swift],
    [cplusplus,csharp,solidity],
]

export {stackImages,rows}