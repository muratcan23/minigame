import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";

const About = () => {
  // Example shuffle method

  return (
    <Flex
      p={4}
      bg="gray.200"
      borderRadius="md"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Center>
        <Heading as="h1" size="lg" mb={4} color="teal.600">
          About
        </Heading>
      </Center>
      <Text mb={4} color="gray.700">
        This mini game API was developed using React and Chakra UI. It provides
        a set of features for building interactive games.
      </Text>
      <Text mb={4} color="gray.700">
        The mini game included in this API utilizes the shuffle method to add an
        element of randomness and challenge. The shuffle method is used to
        randomize the order of elements, creating a dynamic and unpredictable
        experience for players.
      </Text>
      <Text mb={4} color="gray.700">
        Here's an example of a shuffle method implementation:
      </Text>
      <Box p={4} bg="gray.100" borderRadius="md">
        <Text fontFamily="monospace" fontSize="sm" color="gray.800">
          {`const shuffleArray = (array) => {
  // ... implementation of the shuffle method
};`}
        </Text>
      </Box>
    </Flex>
  );
};

export default About;
