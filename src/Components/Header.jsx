import { Flex, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      justify="center"
      align="center"
      bgGradient="linear(to-r, teal.500, blue.500)"
      color="white"
      p="4"
      boxShadow="md"
    >
      <Text fontSize="3xl" fontWeight="bold">
        🚀 Mi Aplicación de Tareas 📝
      </Text>
    </Flex>
  );
}
