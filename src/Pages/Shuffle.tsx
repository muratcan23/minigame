import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import { Link } from "react-router-dom";

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
      h="100%"
    >
      <Flex background="#6A6562" borderRadius="50%">
        <Text
          fontFamily="heading"
          fontSize="30px"
          fontWeight="bold"
          p={10}
          textColor="Scrollbar"
        >
          Welcome to Shuffle Apple
        </Text>
      </Flex>
      <Box>-0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16-</Box>
      <p className="p">
        As you see we have numbers from 0 to 16. Whenever you click on our magic
        button we will divide numbers into 4 teams. Each team has unique
        numbers.
      </p>
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
      <Link to="/">Home</Link>;
    </Flex>
  );
};

export default Shuffle;
