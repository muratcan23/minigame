import { Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";

const Instructions = () => {
  return (
    <Flex
      flexDirection="column"
      bg="#138d69"
      m="4px"
      alignItems="center"
      justifyContent="center"
    >
      <Text color="#841449" fontWeight="bold" fontSize="20px">
        GET READY!
      </Text>

      <UnorderedList w="80%">
        <ListItem>
          <Text
            fontFamily="inherit"
            color="#EAC04A"
            fontWeight="bold"
            m="4px"
            fontSize="20px"
          >
            As you see we have numbers from 0 to 16 on the table.Whenever you
            click on our magic button numbers will be divided into 4 clusters.
            Each cluster will have unique numbers.
          </Text>
        </ListItem>

        <ListItem>
          <Text
            fontFamily="inherit"
            color="#EAC04A"
            fontWeight="bold"
            m="4px"
            fontSize="20px"
          >
            Each cluster numbers will be a sum in itself. And the biggest one
            will be the Winner.
          </Text>
        </ListItem>

        <ListItem>
          <Text
            fontFamily="inherit"
            color="#EAC04A"
            fontWeight="bold"
            m="4px"
            fontSize="20px"
          >
            All you have to do is pick which cluster you think will be the
            <span style={{ color: "#7E300C" }}> WINNER </span>.
          </Text>
        </ListItem>
        <ListItem>
          <Text
            fontFamily="inherit"
            color="#EAC04A"
            fontWeight="bold"
            m="4px"
            fontSize="20px"
          >
            The only way to win is to predict the right cluster, otherwise, u
            will <span style={{ color: "#92B7EA" }}> loose </span>...
          </Text>
        </ListItem>
        <ListItem>
          <Text
            fontFamily="inherit"
            color="#EAC04A"
            fontWeight="bold"
            m="4px"
            fontSize="20px"
          >
            There will be only will
            <span style={{ color: "black" }}> 5 </span> rounds. No more no less
            .
          </Text>
        </ListItem>
      </UnorderedList>
      <Flex flexDirection="column">
        <Text
          m="0"
          fontFamily="cursive"
          fontWeight="hairline"
          color="ButtonShadow"
        >
          Table:
        </Text>
        <Flex
          border="5px solid #746E6E"
          borderRadius="5px"
          bg="#BD5151"
          h="60px"
          w="355px"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontFamily="body" fontWeight="bold" letterSpacing="1px">
            0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Instructions;
