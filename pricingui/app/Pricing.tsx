import {
  Box,
  Flex,
  Heading,
  Button,
  HStack,
  Icon,
  Text,
} from "@chakra-ui/react";
import React from "react";
import checkMarkIcon from "./Icons/checkMarkIcon";

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
        <Box pt="50px" pl="25px" pr="10px">
          <Text mb="10px">
             Access these futures when you get this pricing package for your business.
          </Text>
          <HStack mb={"15px"}>
            <Icon as={checkMarkIcon} />
            <Text>International calling and messaging API</Text>
          </HStack>
          <HStack mb={"15px"}>
            <Icon as={checkMarkIcon} />
            <Text>Additional phone numbers</Text>
          </HStack>
          <HStack mb={"15px"}>
            <Icon as={checkMarkIcon} />
            <Text>Automated messages via Zapier</Text>
          </HStack>
          <HStack mb={"15px"}>
            <Icon as={checkMarkIcon} />
            <Text>24/7 support and consulting</Text>
          </HStack>{" "}
        </Box>
      </Flex>
    </Box>
  );
}
