import React from 'react';
import './Sass/Variable.scss';
import Home from './Pages/Home/Home';
import FormPage from './Pages/FormPage/FormPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
export const detailComp = createContext(null);
function App() {
  const [detailCard, setDetailCard] = useState();
  return (
    <>
      <detailComp.Provider value={{ detailCard, setDetailCard }}>
        <BrowserRouter>
          <React.StrictMode>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/form" element={<FormPage />} />
              <Route path="/detailpage" element={<Home />} />
            </Routes>
          </React.StrictMode>
        </BrowserRouter>
      </detailComp.Provider>
    </>
  );
}

export default App;
