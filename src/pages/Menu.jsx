import { Tabs, Tab, TabList } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <Tabs variant="enclosed" colorScheme="teal" align="center">
      <TabList>
        <Tab as={Link} to="/">
          Inicio
        </Tab>
        <Tab as={Link} to="/tareas">
          Tareas
        </Tab>
        <Tab as={Link} to="/sobre-nosotros">
          Sobre nosotros
        </Tab>
      </TabList>
    </Tabs>
  );
}

export default Menu;
