import React, {useState} from 'react';
import './App.css';
import Allroutes from './Router/Allroutes';
import Navbar from './Components/Navbar'
import { useDisclosure } from '@chakra-ui/react'

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [search, Setsearch]=useState();

  

  return (
    <>
      <Navbar isOpen={isOpen} onClose={onClose} onOpen={onOpen} Setsearch={Setsearch}/>
      
     <Allroutes isOpen={isOpen} onClose={onClose} onOpen={onOpen} search={search}/>
     
    </>
    
  )
}

export default App;
