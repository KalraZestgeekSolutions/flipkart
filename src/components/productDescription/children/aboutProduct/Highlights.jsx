/* eslint-disable react/prop-types */
import { Box, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
const Highlights = ({ product }) => {
  return (
    <Flex gap="3" alignItems="start" justifyContent="start" w="100%">
      <Box>
        <Text size="lg" color="gray.500">
          Highlights:
        </Text>
      </Box>
      <Box
        w="100%"
        fontWeight={500}
        display="flex"
        flexDirection="column"
        gap="2"
        color="black"
        fontSize={14}
        mt="2px"
      >
        <UnorderedList color="gray.500">
          {product.productDetails.map((details) => {
            return (
              <React.Fragment key={details}>
                <ListItem>
                  <Text color="black">{details}</Text>
                </ListItem>
              </React.Fragment>
            );
          })}
        </UnorderedList>
      </Box>
    </Flex>
  );
};

export default Highlights;
