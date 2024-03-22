import React from 'react';
import './Sass/Variable.scss';
import FormPage from './Pages/FormPage/FormPage';
import Header from './Components/Common/Header/Header';
function App() {
    console.log(process.env.REACT_APP_API_URL)
    return (
        <>
        <Header/>
        <FormPage/>
        </>
    );
}

export default App;
