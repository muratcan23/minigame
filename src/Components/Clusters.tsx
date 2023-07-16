import { Flex, Text } from "@chakra-ui/react";
import React from "react";

interface ClustersProps {
  arr1: number[];
  arr2: number[];
  arr3: number[];
  arr4: number[];
  sum1: number;
  sum2: number;
  sum3: number;
  sum4: number;
}

const Clusters: React.FC<ClustersProps> = ({
  arr1,
  sum1,
  arr2,
  sum2,
  arr3,
  sum3,
  arr4,
  sum4,
}) => {
  return (
    // A

    <>
      {/* A */}
      <Flex
        height={90}
        width={200}
        borderRadius="5px"
        border="1px solid black"
        backgroundColor="#4283B1"
        flexDirection="column"
        justifyContent="center"
      >
        <Flex>
          <Flex
            border="1px solid red"
            borderRadius="2px"
            backgroundColor="#BEE27A"
            width={42}
            height={42}
            alignItems="center"
            justifyContent="center"
            margin="2px auto auto 3px"
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
            border="1px solid red"
            height={45}
            width={125}
            alignItems="center"
            backgroundColor="#E7DDDD"
            borderLeftRadius="25px"
          >
            <Text
              fontFamily="body"
              fontSize="20px"
              marginLeft="15px"
              letterSpacing="2px"
            >
              {arr1.map((item) => {
                return <span key={item}> {item}</span>;
              })}
            </Text>
          </Flex>
        </Flex>

        <Flex height={40} marginLeft="auto">
          <Text
            marginRight="5px"
            fontSize="18px"
            fontWeight="bold"
            color="#EEE4E4"
          >
            Sum A = {sum1}
          </Text>
        </Flex>
      </Flex>
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
            width={42}
            height={42}
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
            width={42}
            height={42}
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
            width={42}
            height={42}
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
    </>
  );
};

export default Clusters;
