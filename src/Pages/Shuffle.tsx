import { Box, Divider, Flex, HStack, Text } from "@chakra-ui/react";
import { FC, SetStateAction, useState } from "react";
import Clusters from "../Components/Clusters";
import HomeLink from "../Components/HomeLink";
import Instructions from "../Components/Instructions";
import Picks from "../Components/icons/Picks";

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

  const handleRefreshClick = () => {
    window.location.reload();
  };

  // const handleRestart = () => {
  //   setNumbers([]);
  //   setRound(0);
  //   setIsDisabled(false);
  // };

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

      <Instructions />

      <HStack m="4px" spacing="55px">
        <Clusters
          arr1={arr1}
          arr2={arr2}
          arr3={arr3}
          arr4={arr4}
          sum1={sum1}
          sum2={sum2}
          sum3={sum3}
          sum4={sum4}
        />
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

      <Picks handleRadioChange={handleRadioChange} />

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
          onClick={handleRefreshClick}
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
