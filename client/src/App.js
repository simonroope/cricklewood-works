import './App.css';

import Navbar from './components/Navbar.js';
import PartList from './components/PartList.js';
import PartDetail from './components/PartDetail.js';

import { getParts } from './utils/partService.js';
import { useState, useEffect, createContext} from 'react';

export const PartContext = createContext();

function App() {

  const [parts, setParts] = useState([]);
  const [part, setPart] = useState([]);

  useEffect(() => {
    getParts().then(partList => setParts(partList))  
  }, [])

  return (

    <PartContext.Provider value={{ parts, setParts, part, setPart }}>
      <Navbar/>
      <PartList parts={parts} />
      <PartDetail />
    </PartContext.Provider>
  );
}

export default App;