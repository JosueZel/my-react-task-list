// Importar los componentes de Chakra UI
import { Box, Heading, Text } from "@chakra-ui/react";

function SobreNosotros() {
  return (
    <Box
      padding="8"
      margin="auto"
      maxWidth="800px"
      boxShadow="lg"
    >
      <Heading
        size="xl"
        color="teal.500"
        fontWeight="bold"
      >
        Sobre Nosotros
      </Heading>
      <Text
        fontSize="lg"
        color="gray.700"
        textAlign="justify"
      >
        Esta es una aplicación que te permite crear y gestionar tu lista de tareas de forma fácil y rápida. Con esta aplicación podrás agregar, editar, eliminar y completar tus tareas, así como ver tu progreso. Además, podrás disfrutar de un diseño simple y agradable gracias a Chakra UI.
      </Text>
    </Box>
  );
}

export default SobreNosotros;
