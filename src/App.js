import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import LoadingController from './LoadingController'

function App() {
    useEffect(() => {
        document.title = "Joey Berger";
    }, [])
    
    return <LoadingController/>
}

export default App;
