import React from 'react';
import './Sass/Variable.scss';
import FormPage from './Pages/FormPage/FormPage';
function App() {
    console.log(process.env.REACT_APP_API_URL)
    return (
        <>
        <h1>Hai</h1>
        <FormPage/>
        </>
    );
}

export default App;
