import React from 'react';
import './app.css';
import Count from '../count';
import Buttons from '../buttons/buttons';

const App = () => {
    return (
        <div className="app-container">            
            <Count />
            <Buttons />
        </div>
    )
}
export default App;