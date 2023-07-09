import { Box, Button, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { Link, Link as ReactRouterLink } from "react-router-dom";

function App() {
  return (
    <Flex flexDirection="column">
      <Flex
        background="#111111"
        justifyContent="center"
        alignItems="center"
        h="10rem"
      >
        <Text
          fontFamily="fantasy"
          justifyContent="center"
          alignItems="center"
          color="#fff"
          fontSize="25px"
        >
          Welcome to my mini-game app.
        </Text>
      </Flex>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Flex
          background="#0bc6e3"
          h="5%rem"
          w="100%"
          justifyContent="center"
          alignItems="center"
          marginBottom=".5rem"
        >
          <Flex
            margin="2px"
            borderRadius="44%"
            color="#92BED7"
            _hover={{ background: "#33390C" }}
          >
            <Button
              as={ReactRouterLink}
              to="/about"
              p="1rem"
              color="#481710"
              fontWeight="bold"
              textDecoration="none"
              transition="color 0.3s"
              _hover={{ color: "#fff" }}
            >
              About
            </Button>
          </Flex>
        </Flex>
        <Flex
          w="100%"
          background="black"
          alignItems="center"
          justifyContent="center"
        >
          <Flex height="350px" background="#E4AE6C" borderRadius="5%">
            <Flex w="70%">
              <Image
                h="250px"
                w="50%"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Warning_sign_font_awesome-red.svg/2048px-Warning_sign_font_awesome-red.svg.png"
              ></Image>
              <Flex w="100%">
                <Text fontFamily="monospace" fontWeight="bold" color="black">
                  Hey, be careful! before You begin. If you are not familiar to
                  loose do not play with me.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Divider />
        <Flex
          background="#8F2C19"
          h="400px"
          w="100%"
          justifyContent="center"
          alignItems="center"
          marginBottom="1rem"
          position="relative"
          flexDirection="row"
          _hover={{ background: "tomato" }}
        >
          <Link
            to="/shuffle"
            color="#fff"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "1rem",
              background: "#f48024",
              fontSize: "20px",
              fontWeight: "bold",
              borderRadius: "5px",
              zIndex: 1,
            }}
          >
            I want to play a game
          </Link>
          <Box boxSize="sm">
            <Image
              src="https://i.ytimg.com/vi/4siRWMULqj4/hqdefault.jpg"
              alt="Dan Abramov"
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
