import React from "react";
import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";

const GameBoard = () => {
  return (
    <VStack spacing={4} align="stretch">
      <Box p={5} shadow="md" borderWidth="1px">
        <Text fontSize="xl" mb={4}>
          Dealer's Hand:
        </Text>
      </Box>

      <Box p={5} shadow="md" borderWidth="1px">
        <Text fontSize="xl" mb={4}>
          Your Hand:
        </Text>
      </Box>
    </VStack>
  );
};

export default GameBoard;
