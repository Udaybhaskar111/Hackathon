import React from 'react';
import './Sass/Variable.scss';
import Home from './Pages/Home/Home';
import List from './Pages/ListPage/List'
function App() {
    console.log(process.env.REACT_APP_API_URL)
    return (
        <>
            <Home/>
        </>
    );
}

export default App;
