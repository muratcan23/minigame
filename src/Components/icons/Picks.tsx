import { Box } from "@chakra-ui/react";
import React, { useState } from "react";

interface PicksProps {
  handleRadioChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Picks: React.FC<PicksProps> = ({ handleRadioChange }) => {
  const [locked, setLocked] = useState(false);

  const handleRadioChangeWithLock = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!locked) {
      handleRadioChange(event);
      setLocked(true);
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="65px"
      border="px solid red"
      bg="#EAE8AE"
    >
      <Box marginRight="10%">
        <input
          type="radio"
          name="radioGroup"
          value="A"
          style={{ cursor: "pointer" }}
          onChange={handleRadioChangeWithLock}
          disabled={locked}
        />
        A
      </Box>
      <Box marginRight="10%">
        <input
          type="radio"
          name="radioGroup"
          value="B"
          style={{ cursor: "pointer" }}
          onChange={handleRadioChangeWithLock}
          disabled={locked}
        />
        B
      </Box>
      <Box marginRight="10%">
        <input
          type="radio"
          name="radioGroup"
          value="C"
          style={{ cursor: "pointer" }}
          onChange={handleRadioChangeWithLock}
          disabled={locked}
        />
        C
      </Box>
      <Box>
        <input
          type="radio"
          name="radioGroup"
          value="D"
          style={{ cursor: "pointer" }}
          onChange={handleRadioChangeWithLock}
          disabled={locked}
        />
        D
      </Box>
    </Box>
  );
};

export default Picks;
