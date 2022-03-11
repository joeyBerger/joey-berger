import './App.css';
// import ProMetronome from 'react-pro-metronome'
// import Metronome from './Metronome'
import MainContent from './MainContent'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

function App() {
    
    useEffect(() => {
        // code to run on component mount
        document.title = "Joey Berger";

    }, [])

    return (
        <div>
            {/* <Metronome /> */}
            <MainContent />
        </div>
    );
}

export default App;
