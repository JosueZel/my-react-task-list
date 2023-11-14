import React from 'react';
import { Container, Flex, ChakraProvider,Center } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import TaskList from './Components/TaskList';
import Menu from './pages/Menu';
import Home from './pages/Home';
import SobreNosotros from './pages/SobreNosotros';

function App() {
  return (
    <Router>
      <ChakraProvider>
        
        <Flex
          direction="column"
          align="center"
          justify="center"
          minH="100vh" 
        >
          <Header/> <Menu />
          <Flex
            justifyContent="space-between"
            alignItems="center"
            padding="4"
            width="100%"
          >
          
          </Flex>

          <Flex
            justifyContent="space-between"
            alignItems="center"
            padding="4"
            width="100%"
          >
            
          </Flex>

          <Container maxW="container.lg" py="4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tareas" element={<TaskList />} />
              <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            </Routes>
          </Container>
        </Flex>
      </ChakraProvider>
    </Router>
  );
}

export default App;
