import { Flex, Image, Text } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import CustomCursor from "../constants/CustomCursor";

const Dart = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      alignItems="center"
      justifyContent="center"
      bg="#7C978F"
      cursor="none"
      position="relative"
    >
      <CustomCursor />
      <Flex
        background="#8F2C19"
        h="500px"
        w="500px"
        justifyContent="center"
        alignItems="center"
        position="relative"
        flexDirection="row"
        borderRadius="50%"
        _hover={{ background: "orange" }}
      >
        <Flex
          background="#8F2C19"
          h="400px"
          w="400px"
          justifyContent="center"
          alignItems="center"
          position="relative"
          flexDirection="row"
          borderRadius="50%"
          _hover={{ background: "tomato" }}
          border="2px solid #8BDECF"
        >
          <Flex
            border="3px solid yellow"
            borderRadius="50%"
            h="300px"
            w="300px"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            _hover={{ background: " red" }}
          >
            <Flex
              h="200px"
              w="200px"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src="https://i.ytimg.com/vi/4siRWMULqj4/hqdefault.jpg"
                alt="Dan Abramov"
                objectFit="cover"
                w="100%"
                h="100%"
                borderRadius="50%"
              />
            </Flex>

            <Flex
              as={ReactRouterLink}
              to="/shuffle"
              color="#fff"
              borderRadius="19px"
              _hover={{ background: "#5D8C12" }}
              cursor="none"
            >
              <Text
                fontFamily="cursive"
                fontSize="15px"
                fontWeight="bold"
                p={1}
                _hover={{ color: "#EAE8AA" }}
              >
                I want to play a game
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Dart;
