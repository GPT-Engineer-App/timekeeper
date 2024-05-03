import React, { useState, useEffect } from "react";
import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { FaPlay, FaPause, FaSync } from "react-icons/fa";

const Index = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <VStack spacing={4}>
      <Text fontSize="4xl" fontFamily="monospace">
        {new Date(seconds * 1000).toISOString().substr(11, 8)}
      </Text>
      <Box>
        <Button onClick={toggle} leftIcon={isActive ? <FaPause /> : <FaPlay />} colorScheme="teal" mr={3}>
          {isActive ? "Pause" : "Start"}
        </Button>
        <Button onClick={reset} leftIcon={<FaSync />} colorScheme="gray">
          Reset
        </Button>
      </Box>
    </VStack>
  );
};

export default Index;
