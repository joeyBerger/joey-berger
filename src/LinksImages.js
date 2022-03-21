import github from './images/links/github.png';
import linkedin from './images/links/linkedin.png';
import unr from './images/links/unr.png';
import guitarMult from './images/links/guitar-mult.png'
import oldEKG from './images/links/old-ekg.png'

const linkImages = {}
linkImages[github] = {alt : 'github', link: 'https://github.com/joeyBerger/'}
linkImages[linkedin] = {alt : 'linkedin', link: 'https://www.linkedin.com/in/berger-joseph/'}
linkImages[unr] = {alt : 'unr', link: 'https://www.unr.edu/music/people/joey-berger'}
linkImages[guitarMult] = {alt : 'guitarMult', link: 'https://apps.apple.com/us/app/guitar-mult/id1533512980/'}
linkImages[oldEKG] = {alt : 'oldEKG', link: 'https://apps.apple.com/us/app/old-ekg/id1448210793/'}

const rows = [
    [github,linkedin,unr],
    [guitarMult,oldEKG],
]

export {linkImages,rows}