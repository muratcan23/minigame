import {
  Box,
  Flex,
  Image,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react";

const Warning = () => {
  return (
    <Flex
      direction={["column", "row"]}
      w="100%"
      background="#138d69"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        height="350px"
        background="#54AE6C"
        borderTopRadius="25%"
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
              <ListItem fontFamily="monospace" fontWeight="bold" color="black">
                <Text
                  fontFamily="monospace"
                  fontWeight="bold"
                  color="black"
                  fontSize="16px"
                >
                  Hey, be careful! before You begin. If you are not familiar to
                  loose do not play with me.😡
                </Text>
              </ListItem>
              <ListItem fontFamily="monospace" fontWeight="bold" color="black">
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
              <ListItem fontFamily="monospace" fontWeight="bold" color="black">
                <Text
                  fontFamily="monospace"
                  fontWeight="bold"
                  color="black"
                  fontSize="16px"
                >
                  Keep your expectaions low.😒
                </Text>
              </ListItem>
              <ListItem fontFamily="monospace" fontWeight="bold" color="black">
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
  );
};

export default Warning;
