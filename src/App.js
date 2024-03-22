import React from 'react';
import './Sass/Variable.scss';
import {AllCards}  from './Components/AllCards/AllCards.jsx';
function App() {
    console.log(process.env.REACT_APP_API_URL)
    return (
        <AllCards/>
        
    );
}

export default App;
