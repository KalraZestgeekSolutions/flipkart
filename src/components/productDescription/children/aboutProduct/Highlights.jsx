/* eslint-disable react/prop-types */
import { Box, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";

const Highlights = ({ product }) => {
  const productDetails = product.productDetails;

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
          {productDetails.map((details) => {
            return (
              <ListItem key={details}>
                <Text color="black">{details}</Text>
              </ListItem>
            );
          })}
        </UnorderedList>
      </Box>
    </Flex>
  );
};

export { Highlights };
