// Complete the Index page component here
// Use chakra-ui
import { Box, Button, Input, Stack, Text, Image, VStack, Divider } from "@chakra-ui/react";
import { FaGoogle, FaApple } from "react-icons/fa";

const Index = () => {
  return (
    <VStack minH="100vh" justifyContent="center" alignItems="center" p={4}>
      <Box maxW="sm" w="full" p={8} borderWidth={1} borderRadius="lg" boxShadow="lg">
        <VStack spacing={4}>
          <Image borderRadius="full" boxSize="100px" src="https://images.unsplash.com/photo-1642480485642-63b9018eadc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwbG9naW4lMjBpY29ufGVufDB8fHx8MTcxMzcxMTUxNHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Login Icon" />
          <Text fontSize="2xl" fontWeight="bold">
            Login
          </Text>
          <Input placeholder="Email address" />
          <Button colorScheme="teal" w="full">
            Login
          </Button>
          <Divider />
          <Button leftIcon={<FaGoogle />} colorScheme="red" variant="outline" w="full">
            Login with Google
          </Button>
          <Button leftIcon={<FaApple />} colorScheme="gray" variant="outline" w="full">
            Login with Apple
          </Button>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Index;
