import './App.css';

import Navbar from './components/Navbar.js';
import PartList from './components/PartList.js';
import PartDetail from './components/PartDetail.js';

import { getParts } from './utils/partService.js';
import { useState, useEffect } from 'react';

function App() {

  const [parts, setParts] = useState([]);
  const [part, setPart] = useState([]);

  useEffect(() => {
    getParts().then(partList => setParts(partList))  
  }, [])

  // Git comment

  return (

    <>
     <Navbar/>
     <PartList parts={parts} setParts={setParts}/>
     <PartDetail part={part} setPart={setPart}/>
    </>
  );
}

export default App;