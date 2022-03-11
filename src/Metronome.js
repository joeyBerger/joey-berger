import React from 'react';
// import ProMetronome from 'react-pro-metronome'
// import ReactMetronome from 'react-metronome'
import { Jumbotron, Button, Container, Navbar, NavDropdown, Nav, Row, Col } from 'react-bootstrap';
// import Slider from '@material-ui/core/Slider';
// import { Slider, Handles, Tracks } from 'react-compound-slider'
import Slider from '@material-ui/core/Slider';
// import 'primereact/resources/themes/saga-blue/theme.css';
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';

// import { Toast } from 'primereact/toast';
import { IoPlayOutline, IoPauseOutline, IoEllipseSharp} from "react-icons/io5";


class Metronome extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            qNote : 1,
            subNote : 1,
            isPlaying : false,
            bpm : 100,
            beatsPerMeasure : 4,
            // sliderValue : 100
        }
        this.highlightBeat = false;
    }   
    // BsPlay IoPlayOutline

    handlePlayPauseButtonPressed = (e) => {
        e.preventDefault();
        // this.setState(function(prevState, props){
        //     return {isPlaying: !prevState.isPlaying}
        // });
        // this.setState(((prevState, props) => {
        //     return {
        //         isPlaying: !prevState.isPlaying,
        //         qNote : 1,
        //     }
        // }));

        this.setState((prevState) => ({
            isPlaying: !prevState.isPlaying,
            // qNote : 1,
        }))
    }

    handleChange = (event, newValue) => {
        // setValue(newValue);
        this.setState(() => ({
            // sliderValue : newValue
            bpm : newValue,
            isPlaying: false,
        }))
      };

    render() {
        return(
            <div>
                
            </div>
            // <div className="App">
            // <ProMetronome
            //     bpm={this.state.bpm}
            //     subdivision={1}
            //     soundEnabled={true}
            //     soundPattern="3111"
            //     // soundPattern="41414141"
            //     isPlaying={this.state.isPlaying}
            //     render={(props, state) => (
            //         <div>
            //         {state.qNote}/{state.subNote}

            //         <Container>
            //         <Row>
            //             <Col md={{ span: 10, offset: 1 }}> 
            //                 <div id="rcorners4">
            //                     {/* <div className = "tempo-title">
            //                         Tempo :
            //                     </div> */}
            //                     <div className = "tempo-tempo">
            //                         {this.state.bpm}
            //                     </div>                       
            //                     <Slider 
            //                         value={this.state.bpm} 
            //                         onChange={this.handleChange} 
            //                         aria-labelledby="continuous-slider" 
            //                         // valueLabelDisplay="on"
            //                         min={40}
            //                         step={1}
            //                         max={300}
            //                         defaultValue={100}                                
            //                     />         
            //                     {this.state.isPlaying && 
            //                         <IoPauseOutline size={70} style={{ color: 'blue' }} onClick = {this.handlePlayPauseButtonPressed}/>
            //                     }
            //                     {!this.state.isPlaying && 
            //                         <IoPlayOutline size={70} onClick = {this.handlePlayPauseButtonPressed}/>
            //                     }
            //                     <Container>
            //                     <Row>
            //                         {Array.from(Array(this.state.beatsPerMeasure)).map((x, index) => {
            //                             this.highlightBeat = this.state.isPlaying && state.hasPlayed && (state.qNote-2 === index || index === (this.state.beatsPerMeasure-1) && state.qNote === 1)
            //                             return (
            //                                 <Col key={index}>
            //                                     <div>                                                
            //                                         <IoEllipseSharp size={this.highlightBeat ? 80 : 70} style={{ color: this.highlightBeat ? "blue" : "black" }} />
            //                                     </div>
            //                                 </Col>
            //                             )
            //                         })}
            //                     </Row>
            //                     </Container>
            //                 </div>
            //             </Col>
            //         </Row>
            //         </Container>

            //         </div>
            //     )}
            // />
            // </div>
        )
    }
}

export default Metronome;