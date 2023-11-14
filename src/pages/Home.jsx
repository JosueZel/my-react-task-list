import { Box, Text, Stack, Image } from "@chakra-ui/react";
import React from "react";

function Home() {
  return (
    <Stack
      direction="column"
      spacing="8"
      align="center"
      justify="center"
    >
      <Box
        backgroundColor="teal.100"
        borderRadius="lg"
        p="8"
        textAlign="center"
      >
        <Text fontSize="4xl" color="teal.500" mb="4">
          ¡Bienvenido a tu Lista de Tareas!
        </Text>
        <Text fontSize="lg" color="teal.700">
          Organiza tu día de manera eficiente con nuestra aplicación fácil de
          usar.
        </Text>
      </Box>

      <Image
        src="https://media.istockphoto.com/id/1295900106/es/foto/cient%C3%ADficos-de-datos-programador-masculino-que-utiliza-el-ordenador-port%C3%A1til-analizando-y.jpg?s=1024x1024&w=is&k=20&c=ZakfUTmyXKUdHh9egMg47CmkY1dS96DSp_YzAVKqaBo=" 
        alt="Logo de la aplicación"
        boxSize="200px"
        borderRadius="full"
        objectFit="cover"
      />
    </Stack>
  );
}

export default Home;
