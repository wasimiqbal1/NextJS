import { Box, Flex, Heading, Button, HStack } from "@chakra-ui/react";
import React from "react";

export default function Pricing() {
  return (
    <Box>
      <Flex>
        <Box bg="#cbb8ee" p="60px" textAlign={"center"}>
          <text fontSize={"24px"} fontWeight={"bold"}>
            Premium PRO
          </text>
          <Heading fontSize={"60px"}>$329</Heading>
          <text> Billed Just Once</text>
          <div>
            <Button mt={"10px"} w={"300px"} color={"white"} bg={"#805ad5"}>
              Get Started
            </Button>
          </div>
        </Box>
        <Box pt={"50px"} pl={"25px"}>
          <text>
            Access these futures when you get this pricing package for your
            business.
          </text>
          <HStack>
            <text>
                International Calling and messageing API 
            </text>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}
