import {
  Box,
  Divider,
  Flex,
  HStack,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { FC, SetStateAction, useState } from "react";
import HomeLink from "../Components/HomeLink";

const Shuffle: FC = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [round, setRound] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  // Radio pick
  const [value, setValue] = useState("");

  const handleRadioChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setValue(event.target.value);
  };

  const arr1: number[] = [];
  const arr2: number[] = [];
  const arr3: number[] = [];
  const arr4: number[] = [];

  const handleClick = () => {
    // To limit 5 rounds
    if (round < 5) {
      const itemList = Array.from(Array(16).keys());

      const shuffledNumbers = itemList.sort(function () {
        return Math.random() - 0.5;
      });
      setNumbers(shuffledNumbers);

      setRound(round + 1);
    } else {
      // Stop the game
      setIsDisabled(true);
    }
  };

  // refresh page
  const handleRestart = () => {
    setNumbers([]);
    setRound(0);
    setIsDisabled(false);
  };

  numbers.map((item, i) => {
    if (i < 4) return arr1.push(item);
    if (i < 8) return arr2.push(item);
    if (i < 12) return arr3.push(item);
    if (i < 16) return arr4.push(item);
  });

  const sumArray = (arr: number[]) => {
    return arr.reduce((sum, num) => sum + num, 0);
  };

  const sum1 = sumArray(arr1);
  const sum2 = sumArray(arr2);
  const sum3 = sumArray(arr3);
  const sum4 = sumArray(arr4);

  let winner = "";
  const maxSum = Math.max(sum1, sum2, sum3, sum4);

  switch (maxSum) {
    case sum1:
      winner = "A";
      break;
    case sum2:
      winner = "B";
      break;
    case sum3:
      winner = "C";
      break;
    case sum4:
      winner = "D";
      break;
  }

  return (
    <Flex
      flexDirection="column"
      backgroundColor="#8A8D7F"
      alignItems="center"
      h="100%"
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
      <HStack m="4px" spacing="55px">
        {/* A */}
        <Flex
          h="90px"
          w="200px"
          borderRadius="5px"
          border="1px solid black"
          bg="#4283B1"
          flexDirection="column"
          justifyContent="center"
        >
          <Flex>
            <Flex
              border="1px solid red"
              borderRadius="2px"
              bg="#BEE27A"
              w="42x"
              h="42px"
              alignItems="center"
              justifyContent="center"
              m="2px auto auto 3px"
            >
              <Text
                fontFamily="heading"
                fontSize="18px"
                fontWeight="bold"
                color="black"
              >
                A
              </Text>
            </Flex>
            <Flex
              border="1px solid  red"
              h="45px"
              w="125px"
              alignItems="center"
              bg="#E7DDDD"
              borderLeftRadius="25px"
            >
              <Text
                fontFamily="body"
                fontSize="20px"
                ml="15px"
                letterSpacing="2px"
              >
                {arr1.map((item) => {
                  return <span key={item}> {item}</span>;
                })}
              </Text>
            </Flex>
          </Flex>

          <Flex h="40px" ml="auto">
            <Text mr="5px" fontSize="18px" fontWeight="bold" color="#EEE4E4">
              Sum A = {sum1}
            </Text>
          </Flex>
        </Flex>
        {/* B */}
        <Flex
          h="90px"
          w="200px"
          borderRadius="5px"
          border="1px solid black"
          bg="#4283B1"
          flexDirection="column"
          justifyContent="center"
        >
          <Flex>
            <Flex
              border="1px solid red"
              borderRadius="2px"
              bg="#BEE27A"
              w="42x"
              h="42px"
              alignItems="center"
              justifyContent="center"
              m="2px auto auto 3px"
            >
              <Text
                fontFamily="heading"
                fontSize="18px"
                fontWeight="bold"
                color="black"
              >
                B
              </Text>
            </Flex>
            <Flex
              border="1px solid  red"
              h="45px"
              w="125px"
              alignItems="center"
              bg="#E7DDDD"
              borderLeftRadius="25px"
            >
              <Text
                fontFamily="body"
                fontSize="20px"
                ml="15px"
                letterSpacing="2px"
              >
                {arr2.map((item) => {
                  return <span key={item}> {item}</span>;
                })}
              </Text>
            </Flex>
          </Flex>

          <Flex h="40px" ml="auto">
            <Text mr="5px" fontSize="18px" fontWeight="bold" color="#EEE4E4">
              Sum B = {sum2}
            </Text>
          </Flex>
        </Flex>

        {/* C */}
        <Flex
          h="90px"
          w="200px"
          borderRadius="5px"
          border="1px solid black"
          bg="#4283B1"
          flexDirection="column"
          justifyContent="center"
        >
          <Flex>
            <Flex
              border="1px solid red"
              borderRadius="2px"
              bg="#BEE27A"
              w="42x"
              h="42px"
              alignItems="center"
              justifyContent="center"
              m="2px auto auto 3px"
            >
              <Text
                fontFamily="heading"
                fontSize="18px"
                fontWeight="bold"
                color="black"
              >
                C
              </Text>
            </Flex>
            <Flex
              border="1px solid  red"
              h="45px"
              w="125px"
              alignItems="center"
              bg="#E7DDDD"
              borderLeftRadius="25px"
            >
              <Text
                fontFamily="body"
                fontSize="20px"
                ml="15px"
                letterSpacing="2px"
              >
                {arr3.map((item) => {
                  return <span key={item}> {item}</span>;
                })}
              </Text>
            </Flex>
          </Flex>
          <Flex h="40px" ml="auto">
            <Text mr="5px" fontSize="18px" fontWeight="bold" color="#EEE4E4">
              Sum C = {sum3}
            </Text>
          </Flex>
        </Flex>

        {/* D */}
        <Flex
          h="90px"
          w="200px"
          borderRadius="5px"
          border="1px solid black"
          bg="#4283B1"
          flexDirection="column"
          justifyContent="center"
        >
          <Flex>
            <Flex
              border="1px solid red"
              borderRadius="2px"
              bg="#BEE27A"
              w="42x"
              h="42px"
              alignItems="center"
              justifyContent="center"
              m="2px auto auto 3px"
            >
              <Text
                fontFamily="heading"
                fontSize="18px"
                fontWeight="bold"
                color="black"
              >
                D
              </Text>
            </Flex>
            <Flex
              border="1px solid  red"
              h="45px"
              w="125px"
              alignItems="center"
              bg="#E7DDDD"
              borderLeftRadius="25px"
            >
              <Text
                fontFamily="body"
                fontSize="20px"
                ml="15px"
                letterSpacing="2px"
              >
                {arr4.map((item) => {
                  return <span key={item}> {item}</span>;
                })}
              </Text>
            </Flex>
          </Flex>

          <Flex h="40px" ml="auto">
            <Text mr="5px" fontSize="18px" fontWeight="bold" color="#EEE4E4">
              Sum D = {sum4}
            </Text>
          </Flex>
        </Flex>
      </HStack>

      <Box
        color="AppWorkspace"
        border="1px solid black"
        bg="darkcyan"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100%"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="15%"
          height="100%"
        >
          <Text mt="1px" fontFamily="heading" fontSize="20px" fontWeight="bold">
            Winner is = <span style={{ color: "tomato" }}>{winner}</span>
          </Text>
        </Box>
        <Text mt="1px" fontFamily="heading" fontSize="20px" fontWeight="bold">
          Round: {round}
        </Text>
      </Box>
      <Flex>
        <Text fontSize="20px" fontWeight="bold">
          You Selected= <span style={{ color: "#fff" }}>{value}</span>
        </Text>
      </Flex>

      {/* pick */}
      <HStack
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="65px"
        border="1px solid red"
        bg="#EAE8AE"
        spacing="12%"
      >
        <Box>
          <input
            type="radio"
            name="radioGroup"
            value="A"
            style={{ cursor: "pointer" }}
            onChange={handleRadioChange}
          />
          A
        </Box>
        <Box>
          <input
            type="radio"
            name="radioGroup"
            value="B"
            style={{ cursor: "pointer" }}
            onChange={handleRadioChange}
          />
          B
        </Box>
        <Box>
          <input
            type="radio"
            name="radioGroup"
            value="C"
            style={{ cursor: "pointer" }}
            onChange={handleRadioChange}
          />
          C
        </Box>
        <Box>
          <input
            type="radio"
            name="radioGroup"
            value="D"
            style={{ cursor: "pointer" }}
            onChange={handleRadioChange}
          />
          D
        </Box>
      </HStack>

      {/* play and reset */}
      <Flex>
        <Flex
          border="2px solid black"
          as="button"
          cursor="pointer"
          h="40px"
          w="75px"
          borderRadius="5px"
          fontWeight="bold"
          fontSize="15px"
          mt="10px"
          _hover={{ background: "tomato" }}
          onClick={handleClick}
          disabled={isDisabled}
          alignItems="center"
          justifyContent="center"
        >
          {isDisabled ? "Game Over" : "PLAY"}
        </Flex>
        <Divider />
        <Flex
          border="2px solid black"
          as="button"
          cursor="pointer"
          h="40px"
          w="75px"
          borderRadius="5px"
          fontWeight="bold"
          fontSize="15px"
          mt="10px"
          _hover={{ background: "#66ACB0" }}
          onClick={handleRestart}
          alignItems="center"
          justifyContent="center"
        >
          RESET
        </Flex>
      </Flex>
      <HomeLink />
      <Text fontSize="12px" fontWeight="hairline">
        Discussed in Belgium, coded in Turkey
      </Text>
    </Flex>
  );
};

export default Shuffle;
