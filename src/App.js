import React from 'react';
import './Sass/Variable.scss';
import JobDescription from './Components/Common/JobDescription/JobDescription';
function App() {
    console.log(process.env.REACT_APP_API_URL)
    return (
        <div>
            <JobDescription />
        </div>
    );
}

export default App;
