import { Box, Text, Stack, Image, Button } from "@chakra-ui/react";
import React from "react";

function Home() {
  return (
    <Stack
      direction="column"
      spacing="4"
      align="center"
      justify="center"
    >
      <Box
        bg="teal.500"
        borderRadius="xl"
        p="8"
        textAlign="center"
        boxShadow="md"
        color="white"
      >
        <Text fontSize="5xl" fontWeight="bold" mb="4">
          ¡Bienvenido a tu Lista de Tareas!
        </Text>
        <Text fontSize="xl" mb="8">
          Organiza tu día de manera eficiente con nuestra aplicación fácil de usar.
        </Text>
        
      </Box>

      <Image
        src="https://media.istockphoto.com/id/1295900106/es/foto/cient%C3%ADficos-de-datos-programador-masculino-que-utiliza-el-ordenador-port%C3%A1til-analizando-y.jpg?s=1024x1024&w=is&k=20&c=ZakfUTmyXKUdHh9egMg47CmkY1dS96DSp_YzAVKqaBo=" 
        alt="Logo de la aplicación"
        boxSize="300px"
        borderRadius="full"
        objectFit="cover"
        boxShadow="lg"
      />
    </Stack>
  );
}

export default Home;
