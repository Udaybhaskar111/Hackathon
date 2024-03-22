import React from 'react';
import './Sass/Variable.scss';
import Home from './Pages/Home/Home';
<<<<<<< Updated upstream
import List from './Pages/ListPage/List'
=======
import TabSwitch from './Components/Common/TabSwitch/TabSwitch';

>>>>>>> Stashed changes
function App() {
    console.log(process.env.REACT_APP_API_URL)
    return (
        <>
            {/* <Home/>
             */}
             <TabSwitch/>
        </>
    );
}

export default App;
