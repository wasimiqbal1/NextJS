import { Box, Flex, HStack, Icon } from "@chakra-ui/react";
import React from "react";
import icon1 from "./Icons/icon1";
import icon2 from "./Icons/icon2";
import icon3 from "./Icons/icon3";

export default function Features() {
  return (
    <Box maxW={"800px"} m="auto" mt="25px" px="50px">
      <Flex direction={{ base: "column", lg: "row" }}>
        <HStack mb="20px">
          <Icon as={icon1} />
          <text>30 days money back Guarantee</text>
        </HStack>

        <HStack mb="20px">
          <Icon as={icon2} />
          <text>No setup fee 100% Hassle-free</text>
        </HStack>

        <HStack mb="20px">
          <Icon as={icon3} />
          <text>30 days money back Guarantee</text>
        </HStack>
      </Flex>
    </Box>
  );
}
