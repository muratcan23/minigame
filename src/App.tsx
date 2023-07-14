import { Flex, Text } from "@chakra-ui/react";
import Dart from "./Components/Dart";
import Warning from "./Components/Warning";

function App() {
  return (
    <Flex flexDirection="column" minHeight="100vh" cursor="none">
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

      <Warning />
      <Dart />
    </Flex>
  );
}

export default App;
