import {
  AbsoluteCenter,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react";
import { Link, Link as ReactRouterLink } from "react-router-dom";

function App() {
  return (
    <Flex flexDirection="column" minHeight="100vh">
      <Flex
        background="#138D69"
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
        >
          <Flex
            margin="2px"
            borderRadius="47%"
            color="#92BED7"
            _hover={{ background: "#138D69" }}
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
          direction={["column", "row"]}
          w="100%"
          background="#138d69"
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            height="350px"
            background="#E4AE6C"
            borderRadius="10px"
            justifyContent="center"
            alignItems="center"
          >
            <Flex mr="auto" my="auto">
              <Box ml="20px">
                <Image
                  h="200px"
                  w="100%"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Warning_sign_font_awesome-red.svg/2048px-Warning_sign_font_awesome-red.svg.png"
                ></Image>
              </Box>
              <Flex w="100%">
                <OrderedList ml="30px">
                  <ListItem
                    fontFamily="monospace"
                    fontWeight="bold"
                    color="black"
                  >
                    <Text
                      fontFamily="monospace"
                      fontWeight="bold"
                      color="black"
                      fontSize="16px"
                    >
                      Hey, be careful! before You begin. If you are not familiar
                      to loose do not play with me.😡
                    </Text>
                  </ListItem>
                  <ListItem
                    fontFamily="monospace"
                    fontWeight="bold"
                    color="black"
                  >
                    <Text
                      fontFamily="monospace"
                      fontWeight="bold"
                      color="black"
                      fontSize="16px"
                    >
                      Uncomfortable with basic math? Skip playing with me.
                      <Text color="#BD120F" mt="-1px">
                        Equation: 4 + 4 + 4 + 4 = x, where x = 4/y. Can you
                        determine the value of y?
                      </Text>
                    </Text>
                  </ListItem>
                  <ListItem
                    fontFamily="monospace"
                    fontWeight="bold"
                    color="black"
                  >
                    <Text
                      fontFamily="monospace"
                      fontWeight="bold"
                      color="black"
                      fontSize="16px"
                    >
                      Keep your expectaions low.😒
                    </Text>
                  </ListItem>
                  <ListItem
                    fontFamily="monospace"
                    fontWeight="bold"
                    color="black"
                  >
                    <Text
                      fontFamily="monospace"
                      fontWeight="bold"
                      color="black"
                      fontSize="16px"
                    >
                      Don't be greedy it's just a game... 😊
                    </Text>
                  </ListItem>
                </OrderedList>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Box position="relative" padding="10" bg="green">
          <Divider h="10px" flex="1" bg="gray" />

          <AbsoluteCenter bg="white" px="4" fontFamily="fantasy">
            GAME
          </AbsoluteCenter>
        </Box>
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
