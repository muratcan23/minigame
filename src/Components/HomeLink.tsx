import { Flex, Tooltip } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import HomeIcon from "./icons/HomeIcon";

const HomeLink = () => {
  return (
    <Tooltip label="Go to home" bg="red.600" placement="right-start">
      <Flex
        mt="5px"
        mb="auto"
        alignItems="center"
        justifyContent="center"
        as={ReactRouterLink}
        to="/"
        h="40px"
        w="40px"
        border="1px solid green"
        bg="#138d69"
        borderRadius="35%"
      >
        <HomeIcon color="white" />
      </Flex>
    </Tooltip>
  );
};

export default HomeLink;
