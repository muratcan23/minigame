import {
  Button,
  Divider,
  Flex,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import HomeIcon from "../Components/icons/HomeIcon";

const Shuffle: FC = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const arr1: number[] = [];
  const arr2: number[] = [];
  const arr3: number[] = [];
  const arr4: number[] = [];

  const handleClick = () => {
    const itemList = Array.from(Array(16).keys());

    const shuffledNumbers = itemList.sort(function () {
      return Math.random() - 0.5;
    });
    setNumbers(shuffledNumbers);
  };
  numbers.map((item, i) => {
    if (i < 4) return arr1.push(item);
    if (i < 8) return arr2.push(item);
    if (i < 12) return arr3.push(item);
    if (i < 16) return arr4.push(item);
  });

  return (
    <Flex
      flexDirection="column"
      backgroundColor="#8A8D7F"
      alignItems="center"
      h="100vh"
      w="100vw"
    >
      <Flex
        background="#6A6562"
        borderRadius="5px"
        w="450px"
        h="70px"
        alignItems="center"
        justifyContent="center"
      >
        <Text
          fontFamily="heading"
          fontSize="30px"
          fontWeight="bold"
          p={10}
          textColor="Scrollbar"
        >
          Welcome to Shuffle Game
        </Text>
      </Flex>
      <Divider color="red" border="1px solid #7B1A42" />
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
              As you see above we have numbers from 0 to 16 on the
              table.Whenever you click on our magic button numbers will be
              divided into 4 clusters. Each cluster will have unique numbers.
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
              <span style={{ color: "black" }}> 5 </span> rounds. No more no
              less .
            </Text>
          </ListItem>
        </UnorderedList>
      </Flex>

      <div className="showcase">
        <br></br>
        {arr1.map((item) => {
          return <span key={item}>*** {item}*** </span>;
        })}
        <br></br>
        {arr2.map((item) => {
          return <span key={item}>*** {item}*** </span>;
        })}
        <br></br>
        {arr3.map((item) => {
          return <span key={item}>*** {item}*** </span>;
        })}
        <br></br>
        {arr4.map((item) => {
          return <span key={item}>*** {item}*** </span>;
        })}
        <br></br>
      </div>
      <h3 className="ready">Are you ready to shuffle them all?</h3>
      <Flex>
        <Button size="md" onClick={handleClick} cursor="cell">
          Let's Shuffle
        </Button>
      </Flex>
      <p className="gest">Discussed in Belgium, coded in Turkey</p>
      <Flex
        mt="auto"
        mb="15px"
        alignItems="center"
        justifyContent="center"
        as={ReactRouterLink}
        to="/"
        h="40px"
        w="40px"
        p={0}
        border="1px solid green"
        bg="#138d69"
        borderRadius="35%"
      >
        <HomeIcon color="white" />
      </Flex>
    </Flex>
  );
};

export default Shuffle;
