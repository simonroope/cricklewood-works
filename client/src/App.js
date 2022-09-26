import { useState, useEffect, createContext} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
 
import './App.css';

import Navbar from './components/Navbar.js';
import Filter from './components/Filter.js';
import PartList from './components/PartList.js';
import PartDetail from './components/PartDetail.js';
import Footer from './components/Footer.js';

import { getParts } from './utils/partService.js';

export const PartContext = createContext();

function App() {

  const [allParts, setAllParts] = useState([]);
  const [parts, setParts] = useState([]);
  const [part, setPart] = useState([]);

  useEffect(() => {
    getParts().then(partList => { return setAllParts(partList) })
  }, [])

  useEffect(() => {
    getParts().then(partList => { return setParts(partList) })
  }, [])

  return (

    <PartContext.Provider value={{ allParts, parts, setParts, part, setPart }}>
      <BrowserRouter>
        <Navbar />
        <Filter />
        <Routes>
          <Route path="/" element={<PartList parts={parts}></PartList>}>
          </Route>
          <Route path='partdetail' element={<PartDetail></PartDetail>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </PartContext.Provider>

  );
}

export default App;