import React from 'react';
import './Sass/Variable.scss';
import Welcome from './Components/Welcome/Welcome';
function App() {
  console.log(process.env.REACT_APP_API_URL);
  return (
    <div>
      <Welcome></Welcome>
    </div>
  );
}

export default App;
